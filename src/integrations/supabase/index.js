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

// ... (keep all existing code)

// Add this new function
export const useUserMeetings = (userEmail) => useQuery({
    queryKey: ['userMeetings', userEmail],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('meetings')
            .select('*')
            .or(`host_email.eq.${userEmail},guest_email.eq.${userEmail}`)
            .order('event_start_time', { ascending: true });

        if (error) throw new Error(error.message);
        return data;
    },
    enabled: !!userEmail
});

// ... (keep all existing code)