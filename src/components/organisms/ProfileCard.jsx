import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ profile }) => {
  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={profile.name} tagline={profile.career_stage} imageUrl={profile.image_url} />

      <ProfileSection title="Key Skills">
        <ul className="list-disc pl-5">
          {profile.key_skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection title="Industry">
        <p>{profile.industry}</p>
      </ProfileSection>

      <ProfileSection title="Business Goals">
        <ul className="list-disc pl-5">
          {profile.business_goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection title="Interests">
        <ul className="list-disc pl-5">
          {profile.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection title="Location">
        <p>{profile.location}</p>
      </ProfileSection>

      <ProfileSection title="Hobbies">
        <ul className="list-disc pl-5">
          {profile.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </ProfileSection>

      <ProfileSection title="Communication Preferences">
        <p>{profile.preferred_communication}</p>
      </ProfileSection>
    </div>
  );
};

export default ProfileCard;
