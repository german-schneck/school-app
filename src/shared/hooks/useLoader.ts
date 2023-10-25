// Dependencies
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Types
import {LoadersId} from '../types/loaders';
import {RootState} from '../../store/reducers';

// Actions
import {setIsLoading} from '../../store/ui/loaders/actions';

/**
 * Custom hook to manage loading state.
 *
 * @param id - The loader ID.
 * @returns A tuple with the loading state and a function to set the loading state.
 */
function useLoader(
  id: LoadersId,
): [boolean, (id: LoadersId, isLoading: boolean) => void] {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.ui.loaders[id]);

  /**
   * Set the loading state.
   *
   * @param loaderId - The loader ID.
   * @param state - The loading state.
   */
  const setLoading = useCallback(
    (loaderId: LoadersId, state: boolean) => {
      dispatch(setIsLoading(loaderId, state));
    },
    [dispatch],
  );

  return [isLoading, setLoading];
}

export {LoadersId};

export default useLoader;
