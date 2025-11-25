import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress, style }: any) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  txt: { color: '#fff', fontWeight: '700' },
});
