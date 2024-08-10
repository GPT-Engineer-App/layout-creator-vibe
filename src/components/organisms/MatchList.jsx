import MatchCard from "./MatchCard";

const MatchList = ({ matches }) => {
  return (
    <div className="w-[70%] bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
