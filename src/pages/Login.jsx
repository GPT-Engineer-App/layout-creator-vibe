import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Login = () => {
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn({ provider: 'google' });
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;