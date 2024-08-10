import MatchList from "../components/organisms/MatchList";
import { useMatchmakerProfile, useMatchmakerProfiles } from "../integrations/supabase";

const Index = () => {
  const profileId = "7f4c2fb8-d3e6-4671-b45e-f2ffb76a1d12";
  const { data: profile, isLoading: profileLoading, error: profileError } = useMatchmakerProfile(profileId);
  const { data: matchmakerProfiles, isLoading: matchesLoading, error: matchesError } = useMatchmakerProfiles();

  console.log("Matchmaker Profile:", profile);
  console.log("Matchmaker Profiles:", matchmakerProfiles);

  if (profileLoading || matchesLoading) return <div>Loading...</div>;
  if (profileError) return <div>Error loading profile: {profileError.message}</div>;
  if (matchesError) return <div>Error loading matches: {matchesError.message}</div>;
  if (!profile) return <div>No profile found</div>;
  if (!matchmakerProfiles) return <div>No matches found</div>;

  const processedMatches = matchmakerProfiles.filter(p => p.profile_id !== profileId).map(profile => ({
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
