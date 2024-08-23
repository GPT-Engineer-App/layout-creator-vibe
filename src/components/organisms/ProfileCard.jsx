import React from 'react';
import ProfileHeader from "../molecules/ProfileHeader";
import ProfileSection from "../molecules/ProfileSection";

const dummyProfile = {
  name: "Jane Doe",
  career_stage: "Senior Product Manager",
  image_url: "https://randomuser.me/api/portraits/women/44.jpg",
  business_goals: [
    "Expand market share",
    "Improve customer retention",
    "Launch new product line"
  ],
  key_skills: [
    "Product Strategy",
    "User Experience",
    "Agile Methodologies",
    "Data Analysis"
  ],
  interests: [
    "Artificial Intelligence",
    "Sustainable Technology",
    "Digital Transformation"
  ],
  hobbies: [
    "Hiking",
    "Photography",
    "Cooking"
  ],
  preferred_communication: "Video calls",
  location: "San Francisco, CA",
  industry: "Technology"
};

const ProfileCard = () => {
  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
      
      <ProfileHeader 
        name={dummyProfile.name} 
        tagline={dummyProfile.career_stage} 
        imageUrl={dummyProfile.image_url} 
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileSection title="Business Goals">
          {dummyProfile.business_goals.map((goal, index) => (
            <React.Fragment key={index}>{goal}</React.Fragment>
          ))}
        </ProfileSection>
        <ProfileSection title="Key Skills">
          {dummyProfile.key_skills.map((skill, index) => (
            <React.Fragment key={index}>{skill}</React.Fragment>
          ))}
        </ProfileSection>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileSection title="Interests">
          {dummyProfile.interests.map((interest, index) => (
            <React.Fragment key={index}>{interest}</React.Fragment>
          ))}
        </ProfileSection>
        <ProfileSection title="Hobbies">
          {dummyProfile.hobbies.map((hobby, index) => (
            <React.Fragment key={index}>{hobby}</React.Fragment>
          ))}
        </ProfileSection>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ProfileSection title="Communication Preferences">
          {dummyProfile.preferred_communication}
        </ProfileSection>
        <ProfileSection title="Location">
          {dummyProfile.location}
        </ProfileSection>
      </div>

      <div className="mt-4">
        <ProfileSection title="Industry">
          {dummyProfile.industry}
        </ProfileSection>
      </div>
    </div>
  );
};

export default ProfileCard;