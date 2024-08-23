import MatchList from "../components/organisms/MatchList";
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  // Dummy data for matches
  const dummyMatches = [
    {
      name: "Alice Johnson",
      country: "🇺🇸",
      experience: "Senior Developer",
      matchScore: 8.5,
      matchReason: "Shared interests in AI and machine learning",
      potentialCollaboration: "Joint AI research project",
      complimentarySkills: "Data Science, Neural Networks",
      sharedInterests: "Artificial Intelligence, Robotics",
      communicationCompatibility: "High",
      geographicalSynergy: "Same time zone",
      industry: "Technology",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      keySkills: "Python, TensorFlow, PyTorch",
    },
    {
      name: "Bob Smith",
      country: "🇬🇧",
      experience: "Product Manager",
      matchScore: 7.8,
      matchReason: "Complementary skills in tech and business",
      potentialCollaboration: "SaaS product development",
      complimentarySkills: "Agile Methodologies, User Research",
      sharedInterests: "Startups, Innovation",
      communicationCompatibility: "Medium",
      geographicalSynergy: "5-hour time difference",
      industry: "Software",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      keySkills: "Product Strategy, Scrum, User Stories",
    },
    {
      name: "Carol Martinez",
      country: "🇪🇸",
      experience: "UX Designer",
      matchScore: 9.2,
      matchReason: "Perfect blend of design and development skills",
      potentialCollaboration: "Mobile app redesign",
      complimentarySkills: "UI Design, User Testing",
      sharedInterests: "Mobile Development, User-Centered Design",
      communicationCompatibility: "High",
      geographicalSynergy: "1-hour time difference",
      industry: "Design",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      keySkills: "Figma, Sketch, Adobe XD",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Top Matches</h1>
      <MatchList matches={dummyMatches} />
    </div>
  );
};

export default Index;