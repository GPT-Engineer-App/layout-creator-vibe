import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileHeader = ({ name, tagline, imageUrl }) => {
  return (
    <div className="flex items-center mb-6">
      <Avatar className="h-[clamp(3rem,8vw,4rem)] w-[clamp(3rem,8vw,4rem)]">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold">{name}</h2>
        <p className="text-[clamp(0.875rem,3vw,1rem)] text-gray-600">{tagline}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
