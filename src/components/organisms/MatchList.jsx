import { useState } from "react";
import MatchCard from "./MatchCard";

const MatchList = ({ matches }) => {
  const [openMatchIndex, setOpenMatchIndex] = useState(0);

  return (
    <div className="w-[70%] bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <MatchCard 
            key={index} 
            {...match}
            isExpanded={index === openMatchIndex}
            onToggle={() => setOpenMatchIndex(index === openMatchIndex ? -1 : index)}
            matchReason={match.matchReason || "Match reason not provided"}
            potentialCollaboration={match.potentialCollaboration || "Potential collaboration not specified"}
            complimentarySkills={match.complimentarySkills || "Complimentary skills not listed"}
            sharedInterests={match.sharedInterests || "Shared interests not provided"}
            communicationCompatibility={match.communicationCompatibility || "Communication compatibility not specified"}
            geographicalSynergy={match.geographicalSynergy || "Geographical synergy not provided"}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
