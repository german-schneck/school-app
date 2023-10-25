// Types
import {LoadersId} from '../../../shared/types/loaders';

/**
 * Enum for loader actions
 */
export enum LoaderActions {
  SET_IS_LOADING = 'SET_IS_LOADING',
}

/**
 * Interface for loader state
 */
export type ILoaderState = {
  [id in LoadersId]: boolean;
};

/**
 * Interface for SetIsLoadingAction
 */
export interface SetIsLoadingAction {
  type: LoaderActions.SET_IS_LOADING;
  payload: {
    id: LoadersId;
    isLoading: boolean;
  };
}

/**
 * Type for loaders action types
 */
export type LoadersActionsTypes = SetIsLoadingAction;
