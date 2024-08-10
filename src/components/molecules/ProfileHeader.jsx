import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileHeader = ({ name, tagline, imageUrl }) => {
  return (
    <div className="flex items-center mb-6">
      <Avatar className="h-16 w-16">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-600">{tagline}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
