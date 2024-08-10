const ProfileSection = ({ title, children }) => {
  return (
    <div className="h-full">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="border rounded p-4 h-[calc(100%-2rem)] overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default ProfileSection;
