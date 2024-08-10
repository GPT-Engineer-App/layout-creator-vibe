import MatchList from "../components/organisms/MatchList";

const Index = () => {
  const { data: matchesData = [], isLoading, error } = useUserMatches();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const processedMatchesData = matchesData.map(match => ({
    name: match.name || "Unknown Name",
    country: match.country || "🌍",
    experience: match.experience || "Not specified",
    matchScore: match.matching_score || 0,
    matchReason: match.explanation || "No reason provided",
    potentialCollaboration: match.potential_collaboration || "Not specified",
    complimentarySkills: match.complementary_skills?.join(", ") || "None listed",
    sharedInterests: match.shared_interests?.join(", ") || "None found",
    communicationCompatibility: match.communication_compatibility || "Not determined",
    geographicalSynergy: match.geographical_synergy || "Not specified",
  }));
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      <MatchList matches={matchesData} />
    </div>
  );
};

export default Index;
