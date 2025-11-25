import { supabase } from '@/lib/supabase';
import type { WardrobeItem } from '@/types/wardrobe';

export const wardrobeService = {
  async list(userId: string) {
    const { data, error } = await supabase
      .from('wardrobe_items')
      .select('*')
      .eq('user_id', userId);
    if (error) throw error;
    return data as WardrobeItem[];
  },

  async add(item: Partial<WardrobeItem>) {
    const { data, error } = await supabase
      .from('wardrobe_items')
      .insert(item)
      .select()
      .single();
    if (error) throw error;
    return data as WardrobeItem;
  },
};
