// Dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Configurations
import {defaultNoHeaderOptions} from './config';

// Types
import {RootStackParamList} from '../shared/types/navigator';

// Navigator
import TabNavigator from './TabNavigator';

// Stack Initialization
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={'TabNavigator'}
      screenOptions={defaultNoHeaderOptions}>
      <Stack.Screen
        name={'TabNavigator'}
        component={TabNavigator}
        options={defaultNoHeaderOptions}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
