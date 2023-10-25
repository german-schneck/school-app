import {
  ClassroomsActionTypes,
  ClassroomsState,
  ClassroomsActions,
} from './types';

const initialState: ClassroomsState = {
  data: {},
};

/**
 * Reducer for the classrooms.
 * @param state - The current state.
 * @param action - The action to be performed.
 * @returns The new state.
 */
const classroomsReducer = (
  state = initialState,
  action: ClassroomsActions,
): ClassroomsState => {
  switch (action.type) {
    /**
     * Fetches the classrooms.
     * @returns The current state.
     */
    case ClassroomsActionTypes.FETCH_CLASSROOMS:
      return state;

    /**
     * Sets the classrooms.
     * @param data - The data to set.
     * @returns The new state with the updated classrooms.
     */
    case ClassroomsActionTypes.SET_CLASSROOMS:
      return {
        ...state,
        data: action.payload.data,
      };

    /**
     * Updates a classroom.
     * @param id - The ID of the classroom to update.
     * @param data - The data to update.
     * @returns The new state with the updated classroom.
     */
    case ClassroomsActionTypes.UPDATE_CLASSROOM:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            ...action.payload.data,
          },
        },
      };
    default:
      return state;
  }
};

export default classroomsReducer;
