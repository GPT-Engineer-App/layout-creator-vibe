import { User } from "lucide-react";

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
          <div className="border rounded p-4 h-full">
            {/* Content for Top Matches will be added later */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
