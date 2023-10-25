import {StudentsActionTypes, StudentsState, StudentsActions} from './types';

const initialState: StudentsState = {
  data: {},
};

/**
 * Reducer for the students.
 * @param state - The current state.
 * @param action - The action to be performed.
 * @returns The new state.
 */
const studentsReducer = (
  state = initialState,
  action: StudentsActions,
): StudentsState => {
  switch (action.type) {
    /**
     * Fetches the students.
     * @returns The current state.
     */
    case StudentsActionTypes.FETCH_STUDENTS:
      return state;

    /**
     * Sets the students.
     * @param data - The data to set.
     * @returns The new state with the updated students.
     */
    case StudentsActionTypes.SET_STUDENTS:
      return {
        ...state,
        data: action.payload.data,
      };

    /**
     * Updates a student.
     * @param id - The ID of the student to update.
     * @param data - The data to update.
     * @returns The new state with the updated student.
     */
    case StudentsActionTypes.UPDATE_STUDENT:
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

export default studentsReducer;
