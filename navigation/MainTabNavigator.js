import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import DescriptionScreen from '../screens/DescriptionScreen';
import PricingScreen from '../screens/PricingScreen';

export default TabNavigator(
  {
    // setting tab navigation for each screen
    Home: {
      screen: HomeScreen,
    },
    Schedule: {
      screen: ScheduleScreen,
    },
    Description: {
      screen: DescriptionScreen,
    },
    Pricing: {
      screen: PricingScreen,
    },
  },
  {
    // styling the header
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: {backgroundColor: '#bc1616'},
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        // setting icons for the tab navigation
        switch (routeName) {
          case 'Home':

            iconName = Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
            break;
          case 'Schedule':
            iconName = Platform.OS === 'ios' ? `ios-time${focused ? '' : '-outline'}` : 'md-time';
            break;
          case 'Description':
            iconName = Platform.OS === 'ios' ? `ios-list-box${focused ? '' : '-outline'}` : 'md-list-box';
            break;
          case 'Pricing':
            iconName = Platform.OS === 'ios' ? `ios-pricetag${focused ? '' : '-outline'}` : 'md-pricetag';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.activeIconColor : Colors.inactiveIconColor}
          />
        );
      },
    }),
    // styling the bottom tab navigation
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveBackgroundColor:'#bc1616',
      activeBackgroundColor:'#bc1616',
      inactiveTintColor: 'black',
    }
}
);
