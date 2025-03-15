import { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    setSuccess('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Login successful!');
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    setError('');
    setSuccess('');
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Logout successful!');
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="bg-blue-500 text-white p-2 rounded w-full mb-2"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className="bg-red-500 text-white p-2 rounded w-full"
      >
        {isLoading ? 'Logging out...' : 'Logout'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default Auth;