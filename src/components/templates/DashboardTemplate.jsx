const DashboardTemplate = ({ profileComponent, matchesComponent }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex">
        {profileComponent}
        {matchesComponent}
      </div>
    </div>
  );
};

export default DashboardTemplate;
