import DashboardTemplate from "../components/templates/DashboardTemplate";
import ProfileCard from "../components/organisms/ProfileCard";
import MatchList from "../components/organisms/MatchList";

const Index = () => {
  const profileData = {
    name: "[Member Name]",
    tagline: "Career Stage Tagline",
    imageUrl: "https://example.com/path/to/profile-image.jpg", // Add a valid image URL here
  };

  const matchesData = [
    {
      name: "John Doe",
      country: "🇺🇸",
      experience: "Senior Developer",
      matchScore: 8,
    },
    {
      name: "Alice Smith",
      country: "🇬🇧",
      experience: "Product Manager",
      matchScore: 9,
    },
    {
      name: "Carlos Rodriguez",
      country: "🇪🇸",
      experience: "UX Designer",
      matchScore: 7,
    },
  ];

  return (
    <DashboardTemplate
      profileComponent={<ProfileCard {...profileData} />}
      matchesComponent={<MatchList matches={matchesData} />}
    />
  );
};

export default Index;
