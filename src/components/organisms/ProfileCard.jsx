import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={profile.name} tagline={profile.career_stage} />

      <ProfileSection title="Key Skills">
        <div className="space-y-1">
          {profile.key_skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </ProfileSection>

      <ProfileSection title="Business Goals">
        <div className="space-y-1">
          {profile.business_goals.map((goal, index) => (
            <p key={index}>{goal}</p>
          ))}
        </div>
      </ProfileSection>

      <ProfileSection title="Interests">
        <div className="space-y-1">
          {profile.interests.map((interest, index) => (
            <p key={index}>{interest}</p>
          ))}
        </div>
      </ProfileSection>

      <ProfileSection title="Communication Preferences">
        <p>{profile.preferred_communication}</p>
      </ProfileSection>

      <ProfileSection title="Location">
        <p>{profile.location}</p>
      </ProfileSection>

      <ProfileSection title="Industry">
        <p>{profile.industry}</p>
      </ProfileSection>

      <ProfileSection title="Hobbies">
        <div className="space-y-1">
          {profile.hobbies.map((hobby, index) => (
            <p key={index}>{hobby}</p>
          ))}
        </div>
      </ProfileSection>
    </div>
  );
};

export default ProfileCard;
