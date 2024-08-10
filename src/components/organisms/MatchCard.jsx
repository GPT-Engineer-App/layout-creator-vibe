import { useState } from "react";
import UserIcon from "../atoms/UserIcon";
import ExpandIcon from "../atoms/ExpandIcon";

const MatchCard = ({ name, country, experience, matchScore }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="border rounded-lg p-4 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <UserIcon size="small" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">
              {name} <span className="ml-2">{country}</span>
            </h3>
            <p className="text-sm text-gray-600">{experience}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="font-bold text-lg">{matchScore}/10</span>
          <p className="text-sm text-gray-600">Match Score</p>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 pt-4 border-t">
          {/* Expanded content will be added here later */}
          <p>Expanded details will be shown here.</p>
        </div>
      )}
      <div className="mt-2 text-right">
        <ExpandIcon isExpanded={isExpanded} />
      </div>
    </div>
  );
};

export default MatchCard;
