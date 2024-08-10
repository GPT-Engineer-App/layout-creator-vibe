import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ profile }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={profile.name || "No Name"} tagline={profile.career_stage || "Career stage not specified"} imageUrl={profile.image_url} />

      <ProfileSection title="Key Skills">
        <ul className="list-disc pl-5">
          {(profile.key_skills && profile.key_skills.length > 0) ? (
            profile.key_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))
          ) : (
            <li>No key skills listed</li>
          )}
        </ul>
      </ProfileSection>

      <ProfileSection title="Industry">
        <p>{profile.industry || "Industry not specified"}</p>
      </ProfileSection>

      <ProfileSection title="Business Goals">
        <ul className="list-disc pl-5">
          {(profile.business_goals && profile.business_goals.length > 0) ? (
            profile.business_goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))
          ) : (
            <li>No business goals listed</li>
          )}
        </ul>
      </ProfileSection>

      <ProfileSection title="Interests">
        <ul className="list-disc pl-5">
          {(profile.interests && profile.interests.length > 0) ? (
            profile.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))
          ) : (
            <li>No interests listed</li>
          )}
        </ul>
      </ProfileSection>

      <ProfileSection title="Location">
        <p>{profile.location || "Location not specified"}</p>
      </ProfileSection>

      <ProfileSection title="Hobbies">
        <ul className="list-disc pl-5">
          {(profile.hobbies && profile.hobbies.length > 0) ? (
            profile.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))
          ) : (
            <li>No hobbies listed</li>
          )}
        </ul>
      </ProfileSection>

      <ProfileSection title="Communication Preferences">
        <p>{profile.preferred_communication || "Communication preferences not specified"}</p>
      </ProfileSection>
    </div>
  );
};

export default ProfileCard;
