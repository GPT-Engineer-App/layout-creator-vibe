import UserIcon from "../atoms/UserIcon";

const ProfileHeader = ({ name, tagline, imageUrl }) => {
  return (
    <div className="flex items-center mb-6">
      <UserIcon size="medium" imageUrl={imageUrl} />
      <div className="ml-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-600">{tagline}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
