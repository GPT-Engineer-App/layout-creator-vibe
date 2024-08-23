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

// ... (keep all existing hooks and functions)

// New realtime hooks
export const useRealtimeMeetings = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const subscription = supabase
            .channel('meetings_changes')
            .on('postgres_changes', 
                { event: 'UPDATE', schema: 'public', table: 'meetings' },
                (payload) => {
                    queryClient.invalidateQueries('meetings');
                    queryClient.invalidateQueries(['meetings', payload.new.meeting_id]);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, [queryClient]);
};

export const useRealtimeProfiles = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const subscription = supabase
            .channel('profiles_changes')
            .on('postgres_changes', 
                { event: 'UPDATE', schema: 'public', table: 'profiles' },
                (payload) => {
                    queryClient.invalidateQueries('profiles');
                    queryClient.invalidateQueries(['profiles', payload.new.user_id]);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, [queryClient]);
};

export const useRealtimeMatches = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const subscription = supabase
            .channel('matches_changes')
            .on('postgres_changes', 
                { event: 'UPDATE', schema: 'public', table: 'matches' },
                (payload) => {
                    queryClient.invalidateQueries('matches');
                    queryClient.invalidateQueries(['matches', payload.new.match_id]);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, [queryClient]);
};

// Combine all realtime hooks
export const useRealtimeUpdates = () => {
    useRealtimeMeetings();
    useRealtimeProfiles();
    useRealtimeMatches();
};