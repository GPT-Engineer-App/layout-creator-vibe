import DashboardTemplate from "../components/templates/DashboardTemplate";
import ProfileCard from "../components/organisms/ProfileCard";
import MatchList from "../components/organisms/MatchList";

const Index = () => {
  const profileData = {
    name: "[Member Name]",
    tagline: "Career Stage Tagline",
  };

  const matchesData = [
    {
      name: "John Doe",
      country: "🇺🇸",
      experience: "Senior Developer",
      matchScore: 8,
      matchReason: "Similar technical background and project interests",
      potentialCollaboration: "Joint development of a new open-source tool",
      complimentarySkills: "Backend expertise complements your frontend skills",
      sharedInterests: "Machine learning, blockchain technology",
      communicationCompatibility: "Both prefer async communication",
      geographicalSynergy: "2 hour time difference, potential for real-time collaboration",
    },
    {
      name: "Alice Smith",
      country: "🇬🇧",
      experience: "Product Manager",
      matchScore: 9,
      matchReason: "Complementary skill sets in tech and product management",
      potentialCollaboration: "Co-authoring a case study on successful product launches",
      complimentarySkills: "Strong in market research and user story development",
      sharedInterests: "Agile methodologies, user-centric design",
      communicationCompatibility: "Both value regular video calls and written documentation",
      geographicalSynergy: "Same time zone, easy to schedule meetings",
    },
    {
      name: "Carlos Rodriguez",
      country: "🇪🇸",
      experience: "UX Designer",
      matchScore: 7,
      matchReason: "Shared passion for creating intuitive user interfaces",
      potentialCollaboration: "Redesigning a complex enterprise application",
      complimentarySkills: "Expertise in user research and prototyping",
      sharedInterests: "Accessibility in design, mobile-first approaches",
      communicationCompatibility: "Both appreciate visual communication tools",
      geographicalSynergy: "Overlapping work hours in the afternoon",
    },
  ];

  return (
    <DashboardTemplate
      profileComponent={<ProfileCard {...profileData} />}
      matchesComponent={<MatchList matches={matchesData} />}
    />
  );
};

export default Index;
