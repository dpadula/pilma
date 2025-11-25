import Button from '@/components/Button';
import Input from '@/components/Input';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { authService } from '../../services/authService';

export default function Login() {
  const [email, setEmail] = useState('');

  const login = async () => {
    try {
      await authService.login(email);
      router.replace('/(app)/index');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScreenWrapper>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>Ingresar</Text>
      <Input value={email} onChangeText={setEmail} placeholder='Email' />
      <Button title='Continuar' onPress={login} />
    </ScreenWrapper>
  );
}
