import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  const sections = [
    { title: "Key Skills", content: profile.key_skills },
    { title: "Interests", content: profile.interests },
    { title: "Communication Preferences", content: [profile.preferred_communication] },
    { title: "Location", content: [profile.location] },
    { title: "Industry", content: [profile.industry] },
    { title: "Hobbies", content: profile.hobbies },
  ];

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={profile.name} tagline={profile.career_stage} />

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <ProfileSection title="Business Goals">
            {profile.business_goals.map((goal, idx) => (
              <span key={idx}>{goal}</span>
            ))}
          </ProfileSection>
          <ProfileSection title="Industry">
            <span>{profile.industry}</span>
          </ProfileSection>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {sections
            .filter((section) => !["Business Goals", "Industry"].includes(section.title))
            .map((section, index) => (
              <ProfileSection key={index} title={section.title}>
                {Array.isArray(section.content) ? (
                  section.content.map((item, idx) => <span key={idx}>{item}</span>)
                ) : (
                  <span>{section.content}</span>
                )}
              </ProfileSection>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
