import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Meetings = () => {
  const [hasDiscoveryCalls, setHasDiscoveryCalls] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Upcoming Meetings</h1>
      {!hasDiscoveryCalls ? (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-yellow-600">
              Matches will be generated after the first Discovery Call
            </CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <UpcomingDiscoveryCall />
      )}
    </div>
  );
};

const UpcomingDiscoveryCall = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-purple-600">Upcoming Discovery Call</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><span className="font-semibold">Date:</span> [Date placeholder]</p>
          <p><span className="font-semibold">Location:</span> [Location placeholder]</p>
          <p><span className="font-semibold">Meeting Link:</span> [Link placeholder]</p>
          <p><span className="font-semibold">Host:</span> [Host placeholder]</p>
          <div className="mt-4 space-x-2">
            <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
              Cancel
            </Button>
            <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
              Reschedule
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Meetings;
