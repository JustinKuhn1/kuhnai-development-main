import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else onClose();
  };

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login / Sign Up</h2>
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
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded w-full mb-2">Login</button>
        <button onClick={handleSignUp} className="bg-green-500 text-white p-2 rounded w-full">Sign Up</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button onClick={onClose} className="mt-4 text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default AuthModal;