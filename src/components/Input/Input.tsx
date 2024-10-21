import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { ErrorMessageInput } from '../Error/ErrorInput';

interface InputProps {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export function Input({ title, value, onChangeText, error }: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Insira seu ${title}`}
        placeholderTextColor="gray" 
      />
      <ErrorMessageInput message={error || ''} />
    </View>
  );
}
