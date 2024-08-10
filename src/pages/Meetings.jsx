import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { format } from "date-fns";
import { useDiscoveryMeetingsForProfile } from "../integrations/supabase";

const Meetings = () => {
  const profileId = "7f4c2fb8-d3e6-4671-b45e-f2ffb76a1d12";
  const { data: meetings, isLoading, error } = useDiscoveryMeetingsForProfile(profileId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Upcoming Meetings</h1>
      {meetings && meetings.length > 0 ? (
        meetings.map((meeting) => (
          <UpcomingDiscoveryCall key={meeting.meeting_id} meeting={meeting} />
        ))
      ) : (
        <Alert variant="warning" className="mb-6 bg-yellow-100 border-yellow-400">
          <AlertDescription className="text-yellow-700">
            No upcoming discovery calls. Matches will be generated after the first Discovery Call.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

const UpcomingDiscoveryCall = ({ meeting }) => {
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy 'at' h:mm a");
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-purple-600">{meeting.meeting_title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Date:</p>
            <p>{formatDate(meeting.event_start_time)}</p>
          </div>
          <div>
            <p className="font-semibold">Location:</p>
            <p>{meeting.meeting_timezone}</p>
          </div>
          <div>
            <p className="font-semibold">Meeting Link:</p>
            <a href={meeting.meeting_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Join Meeting
            </a>
          </div>
          <div>
            <p className="font-semibold">Host:</p>
            <p>{meeting.host_email}</p>
          </div>
          <div className="mt-6 space-x-2">
            <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50" onClick={() => window.open(meeting.cancel_url, '_blank')}>
              Cancel
            </Button>
            <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50" onClick={() => window.open(meeting.reschedule_url, '_blank')}>
              Reschedule
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Meetings;
