import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

export function Button() {
  return (
    <View>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Ativar BatSinal</Text>
        </Pressable>
    </View>
  );
}