import {
  StudentsActionTypes,
  CreateStudentAction,
  DeleteStudentAction,
  FetchStudentsAction,
  SetStudentsAction,
  UpdateStudentAction,
} from './types';

/**
 * Fetches the students.
 * @returns The action to fetch the students.
 */
export const fetchStudents = (): FetchStudentsAction => {
  return {
    type: StudentsActionTypes.FETCH_STUDENTS,
  };
};

/**
 * Sets the students.
 * @param data - The data to set.
 * @returns The action to set the students.
 */
export const setStudents = (
  data: SetStudentsAction['payload']['data'],
): SetStudentsAction => {
  return {
    type: StudentsActionTypes.SET_STUDENTS,
    payload: {
      data,
    },
  };
};

/**
 * Updates a student.
 * @param id - The ID of the student to update.
 * @param data - The data to update.
 * @returns The action to update the student.
 */
export const updateStudent = (
  id: UpdateStudentAction['payload']['id'],
  data: UpdateStudentAction['payload']['data'],
): UpdateStudentAction => {
  return {
    type: StudentsActionTypes.UPDATE_STUDENT,
    payload: {
      id,
      data,
    },
  };
};

/**
 * Creates a student.
 * @param data - The data to create a new student.
 * @returns The action to create a student.
 */
export const createStudent = (
  data: CreateStudentAction['payload']['data'],
): CreateStudentAction => {
  return {
    type: StudentsActionTypes.CREATE_STUDENT,
    payload: {
      data,
    },
  };
};

/**
 * Deletes a student.
 * @param id - The ID of the student to delete.
 * @returns The action to delete the student.
 */
export const deleteStudent = (
  id: DeleteStudentAction['payload']['id'],
): DeleteStudentAction => {
  return {
    type: StudentsActionTypes.DELETE_STUDENT,
    payload: {
      id,
    },
  };
};
