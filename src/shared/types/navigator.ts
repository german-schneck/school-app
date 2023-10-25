// Types
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Classroom} from '../../store/classrooms/types';

/**
 * Root stack parameter list.
 */
export type RootStackParamList = {
  TabNavigator: undefined;

  ClassroomsListScreen: undefined;

  StudentsListScreen: undefined;

  NewClassroomScreen: undefined;

  NewStudentScreen: undefined;

  ClassroomDetailScreen: {
    classroom: Classroom;
  };

  EditClassroomStudentsScreen: {
    classroomId: Classroom['id'];
  };
};

/**
 * Root stack navigation prop.
 */
export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

/**
 * Root stack route prop.
 */
export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
