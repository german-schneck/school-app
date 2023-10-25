import {Student} from '../students/types';

/**
 * Action types for classrooms.
 */
export enum ClassroomsActionTypes {
  FETCH_CLASSROOMS = 'FETCH_CLASSROOMS',
  SET_CLASSROOMS = 'SET_CLASSROOMS',
  UPDATE_CLASSROOM = 'UPDATE_CLASSROOM',
  CREATE_CLASSROOM = 'CREATE_CLASSROOM',
  DELETE_CLASSROOM = 'DELETE_CLASSROOM',
}

/**
 * The state of the classrooms.
 */
export interface ClassroomsState {
  data: Record<string, Classroom>;
}

/**
 * Action for fetching classrooms.
 */
export interface FetchClassroomsAction {
  type: typeof ClassroomsActionTypes.FETCH_CLASSROOMS;
}

/**
 * Action for setting classrooms.
 */
export interface SetClassroomsAction {
  type: typeof ClassroomsActionTypes.SET_CLASSROOMS;
  payload: {
    data: ClassroomsState['data'];
  };
}

/**
 * Action for updating a classroom.
 */
export interface UpdateClassroomAction {
  type: typeof ClassroomsActionTypes.UPDATE_CLASSROOM;
  payload: {
    id: Classroom['id'];
    data: Partial<Classroom>;
  };
}

/**
 * Action for creating a classroom.
 */
export interface CreateClassroomAction {
  type: typeof ClassroomsActionTypes.CREATE_CLASSROOM;
  payload: {
    data: {
      name: Classroom['name'];
      description: Classroom['description'];
    };
  };
}

/**
 * Action for deleting a classroom.
 */
export interface DeleteClassroomAction {
  type: typeof ClassroomsActionTypes.DELETE_CLASSROOM;
  payload: {
    id: Classroom['id'];
  };
}

/**
 * The structure of a classroom.
 */
export interface Classroom {
  id: number;
  name: string;
  description: string;
  students: Array<Student['id']>;
}

/**
 * Actions that can be dispatched for classrooms.
 */
export type ClassroomsActions =
  | FetchClassroomsAction
  | SetClassroomsAction
  | UpdateClassroomAction
  | CreateClassroomAction
  | DeleteClassroomAction;
