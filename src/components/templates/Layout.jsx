import ProfileCard from "../organisms/ProfileCard";

const Layout = ({ children }) => {
  const profileData = {
    name: "[Member Name]",
    tagline: "Career Stage Tagline",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex">
        <ProfileCard {...profileData} />
        <div className="w-[70%] ml-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
