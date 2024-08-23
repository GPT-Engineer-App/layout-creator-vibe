import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AuthToggle from '../components/molecules/AuthToggle';
import { supabase } from '../integrations/supabase';

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [authMethod, setAuthMethod] = useState('magic-link');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      let result;
      if (authMethod === 'magic-link') {
        result = await signIn({ email, authMethod });
      } else {
        result = await signIn({ email, password, authMethod });
      }
      if (result.error) throw result.error;
      setMessage(authMethod === 'magic-link' ? 'Check your email for the login link!' : 'Logged in successfully!');
    } catch (error) {
      setMessage(error.error_description || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      setMessage('Password reset email sent. Check your inbox.');
    } catch (error) {
      setMessage(error.error_description || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn}>
            <AuthToggle activeMethod={authMethod} onToggle={setAuthMethod} />
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {authMethod === 'password' && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="link"
                    className="mt-2 text-sm text-blue-500 hover:text-blue-600 text-center"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </Button>
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            className="w-full"
            onClick={handleSignIn}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : (authMethod === 'magic-link' ? 'Send Magic Link' : 'Sign In')}
          </Button>
          {message && (
            <p className="mt-4 text-center text-sm">
              {message}
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;