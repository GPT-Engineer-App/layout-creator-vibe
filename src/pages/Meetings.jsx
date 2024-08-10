import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Meetings = () => {
  const [hasDiscoveryCalls, setHasDiscoveryCalls] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Upcoming Meetings</h1>
      {!hasDiscoveryCalls ? (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-yellow-600">
              No Discovery Calls scheduled yet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Schedule your first Discovery Call to get started with matches!</p>
            <Button>Schedule Discovery Call</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <UpcomingDiscoveryCall />
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-green-600">
                Matches are ready!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Your Discovery Call is complete. Check out your matches!</p>
              <Link to="/matches">
                <Button>View Matches</Button>
              </Link>
            </CardContent>
          </Card>
        </>
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
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Date:</p>
            <p>[Date placeholder]</p>
          </div>
          <div>
            <p className="font-semibold">Location:</p>
            <p>[Location placeholder]</p>
          </div>
          <div>
            <p className="font-semibold">Meeting Link:</p>
            <p>[Link placeholder]</p>
          </div>
          <div>
            <p className="font-semibold">Host:</p>
            <p>[Host placeholder]</p>
          </div>
          <div className="mt-6 space-x-2">
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
