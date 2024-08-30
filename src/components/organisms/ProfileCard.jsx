import React from 'react';
import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";
import { useProfile } from "../../integrations/supabase";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileCard = () => {
  const authUid = "f7318dfb-161f-485d-86d4-f599d01e657e";
  const { data: profile, isLoading, error } = useProfile(authUid);

  const isProfileEmpty = (profile) => {
    return !profile || (
      !profile.name &&
      !profile.career_stage &&
      !profile.image_url &&
      (!profile.business_goals || profile.business_goals.length === 0) &&
      (!profile.key_skills || profile.key_skills.length === 0) &&
      (!profile.interests || profile.interests.length === 0) &&
      (!profile.hobbies || profile.hobbies.length === 0) &&
      !profile.preferred_communication &&
      !profile.location &&
      !profile.industry
    );
  };

  if (isLoading || isProfileEmpty(profile)) {
    return (
      <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
        <Skeleton className="h-8 w-3/4 mb-6" />
        <Skeleton className="h-16 w-16 rounded-full mb-4" />
        <Skeleton className="h-6 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/3 mb-6" />
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading profile: {error.message}</div>;
  }

  if (!profile) {
    return <div className="text-yellow-500">No profile found for the given Auth UID. Please check the Auth UID and try again.</div>;
  }

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader 
        name={profile.name} 
        tagline={profile.career_stage} 
        imageUrl={profile.image_url} 
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileSection title="Business Goals">
          {profile.business_goals?.map((goal, index) => (
            <React.Fragment key={index}>{goal}</React.Fragment>
          ))}
        </ProfileSection>
        <ProfileSection title="Key Skills">
          {profile.key_skills?.map((skill, index) => (
            <React.Fragment key={index}>{skill}</React.Fragment>
          ))}
        </ProfileSection>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileSection title="Interests">
          {profile.interests?.map((interest, index) => (
            <React.Fragment key={index}>{interest}</React.Fragment>
          ))}
        </ProfileSection>
        <ProfileSection title="Hobbies">
          {profile.hobbies?.map((hobby, index) => (
            <React.Fragment key={index}>{hobby}</React.Fragment>
          ))}
        </ProfileSection>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ProfileSection title="Communication Preferences">
          {profile.preferred_communication}
        </ProfileSection>
        <ProfileSection title="Location">
          {profile.location}
        </ProfileSection>
      </div>

      <div className="mt-4">
        <ProfileSection title="Industry">
          {profile.industry}
        </ProfileSection>
      </div>
    </div>
  );
};

export default ProfileCard;
