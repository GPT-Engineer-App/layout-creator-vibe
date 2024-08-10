import { User, MessageSquare, Search, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Logo</div>
          <div className="flex items-center space-x-4">
            <Search className="text-gray-600" />
            <Bell className="text-gray-600" />
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </nav>
      
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Product Manager</p>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Top Matches</h2>
        
        <div className="space-y-4">
          <MatchComponent
            name="Sarah Johnson"
            title="UX Designer"
            company="Google"
            sharedConnections={4}
            matchPercentage={95}
          />
          <MatchComponent
            name="Michael Chen"
            title="Software Engineer"
            company="Amazon"
            sharedConnections={2}
            matchPercentage={90}
          />
          <MatchComponent
            name="Emily Brown"
            title="Product Manager"
            company="Microsoft"
            sharedConnections={3}
            matchPercentage={88}
          />
        </div>
        
        <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          View all matches
        </button>
      </div>
    </div>
  );
};

const MatchComponent = ({ name, title, company, sharedConnections, matchPercentage }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{title} at {company}</p>
          <p className="text-sm text-gray-500">{sharedConnections} shared connections</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-blue-600">{matchPercentage}% match</p>
        <button className="mt-2 px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
          Message
        </button>
      </div>
    </div>
  );
};

export default Index;
