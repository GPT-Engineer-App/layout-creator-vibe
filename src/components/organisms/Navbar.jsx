import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../integrations/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const Navbar = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [authUid, setAuthUid] = useState(() => sessionStorage.getItem("authUid") || "");

  const handleAuthUidChange = (e) => {
    const newAuthUid = e.target.value;
    setAuthUid(newAuthUid);
    sessionStorage.setItem("authUid", newAuthUid);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      toast.success("Magic link sent! Check your email.");
      setIsOpen(false);
      sessionStorage.setItem("userEmail", email);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">ConnectPro</span>
            </div>
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/" currentPath={location.pathname}>
                Meetings
              </NavLink>
              <NavLink to="/matches" currentPath={location.pathname}>
                Matches
              </NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Auth UID for testing"
              value={authUid}
              onChange={handleAuthUidChange}
              className="w-48"
            />
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Sign In</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign In with Magic Link</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSignIn} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit">Send Magic Link</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
