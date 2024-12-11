import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../helpers/styles';

export const Clock: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clock</Text>
    </View>
  );
};
