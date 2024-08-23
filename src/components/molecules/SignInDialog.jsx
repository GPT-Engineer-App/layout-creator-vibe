import { useState } from "react";
import { supabase } from "../../integrations/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const SignInDialog = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResetMode, setIsResetMode] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      toast.success("Successfully signed in!");
      setIsOpen(false);
      sessionStorage.setItem("userEmail", email);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://preview--layout-creator-vibe.gptengineer.run/reset-password',
      });
      if (error) throw error;
      toast.success("Password reset email sent. Please check your inbox.");
      setIsResetMode(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isResetMode ? "Reset Password" : "Sign In"}</DialogTitle>
        </DialogHeader>
        {isResetMode ? (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Send Reset Email</Button>
            <Button type="button" variant="outline" onClick={() => setIsResetMode(false)}>Back to Sign In</Button>
          </form>
        ) : (
          <form onSubmit={handleSignIn} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Sign In</Button>
            <Button type="button" variant="outline" onClick={() => setIsResetMode(true)}>Reset Password</Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;