import { User } from "lucide-react";

const UserIcon = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div className={`bg-gray-200 rounded-full flex items-center justify-center ${sizeClasses[size]}`}>
      <User className="text-gray-600 w-2/3 h-2/3" />
    </div>
  );
};

export default UserIcon;
