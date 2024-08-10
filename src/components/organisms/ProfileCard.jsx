import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ profile }) => {
  if (!profile) {
    return <div>Loading profile...</div>;
  }

  const {
    name = "Name not provided",
    career_stage = "Career stage not specified",
    image_url,
    key_skills = [],
    industry = "Industry not specified",
    business_goals = [],
    interests = [],
    location = "Location not specified",
    hobbies = [],
    preferred_communication = "Communication preference not specified"
  } = profile;

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={name} tagline={career_stage} imageUrl={image_url} />

      <ProfileSection title="Key Skills">
        <ul className="list-disc pl-5">
          {key_skills.map((skill, index) => (
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
