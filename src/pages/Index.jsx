import MatchList from "../components/organisms/MatchList";
import { useMatchmakerProfile } from "../integrations/supabase";

const Index = () => {
  const profileId = "7f4c2fb8-d3e6-4671-b45e-f2ffb76a1d12";
  const { data: profile, isLoading, error } = useMatchmakerProfile(profileId);

  console.log("Matchmaker Profile:", profile);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!profile) return <div>No profile found</div>;

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

  const processedMatches = matchmakerProfiles.map(profile => ({
    name: profile.name,
    country: "🌍", // You might want to add a country field to your profiles
    experience: profile.career_stage,
    matchScore: Math.floor(Math.random() * 3) + 7, // Random score between 7-9 for demo
    matchReason: `Matched based on ${profile.key_skills.join(", ")}`,
    potentialCollaboration: profile.business_goals[0],
    complimentarySkills: profile.key_skills.join(", "),
    sharedInterests: profile.interests.join(", "),
    communicationCompatibility: profile.preferred_communication,
    geographicalSynergy: `Based in ${profile.location}`,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      <MatchList matches={processedMatches} />
    </div>
  );
};

export default Index;
