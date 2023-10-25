import {RootState} from '../reducers';
import {StudentsState} from './types';

/**
 * Selects the students from the state.
 * @param state - The root state.
 * @returns The students data.
 */
export const selectStudents = (state: RootState): StudentsState['data'] =>
  state.students.data;
