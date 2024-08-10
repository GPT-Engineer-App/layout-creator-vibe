import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Meetings = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Upcoming Meetings</h1>
      <UpcomingDiscoveryCall />
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
