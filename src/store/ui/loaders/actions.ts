// Dependencies
import {LoaderActions, SetIsLoadingAction} from './types';
import {LoadersId} from '../../../shared/types/loaders';

/**
 * @function setIsLoading():
 * @description Open a loader in the interface.
 * @param id Unique identifier of the loader instance.
 * @param isLoading Loader state true/false.
 */
export function setIsLoading(
  id: LoadersId,
  isLoading: boolean,
): SetIsLoadingAction {
  return {
    type: LoaderActions.SET_IS_LOADING,
    payload: {
      id,
      isLoading,
    },
  };
}
