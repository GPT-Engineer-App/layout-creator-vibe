import React, { useState } from 'react';
import ProfileCard from "../organisms/ProfileCard";

const Layout = ({ children }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch profile data here
    // For now, we'll use a placeholder
    setProfileData({
      name: "[Member Name]",
      career_stage: "Career Stage Tagline",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex h-full">
        <div className="w-[30%] mr-4">
          <ProfileCard profile={profileData} />
        </div>
        <div className="w-[70%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
