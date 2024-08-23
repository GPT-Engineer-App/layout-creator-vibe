import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
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

| name                     | type                     | format | required |
|--------------------------|--------------------------|--------|----------|
| user_id                  | uuid                     | string | true     |
| name                     | text                     | string | true     |
| image_url                | text                     | string | false    |
| key_skills               | text[]                   | array  | false    |
| industry                 | text                     | string | false    |
| business_goals           | text[]                   | array  | false    |
| interests                | text[]                   | array  | false    |
| location                 | text                     | string | false    |
| hobbies                  | text[]                   | array  | false    |
| career_stage             | text                     | string | false    |
| preferred_communication  | text                     | string | false    |
| created_at               | timestamp with time zone | string | false    |
| updated_at               | timestamp with time zone | string | false    |

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

### feedback

| name                           | type                     | format  | required |
|--------------------------------|--------------------------|---------|----------|
| feedback_id                    | uuid                     | string  | true     |
| user_id                        | uuid                     | string  | false    |
| meeting_id                     | uuid                     | string  | false    |
| feedback_type                  | text                     | string  | true     |
| content                        | text                     | string  | false    |
| media_url                      | text                     | string  | false    |
| transcript                     | text                     | string  | false    |
| highlight                      | text                     | string  | false    |
| rating                         | integer                  | number  | false    |
| is_testimonial                 | boolean                  | boolean | false    |
| linkedin_recommendation_url    | text                     | string  | false    |
| linkedin_recommendation_clicks | integer                  | number  | false    |
| created_at                     | timestamp with time zone | string  | false    |
| updated_at                     | timestamp with time zone | string  | false    |

*/

// Meetings hooks
export const useMeetings = () => useQuery({
    queryKey: ['meetings'],
    queryFn: () => fromSupabase(supabase.from('meetings').select('*'))
});

export const useMeeting = (meetingId) => useQuery({
    queryKey: ['meetings', meetingId],
    queryFn: () => fromSupabase(supabase.from('meetings').select('*').eq('meeting_id', meetingId).single()),
    enabled: !!meetingId
});

export const useAddMeeting = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newMeeting) => fromSupabase(supabase.from('meetings').insert([newMeeting])),
        onSuccess: () => {
            queryClient.invalidateQueries('meetings');
        },
    });
};

export const useUpdateMeeting = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ meetingId, updates }) => fromSupabase(supabase.from('meetings').update(updates).eq('meeting_id', meetingId)),
        onSuccess: () => {
            queryClient.invalidateQueries('meetings');
        },
    });
};

export const useDeleteMeeting = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (meetingId) => fromSupabase(supabase.from('meetings').delete().eq('meeting_id', meetingId)),
        onSuccess: () => {
            queryClient.invalidateQueries('meetings');
        },
    });
};

// New function to fetch meetings for a given authenticated user email
export const useUserMeetings = (authEmail) => useQuery({
    queryKey: ['userMeetings', authEmail],
    queryFn: () => fromSupabase(
        supabase.from('meetings')
            .select('*')
            .or(`host_email.eq.${authEmail},guest_email.eq.${authEmail}`)
            .order('event_start_time', { ascending: true })
    ),
    enabled: !!authEmail
});

// Profiles hooks
export const useProfiles = () => useQuery({
    queryKey: ['profiles'],
    queryFn: () => fromSupabase(supabase.from('profiles').select('*'))
});

export const useProfile = (userId) => useQuery({
    queryKey: ['profiles', userId],
    queryFn: () => fromSupabase(supabase.from('profiles').select('*').eq('user_id', userId).single()),
    enabled: !!userId
});

export const useAddProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProfile) => fromSupabase(supabase.from('profiles').insert([newProfile])),
        onSuccess: () => {
            queryClient.invalidateQueries('profiles');
        },
    });
};

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ userId, updates }) => fromSupabase(supabase.from('profiles').update(updates).eq('user_id', userId)),
        onSuccess: () => {
            queryClient.invalidateQueries('profiles');
        },
    });
};

export const useDeleteProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (userId) => fromSupabase(supabase.from('profiles').delete().eq('user_id', userId)),
        onSuccess: () => {
            queryClient.invalidateQueries('profiles');
        },
    });
};

// Matches hooks
export const useMatches = () => useQuery({
    queryKey: ['matches'],
    queryFn: () => fromSupabase(supabase.from('matches').select('*'))
});

export const useMatch = (matchId) => useQuery({
    queryKey: ['matches', matchId],
    queryFn: () => fromSupabase(supabase.from('matches').select('*').eq('match_id', matchId).single()),
    enabled: !!matchId
});

export const useAddMatch = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newMatch) => fromSupabase(supabase.from('matches').insert([newMatch])),
        onSuccess: () => {
            queryClient.invalidateQueries('matches');
        },
    });
};

export const useUpdateMatch = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ matchId, updates }) => fromSupabase(supabase.from('matches').update(updates).eq('match_id', matchId)),
        onSuccess: () => {
            queryClient.invalidateQueries('matches');
        },
    });
};

export const useDeleteMatch = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (matchId) => fromSupabase(supabase.from('matches').delete().eq('match_id', matchId)),
        onSuccess: () => {
            queryClient.invalidateQueries('matches');
        },
    });
};

// Feedback hooks
export const useFeedbacks = () => useQuery({
    queryKey: ['feedbacks'],
    queryFn: () => fromSupabase(supabase.from('feedback').select('*'))
});

export const useFeedback = (feedbackId) => useQuery({
    queryKey: ['feedbacks', feedbackId],
    queryFn: () => fromSupabase(supabase.from('feedback').select('*').eq('feedback_id', feedbackId).single()),
    enabled: !!feedbackId
});

export const useAddFeedback = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newFeedback) => fromSupabase(supabase.from('feedback').insert([newFeedback])),
        onSuccess: () => {
            queryClient.invalidateQueries('feedbacks');
        },
    });
};

export const useUpdateFeedback = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ feedbackId, updates }) => fromSupabase(supabase.from('feedback').update(updates).eq('feedback_id', feedbackId)),
        onSuccess: () => {
            queryClient.invalidateQueries('feedbacks');
        },
    });
};

export const useDeleteFeedback = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (feedbackId) => fromSupabase(supabase.from('feedback').delete().eq('feedback_id', feedbackId)),
        onSuccess: () => {
            queryClient.invalidateQueries('feedbacks');
        },
    });
};

// Custom hooks for specific queries
export const useMatchmakerProfile = (userId) => useQuery({
    queryKey: ['matchmakerProfile', userId],
    queryFn: () => fromSupabase(supabase.from('profiles').select('*').eq('user_id', userId).single()),
    enabled: !!userId
});

export const useUserMatchesWithProfiles = (userId) => useQuery({
    queryKey: ['userMatchesWithProfiles', userId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('matches')
            .select(`
                *,
                matched_profile:profiles!matches_matched_user_id_fkey(*)
            `)
            .eq('user_id', userId);

        if (error) throw new Error(error.message);
        return data.map(match => ({
            ...match,
            name: match.matched_profile.name,
            country: match.matched_profile.location,
            experience: match.matched_profile.career_stage,
            matchScore: match.matching_score,
            matchReason: match.explanation,
            potentialCollaboration: match.potential_collaboration,
            complimentarySkills: match.complementary_skills,
            sharedInterests: match.shared_interests,
            communicationCompatibility: match.communication_compatibility,
            geographicalSynergy: match.geographical_synergy,
            industry: match.matched_profile.industry,
            imageUrl: match.matched_profile.image_url,
            keySkills: match.matched_profile.key_skills
        }));
    },
    enabled: !!userId
});

export const useUserMatchesWithDetailsForProfile = (userId) => useQuery({
    queryKey: ['userMatchesWithDetails', userId],
    queryFn: async () => {
        const { data: matches, error } = await supabase
            .from('matches')
            .select(`
                *,
                matched_profile:profiles!matches_matched_user_id_fkey(*)
            `)
            .eq('user_id', userId);

        if (error) throw new Error(error.message);
        return matches;
    },
    enabled: !!userId
});

export const useDiscoveryMeetingsForProfile = (guestEmail) => useQuery({
    queryKey: ['discoveryMeetings', guestEmail],
    queryFn: async () => {
        const { data: meetings, error } = await supabase
            .from('meetings')
            .select('*')
            .eq('guest_email', guestEmail)
            .order('event_start_time', { ascending: true });

        if (error) throw new Error(error.message);
        return meetings;
    },
    enabled: !!guestEmail
});

// Realtime subscription hook
export const useRealtimeData = () => {
    const [realtimeData, setRealtimeData] = useState(null);

    useEffect(() => {
        const subscription = supabase
            .channel('table-db-changes')
            .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
                setRealtimeData(payload);
            })
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return realtimeData;
};