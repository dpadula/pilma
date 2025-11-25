import { supabase } from '@/lib/supabase';
import type { Profile } from '@/types/profile';

export const userService = {
  async getProfile(userId: string): Promise<Profile | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) throw error;
    return data;
  },

  //   async upsertProfile(profile: Partial<Profile>): Promise<Profile | null> {
  //     const { data, error } = await supabase
  //       .from('profiles')
  //       .upsert(profile)
  //       .select()
  //       .single();
  //     if (error) throw error;
  //     return data;
  //   },

  async createProfile(userId: string): Promise<void> {
    await supabase.from('profiles').insert({
      id: userId,
      onboarding_complete: false,
    });
  },

  async updateProfile(userId: string, payload: Partial<Profile>) {
    await supabase.from('profiles').update(payload).eq('id', userId);
  },
};
