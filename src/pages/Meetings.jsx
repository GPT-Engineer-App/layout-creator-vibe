import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { useUserMeetings } from "../integrations/supabase";

const Meetings = () => {
  const authEmail = sessionStorage.getItem("authEmail") || "";
  const { data: meetings, isLoading, error } = useUserMeetings(authEmail);

  if (isLoading) {
    return (
      <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    );
  }
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-auto">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Upcoming Meetings</h1>
      {meetings && meetings.length > 0 ? (
        meetings.map((meeting) => (
          <UpcomingMeeting key={meeting.meeting_id} meeting={meeting} />
        ))
      ) : (
        <Alert variant="warning" className="mb-6 bg-yellow-100 border-yellow-400">
          <AlertDescription className="text-yellow-700">
            No upcoming meetings found for the current email.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

const UpcomingMeeting = ({ meeting }) => {
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
            <p className="bg-gray-100 rounded-md px-3 py-2">{formatDate(meeting.event_start_time)}</p>
          </div>
          <div>
            <p className="font-semibold">Location:</p>
            <p className="bg-gray-100 rounded-md px-3 py-2">{meeting.meeting_timezone}</p>
          </div>
          <div>
            <p className="font-semibold">Meeting Link:</p>
            <a href={meeting.meeting_url} target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-md px-3 py-2 text-blue-500 hover:underline block">
              Join Meeting
            </a>
          </div>
          <div>
            <p className="font-semibold">Host:</p>
            <p className="bg-gray-100 rounded-md px-2 py-1">{meeting.host_email}</p>
          </div>
          <div>
            <p className="font-semibold">Guest:</p>
            <p className="bg-gray-100 rounded-md px-2 py-1">{meeting.guest_email}</p>
          </div>
          <div className="mt-6 space-x-2">
            <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50" onClick={() => window.open(meeting.rescheduleorcancel_url, '_blank')}>
              Cancel or Reschedule
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Meetings;