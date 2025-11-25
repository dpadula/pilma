// src/services/authService.ts
import { supabase } from '@/lib/supabase';

export const authService = {
  async login(email: string) {
    // Envío de Magic Link
    // TODO: Verificar si el mail es valido antes
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'pilma://auth', // puedes quitarlo si no usas deep links
      },
    });

    if (error) throw error;
    return data;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return true;
  },

  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  },

  async getUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  },
};
