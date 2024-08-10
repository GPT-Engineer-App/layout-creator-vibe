import { Link, useLocation } from "react-router-dom";
import { User, Bell } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="ConnectPro Logo" />
            </div>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" currentPath={location.pathname}>
                Matches
              </NavLink>
              <NavLink to="/meetings" currentPath={location.pathname}>
                Meetings
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-4 flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
              />
              <span className="ml-2 text-sm font-medium text-white">John Doe</span>
            </div>
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
          ? "bg-indigo-700 text-white"
          : "text-gray-200 hover:bg-indigo-500 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
