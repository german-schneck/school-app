// Dependencies
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Configurations
import {defaultScreenOptions} from '../config';

// Screens
import ClassroomsListScreen from '../../screens/ClassroomsListScreen';
import ClassroomDetailScreen from '../../screens/ClassroomDetailScreen';
import NewClassroomScreen from '../../screens/NewClassroomScreen';
import EditClassroomStudentsScreen from '../../screens/EditClassroomStudentsScreen';

// Types
import {RootStackParamList} from '../../shared/types/navigator';

// Stack Initialization
const Stack = createStackNavigator<RootStackParamList>();

function ClassroomsNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={'ClassroomsListScreen'}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        ...defaultScreenOptions,
      }}>
      <Stack.Screen
        name={'ClassroomsListScreen'}
        component={ClassroomsListScreen}
        options={{title: 'Rather Labs Institute'}}
      />
      <Stack.Screen
        name={'EditClassroomStudentsScreen'}
        component={EditClassroomStudentsScreen}
        options={{
          title: 'Edit Students',
        }}
      />
      <Stack.Screen
        name={'NewClassroomScreen'}
        component={NewClassroomScreen}
        options={{
          title: 'Create classrooms',
        }}
      />
      <Stack.Screen
        name={'ClassroomDetailScreen'}
        component={ClassroomDetailScreen}
        options={props => ({
          title: props.route.params.classroom.name,
        })}
      />
    </Stack.Navigator>
  );
}

export default ClassroomsNavigator;
