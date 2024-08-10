import UserIcon from "../atoms/UserIcon";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MatchCard = ({ name, country, experience, matchScore, matchReason, potentialCollaboration, complimentarySkills, sharedInterests, communicationCompatibility, geographicalSynergy, isExpanded, onToggle }) => {
  return (
    <div 
      className="border rounded-lg p-4 cursor-pointer"
      onClick={onToggle}
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
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4 pt-4 border-t">
              <div className="grid grid-cols-2 gap-4">
                <ExpandedSection title="Match Reason Summary" content={matchReason} />
                <ExpandedSection title="Potential Collaboration" content={potentialCollaboration} />
                <ExpandedSection title="Complimentary Skills" content={complimentarySkills} />
                <ExpandedSection title="Shared Interests" content={sharedInterests} />
                <ExpandedSection title="Communication Compatibility" content={communicationCompatibility} />
                <ExpandedSection title="Geographical Synergy" content={geographicalSynergy} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <ExternalLinkButton text="LinkedIn Profile" color="bg-blue-500" />
                <ExternalLinkButton text="Member Profile" color="bg-pink-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExpandedSection = ({ title, content }) => (
  <div className="border p-2 rounded">
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm">{content}</p>
  </div>
);

const ExternalLinkButton = ({ text, color }) => (
  <button className={`${color} text-white px-4 py-2 rounded flex items-center justify-center w-full`}>
    {text} <ExternalLink className="ml-2 h-4 w-4" />
  </button>
);

export default MatchCard;
