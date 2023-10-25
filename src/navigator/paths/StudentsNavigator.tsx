// Dependencies
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Configurations
import {defaultScreenOptions} from '../config';

// Screens
import StudentsListScreen from '../../screens/StudentsListScreen';
import NewStudentScreen from '../../screens/NewStudentScreen';

// Stack Initialization
const Stack = createStackNavigator();

function StudentsNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={'StudentsListScreen'}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        ...defaultScreenOptions,
      }}>
      <Stack.Screen
        name={'StudentsListScreen'}
        component={StudentsListScreen}
        options={{title: 'Rather Labs Institute'}}
      />
      <Stack.Screen
        name={'NewStudentScreen'}
        component={NewStudentScreen}
        options={{title: 'Add a student'}}
      />
    </Stack.Navigator>
  );
}

export default StudentsNavigator;
