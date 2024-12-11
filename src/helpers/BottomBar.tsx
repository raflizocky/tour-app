import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

export const BottomBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.containerBB}>
      <View style={styles.bottomBarShadow} />
      <View style={styles.tabBarContainer}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (route.name === 'Clock') {
            return (
              <View key={index} style={styles.clockButtonContainer}>
                <TouchableOpacity
                  onPress={onPress}
                  activeOpacity={0.9}
                  style={styles.clockWrapper}>
                  <View style={styles.ringContainer}>
                    <View style={styles.innerCircle}>
                      <MaterialCommunityIcons
                        name="cellphone-marker"
                        size={24}
                        color="#FFFFFF"
                      />
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.clockLabel,
                      {color: isFocused ? '#FF0000' : '#6B7280'},
                    ]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabButton}>
              {options.tabBarIcon?.({
                focused: isFocused,
                color: isFocused ? '#FF0000' : '#6B7280',
                size: 24,
              })}
              <Text
                style={[
                  styles.tabLabel,
                  {color: isFocused ? '#FF0000' : '#6B7280'},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
