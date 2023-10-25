// Dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Configurations
import {defaultNoHeaderOptions} from './config';

// Navigator
import ClassroomsNavigator from './paths/ClassroomsNavigator';
import StudentsNavigator from './paths/StudentsNavigator';

// Components
import NavigationBar from '../shared/components/NavigationBar';

// Stack Initialization
const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName={'ClassroomsNavigator'}
      tabBar={props => <NavigationBar {...props} />}>
      <Tab.Screen
        name={'ClassroomsNavigator'}
        component={ClassroomsNavigator}
        options={defaultNoHeaderOptions}
      />
      <Tab.Screen
        name={'StudentsNavigator'}
        component={StudentsNavigator}
        options={defaultNoHeaderOptions}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
