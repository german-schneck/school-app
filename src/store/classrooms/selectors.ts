import {unNormalizeState} from '../../shared/utils/state';
import {RootState} from '../reducers';
import {Classroom, ClassroomsState} from './types';

/**
 * Selects the classrooms from the state.
 * @param state - The root state.
 * @returns The classrooms data.
 */
export const selectClassrooms = (state: RootState): ClassroomsState['data'] =>
  state.classrooms.data;

/**
 * Selects the unnormalized classrooms from the state.
 * @param state - The root state.
 * @returns The unnormalized classrooms data.
 */
export const selectUnnormalizedClassrooms = (state: RootState): Classroom[] =>
  unNormalizeState(state.classrooms.data);
