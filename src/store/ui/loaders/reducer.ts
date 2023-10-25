// Actions
import {ILoaderState, LoaderActions, LoadersActionsTypes} from './types';
import {LoadersId} from '../../../shared/types/loaders';

/**
 * Initial state for the loader
 */
const initialLoaderState: ILoaderState = {
  [LoadersId.IS_CREATING_CLASSROOM]: false,
};

/**
 * Reducer for the loader
 * @param state - Current state of the loader
 * @param action - Action to be performed on the loader
 * @returns New state of the loader
 */
function loaderReducer(
  state: ILoaderState = initialLoaderState,
  action: LoadersActionsTypes,
): ILoaderState {
  switch (action.type) {
    case LoaderActions.SET_IS_LOADING:
      return {
        ...state,
        [action.payload.id]: action.payload.isLoading,
      };

    default:
      return state;
  }
}

export default loaderReducer;
