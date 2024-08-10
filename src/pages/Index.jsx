import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex">
        {/* Profile Section */}
        <div className="w-[30%] bg-white rounded-lg shadow-md p-6 mr-4">
          <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>
          
          <div className="flex items-center mb-6">
            <div className="bg-gray-200 rounded-full p-3 mr-4">
              <User className="w-12 h-12 text-gray-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">[Member Name]</h2>
              <p className="text-gray-600">Career Stage Tagline</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Key Skills</h3>
            <div className="border rounded p-4">
              {/* Add content here */}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Business Goals</h3>
            <div className="border rounded p-4">
              {/* Add content here */}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Interests</h3>
            <div className="border rounded p-4">
              {/* Add content here */}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Communication Preferences</h3>
            <div className="border rounded p-4">
              {/* Add content here */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <div className="border rounded p-4">
              {/* Add content here */}
            </div>
          </div>
        </div>

        {/* Top Matches Section */}
        <div className="w-[70%] bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
          <div className="space-y-4">
            <MatchComponent
              name="John Doe"
              country="🇺🇸"
              experience="Senior Developer"
              matchScore={8}
            />
            <MatchComponent
              name="Alice Smith"
              country="🇬🇧"
              experience="Product Manager"
              matchScore={9}
            />
            <MatchComponent
              name="Carlos Rodriguez"
              country="🇪🇸"
              experience="UX Designer"
              matchScore={7}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MatchComponent = ({ name, country, experience, matchScore }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full p-2 mr-4">
            <User className="w-8 h-8 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {name} <span className="ml-2">{country}</span>
            </h3>
            <p className="text-sm text-gray-600">{experience}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-lg mr-4">{matchScore}/10</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500"
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 pt-4 border-t">
          {/* Expanded content will be added here later */}
          <p>Expanded details will be shown here.</p>
        </div>
      )}
    </div>
  );
};

export default Index;
