import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else {
        setSuccessMessage('Login successful!');
        setTimeout(() => onClose(), 1000);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else {
        setSuccessMessage('Check your email to confirm your account!');
        setTimeout(() => setMode('login'), 3000);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) setError(error.message);
      else {
        setSuccessMessage('Password reset email sent!');
        setTimeout(() => setResetPassword(false), 3000);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) setError(error.message);
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
        {resetPassword ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
            <p className="mb-4 text-gray-600 text-sm">Enter your email address and we'll send you instructions to reset your password.</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="reset-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  className="p-2 border rounded w-full focus:ring-2 focus:ring-kuhn-teal focus:border-kuhn-teal"
                />
              </div>
              
              <button 
                onClick={handlePasswordReset}
                disabled={isLoading} 
                className="bg-kuhn-teal text-white p-2 rounded w-full font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Send Reset Link
              </button>
              
              <button 
                onClick={() => setResetPassword(false)}
                className="w-full text-gray-500 text-sm text-center hover:text-kuhn-teal"
              >
                Back to login
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            
            <div className="flex mb-6 border rounded-md overflow-hidden">
              <button
                onClick={() => { setMode('login'); setError(''); }}
                className={`flex-1 py-2 ${mode === 'login' ? 'bg-kuhn-teal text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Login
              </button>
              <button
                onClick={() => { setMode('signup'); setError(''); }}
                className={`flex-1 py-2 ${mode === 'signup' ? 'bg-kuhn-teal text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Sign Up
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  className="p-2 border rounded w-full focus:ring-2 focus:ring-kuhn-teal focus:border-kuhn-teal"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={mode === 'signup' ? "Create a password (min. 8 characters)" : "Enter your password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded w-full focus:ring-2 focus:ring-kuhn-teal focus:border-kuhn-teal"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                </div>
              </div>
              
              {mode === 'login' && (
                <div className="text-right">
                  <button
                    onClick={() => { setResetPassword(true); setError(''); }}
                    className="text-sm text-kuhn-teal hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              
              <button
                onClick={mode === 'login' ? handleLogin : handleSignUp}
                disabled={isLoading}
                className="bg-kuhn-teal text-white p-2 rounded w-full font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {mode === 'login' ? 'Login' : 'Create Account'}
              </button>
              
              <div className="flex items-center justify-between mt-4">
                <hr className="w-full border-gray-300" />
                <span className="px-2 text-gray-500">or</span>
                <hr className="w-full border-gray-300" />
              </div>
              
              <button
                onClick={() => handleSocialLogin('google')}
                className="bg-white border border-gray-300 text-gray-700 p-2 rounded w-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <img src="/icons/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                Continue with Google
              </button>
              
              <button
                onClick={() => handleSocialLogin('github')}
                className="bg-white border border-gray-300 text-gray-700 p-2 rounded w-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <img src="/icons/github.svg" alt="GitHub" className="h-5 w-5 mr-2" />
                Continue with GitHub
              </button>
            </div>
          </>
        )}
        
        {error && (
          <div className="mt-4 p-2 bg-red-100 border border-red-300 text-red-700 rounded">
            {error}
          </div>
        )}
        
        {successMessage && (
          <div className="mt-4 p-2 bg-green-100 border border-green-300 text-green-700 rounded">
            {successMessage}
          </div>
        )}
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default AuthModal;