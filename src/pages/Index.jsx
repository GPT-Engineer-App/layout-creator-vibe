import MatchList from "../components/organisms/MatchList";
import { useMatchmakerProfile, useUserMatchesForProfile } from "../integrations/supabase";

const Index = () => {
  const profileId = "7f4c2fb8-d3e6-4671-b45e-f2ffb76a1d12";
  const { data: profile, isLoading: profileLoading, error: profileError } = useMatchmakerProfile(profileId);
  const { data: userMatches, isLoading: matchesLoading, error: matchesError } = useUserMatchesForProfile(profileId);

  if (profileLoading || matchesLoading) return <div>Loading...</div>;
  if (profileError) return <div>Error loading profile: {profileError.message}</div>;
  if (matchesError) return <div>Error loading matches: {matchesError.message}</div>;
  if (!profile) return <div>No profile found</div>;
  if (!userMatches) return <div>No matches found</div>;

  const processedMatches = userMatches.map(match => ({
    name: match.matched_profile_id, // You might want to fetch the actual name using this ID
    country: "🌍", // You might want to add a country field to your matches
    experience: "Not specified", // This information is not in the user_matches table
    matchScore: match.matching_score,
    matchReason: match.explanation,
    potentialCollaboration: match.potential_collaboration,
    complimentarySkills: match.complementary_skills ? match.complementary_skills.join(", ") : "Not specified",
    sharedInterests: match.shared_interests ? match.shared_interests.join(", ") : "Not specified",
    communicationCompatibility: match.communication_compatibility,
    geographicalSynergy: match.geographical_synergy,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      <MatchList matches={processedMatches} />
    </div>
  );
};

export default Index;
