import { ChevronDown, ChevronUp } from "lucide-react";

const ExpandIcon = ({ isExpanded }) => {
  return isExpanded ? (
    <ChevronUp className="w-4 h-4" />
  ) : (
    <ChevronDown className="w-4 h-4" />
  );
};

export default ExpandIcon;
