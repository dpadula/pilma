import { useAuthState } from '@/hooks/useAuthState';
import { Redirect, Slot } from 'expo-router';

export default function RootLayout() {
  const { session, loaded } = useAuthState();

  // Mientras se carga la sesión → no renderizar (evita parpadeos)
  if (!loaded) return null;

  // Si no hay sesión → ir al login
  if (!session) return <Redirect href='/(auth)/login' />;

  // Si hay sesión → entrar a la app interna
  return <Slot />;
}
