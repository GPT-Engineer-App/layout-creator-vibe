import { createClient } from "@supabase/supabase-js";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState, useEffect } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
  return React.createElement(
    QueryClientProvider,
    { client: queryClient },
    children
  );
}

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/* supabase integration types

### meetings

| name                   | type                     | format | required |
|------------------------|--------------------------|--------|----------|
| meeting_id             | uuid                     | string | true     |
| guest_email            | text                     | string | true     |
| host_email             | text                     | string | true     |
| meeting_title          | text                     | string | true     |
| meeting_timezone       | text                     | string | true     |
| event_start_time       | timestamp with time zone | string | true     |
| event_end_time         | timestamp with time zone | string | true     |
| meeting_url            | text                     | string | true     |
| rescheduleorcancel_url | text                     | string | true     |
| meeting_status         | text                     | string | false    |
| created_at             | timestamp with time zone | string | false    |
| updated_at             | timestamp with time zone | string | false    |

### profiles

| name                    | type                     | format | required |
|-------------------------|--------------------------|--------|----------|
| user_id                 | uuid                     | string | true     |
| name                    | text                     | string | true     |
| image_url               | text                     | string | false    |
| key_skills              | text[]                   | array  | false    |
| industry                | text                     | string | false    |
| business_goals          | text[]                   | array  | false    |
| interests               | text[]                   | array  | false    |
| location                | text                     | string | false    |
| hobbies                 | text[]                   | array  | false    |
| career_stage            | text                     | string | false    |
| preferred_communication | text                     | string | false    |
| created_at              | timestamp with time zone | string | false    |
| updated_at              | timestamp with time zone | string | false    |

### matches

| name                        | type                     | format | required |
|-----------------------------|--------------------------|--------|----------|
| match_id                    | uuid                     | string | true     |
| user_id                     | uuid                     | string | false    |
| matched_user_id             | uuid                     | string | false    |
| matching_score              | numeric                  | number | false    |
| explanation                 | text                     | string | false    |
| complementary_skills        | text[]                   | array  | false    |
| potential_collaboration     | text                     | string | false    |
| shared_interests            | text[]                   | array  | false    |
| geographical_synergy        | text                     | string | false    |
| experience_level            | text                     | string | false    |
| communication_compatibility | text                     | string | false    |
| created_at                  | timestamp with time zone | string | false    |
| updated_at                  | timestamp with time zone | string | false    |

*/

// Meetings
export const useMeetings = () =>
  useQuery({
    queryKey: ["meetings"],
    queryFn: () => fromSupabase(supabase.from("meetings").select("*")),
  });

export const useMeeting = (meetingId) =>
  useQuery({
    queryKey: ["meetings", meetingId],
    queryFn: () =>
      fromSupabase(
        supabase
          .from("meetings")
          .select("*")
          .eq("meeting_id", meetingId)
          .single()
      ),
  });

export const useAddMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newMeeting) =>
      fromSupabase(supabase.from("meetings").insert([newMeeting])),
    onSuccess: () => {
      queryClient.invalidateQueries("meetings");
    },
  });
};

export const useUpdateMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ meetingId, updates }) =>
      fromSupabase(
        supabase.from("meetings").update(updates).eq("meeting_id", meetingId)
      ),
    onSuccess: () => {
      queryClient.invalidateQueries("meetings");
    },
  });
};

export const useDeleteMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (meetingId) =>
      fromSupabase(
        supabase.from("meetings").delete().eq("meeting_id", meetingId)
      ),
    onSuccess: () => {
      queryClient.invalidateQueries("meetings");
    },
  });
};

// Profiles
export const useProfiles = () =>
  useQuery({
    queryKey: ["profiles"],
    queryFn: () => fromSupabase(supabase.from("profiles").select("*")),
  });

export const useProfile = (userId) =>
  useQuery({
    queryKey: ["profiles", userId],
    queryFn: () =>
      fromSupabase(
        supabase.from("profiles").select("*").eq("user_id", userId).single()
      ),
  });

export const useAddProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProfile) =>
      fromSupabase(supabase.from("profiles").insert([newProfile])),
    onSuccess: () => {
      queryClient.invalidateQueries("profiles");
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, updates }) =>
      fromSupabase(
        supabase.from("profiles").update(updates).eq("user_id", userId)
      ),
    onSuccess: () => {
      queryClient.invalidateQueries("profiles");
    },
  });
};

export const useDeleteProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId) =>
      fromSupabase(supabase.from("profiles").delete().eq("user_id", userId)),
    onSuccess: () => {
      queryClient.invalidateQueries("profiles");
    },
  });
};

// Matches
export const useMatches = () =>
  useQuery({
    queryKey: ["matches"],
    queryFn: () => fromSupabase(supabase.from("matches").select("*")),
  });

export const useMatch = (matchId) =>
  useQuery({
    queryKey: ["matches", matchId],
    queryFn: () =>
      fromSupabase(
        supabase.from("matches").select("*").eq("match_id", matchId).single()
      ),
  });

export const useAddMatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newMatch) =>
      fromSupabase(supabase.from("matches").insert([newMatch])),
    onSuccess: () => {
      queryClient.invalidateQueries("matches");
    },
  });
};

export const useUpdateMatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ matchId, updates }) =>
      fromSupabase(
        supabase.from("matches").update(updates).eq("match_id", matchId)
      ),
    onSuccess: () => {
      queryClient.invalidateQueries("matches");
    },
  });
};

export const useDeleteMatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (matchId) =>
      fromSupabase(supabase.from("matches").delete().eq("match_id", matchId)),
    onSuccess: () => {
      queryClient.invalidateQueries("matches");
    },
  });
};

// Custom hooks for specific queries
export const useRealtimeData = () => {
  const [realtimeData, setRealtimeData] = useState(null);

  useEffect(() => {
    const channel = supabase
      .channel("table-db-changes")
      .on("postgres_changes", { event: "*", schema: "public" }, (payload) => {
        setRealtimeData(payload);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return realtimeData;
};
