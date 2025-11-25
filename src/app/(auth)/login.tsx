import Button from '@/components/Button';
import Input from '@/components/Input';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { supabase } from '@/lib/supabase';
import { isEmail } from '@/utils/validations';
import React, { useState } from 'react';
import { Text } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');

  const login = async () => {
    if (!isEmail(email)) return alert('Email inválido');
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) return alert(error.message);
    alert('Revisá tu email para el link/magic code');
    // Puedes redirigir a onboarding cuando confirmes sesión
  };

  return (
    <ScreenWrapper>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>Ingresar</Text>
      <Input value={email} onChangeText={setEmail} placeholder='Email' />
      <Button title='Continuar' onPress={login} />
    </ScreenWrapper>
  );
}
