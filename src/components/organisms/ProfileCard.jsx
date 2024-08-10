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

      <div className="mb-4">
        <ProfileSection title="Business Goals">
          <div className="space-y-1">
            {profile.business_goals.map((goal, idx) => (
              <p key={idx}>{goal}</p>
            ))}
          </div>
        </ProfileSection>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {sections
          .filter((section) => section.title !== "Business Goals")
          .map((section, index) => (
            <ProfileSection key={index} title={section.title}>
              <div className="space-y-1">
                {Array.isArray(section.content) ? (
                  section.content.map((item, idx) => <p key={idx}>{item}</p>)
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </ProfileSection>
          ))}
      </div>
    </div>
  );
};

export default ProfileCard;
