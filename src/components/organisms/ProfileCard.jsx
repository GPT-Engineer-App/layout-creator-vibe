import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ name, tagline }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={name} tagline={tagline} />

      <ProfileSection title="Key Skills">
        {/* Add content here */}
      </ProfileSection>

      <ProfileSection title="Business Goals">
        {/* Add content here */}
      </ProfileSection>

      <ProfileSection title="Interests">
        {/* Add content here */}
      </ProfileSection>

      <ProfileSection title="Communication Preferences">
        {/* Add content here */}
      </ProfileSection>

      <ProfileSection title="Location">
        {/* Add content here */}
      </ProfileSection>
    </div>
  );
};

export default ProfileCard;
