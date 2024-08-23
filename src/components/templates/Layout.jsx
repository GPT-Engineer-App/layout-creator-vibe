import ProfileCard from "../organisms/ProfileCard";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex h-full">
        <div className="w-[40%] mr-4">
          <ProfileCard />
        </div>
        <div className="w-[60%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
