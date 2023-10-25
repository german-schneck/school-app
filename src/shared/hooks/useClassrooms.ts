// Dependencies
import {useDispatch, useSelector} from 'react-redux';

// Types
import {
  Classroom,
  CreateClassroomAction,
  DeleteClassroomAction,
  UpdateClassroomAction,
} from '../../store/classrooms/types';

// Selectors
import {selectClassrooms} from '../../store/classrooms/selectors';

// Actions
import {
  createClassroom,
  deleteClassroom,
  updateClassroom,
} from '../../store/classrooms/actions';

/**
 * Hook for accessing the classrooms data.
 * @returns An object with methods to retrieve classrooms.
 */
export interface IUseClassrooms {
  /**
   * Retrieves the classrooms.
   * @returns The classrooms.
   */
  classrooms: Record<string, Classroom>;

  /**
   * Creates a new classroom.
   * @param data - The data to create the classroom.
   * @returns The action to create the classroom.
   */
  createClassroom: (
    data: CreateClassroomAction['payload']['data'],
  ) => CreateClassroomAction;

  /**
   * Deletes a classroom.
   * @param id - The ID of the classroom to delete.
   * @returns The action to delete the classroom.
   */
  deleteClassroom: (
    id: DeleteClassroomAction['payload']['id'],
  ) => DeleteClassroomAction;

  /**
   * Updates a classroom.
   * @param id - The ID of the classroom to update.
   * @param data - The updated data for the classroom.
   * @returns The action to update the classroom.
   */
  updateClassroom: (
    id: UpdateClassroomAction['payload']['id'],
    data: UpdateClassroomAction['payload']['data'],
  ) => UpdateClassroomAction;
}

/**
 * Hook for accessing the classrooms data.
 * @returns An object with methods to retrieve classrooms.
 */
export function useClassrooms(): IUseClassrooms {
  const dispatch = useDispatch();
  const classrooms = useSelector(selectClassrooms);

  return {
    classrooms,
    createClassroom: data => dispatch(createClassroom(data)),
    deleteClassroom: id => dispatch(deleteClassroom(id)),
    updateClassroom: (id, data) => dispatch(updateClassroom(id, data)),
  };
}

export default useClassrooms;
