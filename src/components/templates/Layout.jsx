import ProfileCard from "../organisms/ProfileCard";
import { useMatchmakerProfile } from '../../integrations/supabase';

const Layout = ({ children }) => {
  const { data: profile, isLoading, error } = useMatchmakerProfile();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex h-full">
        <div className="w-[30%] mr-4">
          <ProfileCard profile={profile} isLoading={isLoading} error={error} />
        </div>
        <div className="w-[70%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
