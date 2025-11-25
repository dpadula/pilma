import { supabase } from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export function useAuthState() {
  const [session, setSession] = useState<Session | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoaded(true);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_e, newSession) => {
        setSession(newSession);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return {
    session,
    user: session?.user ?? null,
    loaded,
  };
}
