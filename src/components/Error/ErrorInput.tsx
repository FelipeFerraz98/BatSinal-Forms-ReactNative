import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessageInput({ message }: ErrorMessageProps) {
  if (!message) return null; // Se não houver mensagem, não renderiza nada

  return (
    <Text style={styles.errorText}>{message}</Text>
  );
}
