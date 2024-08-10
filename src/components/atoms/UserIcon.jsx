import { User } from "lucide-react";

const UserIcon = ({ size = "medium", imageUrl }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt="User avatar"
        className={`rounded-full object-cover ${sizeClasses[size]}`}
      />
    );
  }

  return (
    <div className={`bg-gray-200 rounded-full p-3 ${sizeClasses[size]}`}>
      <User className={`text-gray-600 ${sizeClasses[size]}`} />
    </div>
  );
};

export default UserIcon;
