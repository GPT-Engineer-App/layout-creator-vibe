const ProfileSection = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="border rounded p-4">
        {children}
      </div>
    </div>
  );
};

export default ProfileSection;
