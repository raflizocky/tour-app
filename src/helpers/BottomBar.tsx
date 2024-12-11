import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {CopilotStep, walkthroughable} from 'react-native-copilot';

const WalkthroughableView = walkthroughable(View);
const WalkthroughableTouchableOpacity = walkthroughable(TouchableOpacity);

export const BottomBar = ({state, descriptors, navigation}: any) => {
  const getStepText = (routeName: string, label: string) => {
    switch (routeName) {
      case 'Home':
        return `Explore the menu to see main menu and access the latest updates.`;
      case 'Team':
        return `Check out the menu to view and manage team members.`;
      case 'Inbox':
        return `Open the menu to read notifications, and approval updates.`;
      case 'Account':
        return `Visit the menu to update your profile and manage settings.`;
      default:
        return `Navigate to the ${label} menu for more features.`;
    }
  };

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
              <CopilotStep
                key={index}
                text={`Open the menu to access the Clock-in/out feature.`}
                order={3}
                name="Clock">
                <WalkthroughableView style={styles.clockButtonContainer}>
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
                </WalkthroughableView>
              </CopilotStep>
            );
          }

          const stepText = getStepText(route.name, label);

          return (
            <CopilotStep
              key={index}
              text={stepText}
              order={
                route.name === 'Home'
                  ? 1
                  : route.name === 'Team'
                  ? 2
                  : route.name === 'Clock'
                  ? 3
                  : route.name === 'Inbox'
                  ? 4
                  : route.name === 'Account'
                  ? 5
                  : 6
              }
              name={`${route.name}`}>
              <WalkthroughableTouchableOpacity
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
              </WalkthroughableTouchableOpacity>
            </CopilotStep>
          );
        })}
      </View>
    </View>
  );
};
