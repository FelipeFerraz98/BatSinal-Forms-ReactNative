import React from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <View>
      <Pressable 
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}
