import MatchList from "../components/organisms/MatchList";
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { useUserMatchesWithProfiles } from "../integrations/supabase";

const Index = () => {
  const userId = "f7318dfb-161f-485d-86d4-f599d01e657e"; // Replace with actual user ID or fetch from auth context
  const { data: matches, isLoading, error } = useUserMatchesWithProfiles(userId);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      {matches && matches.length > 0 ? (
        <MatchList matches={matches} />
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default Index;