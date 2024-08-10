import ProfileCard from "../organisms/ProfileCard";
import { useMatchmakerProfile } from "../../integrations/supabase";
import { Skeleton } from "@/components/ui/skeleton";

const Layout = ({ children }) => {
  const profileId = "7f4c2fb8-d3e6-4671-b45e-f2ffb76a1d12";
  const { data: profile, isLoading, error } = useMatchmakerProfile(profileId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="flex h-full">
          <div className="w-[40%] mr-4">
            <Skeleton className="h-[600px] w-full" />
          </div>
          <div className="w-[60%]">
            <Skeleton className="h-[600px] w-full" />
          </div>
        </div>
      </div>
    );
  }
  if (error) return <div>Error: {error.message}</div>;
  if (!profile) return <div>No profile found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex h-full">
        <div className="w-[40%] mr-4">
          <ProfileCard profile={profile} />
        </div>
        <div className="w-[60%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
