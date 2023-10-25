// Dependencies
import {useDispatch, useSelector} from 'react-redux';

// Types
import {
  Student,
  CreateStudentAction,
  DeleteStudentAction,
} from '../../store/students/types';

// Selectors
import {selectStudents} from '../../store/students/selectors';

// Actions
import {createStudent, deleteStudent} from '../../store/students/actions';

/**
 * Hook for accessing the students data.
 * @returns An object with methods to retrieve students.
 */
export interface IUseStudents {
  /**
   * Retrieves the students.
   * @returns The students.
   */
  students: Record<string, Student>;

  /**
   * Creates a new student.
   * @param data - The data to create the student.
   * @returns The action to create the student.
   */
  createStudent: (
    data: CreateStudentAction['payload']['data'],
  ) => CreateStudentAction;

  /**
   * Deletes a student.
   * @param id - The ID of the student to delete.
   * @returns The action to delete the student.
   */
  deleteStudent: (
    id: DeleteStudentAction['payload']['id'],
  ) => DeleteStudentAction;
}

/**
 * Hook for accessing the students data.
 * @returns An object with methods to retrieve students.
 */
export function useStudents(): IUseStudents {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  return {
    students,
    createStudent: data => dispatch(createStudent(data)),
    deleteStudent: id => dispatch(deleteStudent(id)),
  };
}

export type {Student};

export default useStudents;
