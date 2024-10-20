import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



import { styles } from './styles';
import { BatImage } from '../../components/Image/BatImage';
import { Button } from '../../components/Button/Button';

export function Home() {
  return (
    <View style={styles.container}>
        <BatImage />
        <Button />
    </View>
  );
}