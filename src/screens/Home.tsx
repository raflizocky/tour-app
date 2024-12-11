import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../helpers/styles';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
