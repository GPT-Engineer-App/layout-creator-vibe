import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const ProfileCard = ({ name, tagline }) => {
  return (
    <div className="w-[30%] bg-white rounded-lg shadow-md p-6 mr-4">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader name={name} tagline={tagline} />

      <ProfileSection title="Key Skills">
        <ul className="list-disc list-inside">
          <li>Web Development</li>
          <li>Project Management</li>
          <li>Data Analysis</li>
        </ul>
      </ProfileSection>

      <ProfileSection title="Business Goals">
        <p>Expand network in tech industry and collaborate on innovative projects.</p>
      </ProfileSection>

      <ProfileSection title="Interests">
        <ul className="list-disc list-inside">
          <li>Artificial Intelligence</li>
          <li>Sustainable Technology</li>
          <li>Entrepreneurship</li>
        </ul>
      </ProfileSection>

      <ProfileSection title="Communication Preferences">
        <p>Prefer async communication with weekly video calls.</p>
      </ProfileSection>

      <ProfileSection title="Location">
        <p>San Francisco, CA (PST timezone)</p>
      </ProfileSection>
    </div>
  );
};

export default ProfileCard;
