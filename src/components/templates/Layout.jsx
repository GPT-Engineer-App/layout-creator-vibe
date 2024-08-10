import ProfileCard from "../organisms/ProfileCard";

const Layout = ({ children }) => {
  const profileData = {
    name: "[Member Name]",
    tagline: "Career Stage Tagline",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex h-full">
        <div className="w-[30%] mr-4">
          <ProfileCard {...profileData} />
        </div>
        <div className="w-[70%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
