import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  const renderGrid = (items, gridCols = 2) => (
    <div className={`grid grid-cols-${gridCols} gap-2`}>
      {items.map((item, index) => (
        <span key={index} className="bg-gray-100 rounded-md px-3 py-2 text-sm">
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={profile.name} tagline={profile.career_stage} />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileSection title="Business Goals">
          {renderGrid(profile.business_goals)}
        </ProfileSection>
        <ProfileSection title="Key Skills">
          {renderGrid(profile.key_skills)}
        </ProfileSection>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileSection title="Interests">
          {renderGrid(profile.interests)}
        </ProfileSection>
        <ProfileSection title="Hobbies">
          {renderGrid(profile.hobbies)}
        </ProfileSection>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ProfileSection title="Communication Preferences">
          <span className="bg-gray-100 rounded-md px-3 py-2 text-sm">
            {profile.preferred_communication}
          </span>
        </ProfileSection>
        <ProfileSection title="Location">
          <span className="bg-gray-100 rounded-md px-3 py-2 text-sm">
            {profile.location}
          </span>
        </ProfileSection>
      </div>

      <div className="mt-4">
        <ProfileSection title="Industry">
          <span className="bg-gray-100 rounded-md px-3 py-2 text-sm">
            {profile.industry}
          </span>
        </ProfileSection>
      </div>
    </div>
  );
};

export default ProfileCard;
