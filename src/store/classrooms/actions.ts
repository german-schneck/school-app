import {
  ClassroomsActionTypes,
  CreateClassroomAction,
  DeleteClassroomAction,
  FetchClassroomsAction,
  SetClassroomsAction,
  UpdateClassroomAction,
} from './types';

/**
 * Fetches the classrooms.
 * @returns The action to fetch the classrooms.
 */
export const fetchClassrooms = (): FetchClassroomsAction => {
  return {
    type: ClassroomsActionTypes.FETCH_CLASSROOMS,
  };
};

/**
 * Sets the classrooms.
 * @param data - The data to set.
 * @returns The action to set the classrooms.
 */
export const setClassrooms = (
  data: SetClassroomsAction['payload']['data'],
): SetClassroomsAction => {
  return {
    type: ClassroomsActionTypes.SET_CLASSROOMS,
    payload: {
      data,
    },
  };
};

/**
 * Updates a classroom.
 * @param id - The ID of the classroom to update.
 * @param data - The data to update.
 * @returns The action to update the classroom.
 */
export const updateClassroom = (
  id: UpdateClassroomAction['payload']['id'],
  data: UpdateClassroomAction['payload']['data'],
): UpdateClassroomAction => {
  return {
    type: ClassroomsActionTypes.UPDATE_CLASSROOM,
    payload: {
      id,
      data,
    },
  };
};

/**
 * Creates a classroom.
 * @param data - The data to create a new classroom.
 * @returns The action to create a classroom.
 */
export const createClassroom = (
  data: CreateClassroomAction['payload']['data'],
): CreateClassroomAction => {
  return {
    type: ClassroomsActionTypes.CREATE_CLASSROOM,
    payload: {
      data,
    },
  };
};

/**
 * Deletes a classroom.
 * @param id - The ID of the classroom to delete.
 * @returns The action to delete the classroom.
 */
export const deleteClassroom = (
  id: DeleteClassroomAction['payload']['id'],
): DeleteClassroomAction => {
  return {
    type: ClassroomsActionTypes.DELETE_CLASSROOM,
    payload: {
      id,
    },
  };
};
