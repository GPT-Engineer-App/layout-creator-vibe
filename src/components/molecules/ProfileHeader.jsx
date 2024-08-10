const ProfileHeader = ({ name, tagline, imageUrl }) => {
  return (
    <div className="flex items-center mb-6">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full object-cover" />
      ) : (
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-600">{(name || "?").charAt(0)}</span>
        </div>
      )}
      <div className="ml-4">
        <h2 className="text-2xl font-semibold">{name || "No Name"}</h2>
        <p className="text-gray-600">{tagline || "No tagline provided"}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
