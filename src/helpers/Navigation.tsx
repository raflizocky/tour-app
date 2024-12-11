import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomBar} from './BottomBar';
import {Home} from '../screens/Home';
import {Team} from '../screens/Team';
import {Clock} from '../screens/Clock';
import {Inbox} from '../screens/Inbox';
import {Account} from '../screens/Account';

const navigationRef = React.createRef<any>();
const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        tabBar={props => <BottomBar {...props} />}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const icons: {[key: string]: string} = {
              Home: 'home',
              Team: 'people',
              Inbox: 'mail',
              Account: 'person',
              Clock: 'help-outline',
            };
            return (
              <Ionicons
                name={icons[route.name] || 'help-outline'}
                size={size}
                color={color}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Team" component={Team} />
        <Tab.Screen name="Clock" component={Clock} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
