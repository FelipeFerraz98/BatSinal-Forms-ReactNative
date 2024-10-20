import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

import batLogo from '../../../assets/bat-logo.png'

export function BatImage() {
  return (
    <View>
        <Image 
        source={batLogo}
        style={styles.image} />
    </View>
  );
}