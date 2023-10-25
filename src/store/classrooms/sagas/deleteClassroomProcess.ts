// Dependencies
import {SagaIterator} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';

// Types
import {DeleteClassroomAction} from '../types';
import {LoadersId} from '../../../shared/types/loaders';

// Selectors
import {selectClassrooms} from '../selectors';

// Actions
import {setClassrooms} from '../actions';
import {setIsLoading} from '../../ui/loaders/actions';
import {goBack} from '../../../navigator/navigatorActions';

/**
 * Deletes a classroom.
 *
 * @param {DeleteClassroomAction} action - The delete classroom action.
 * @returns {SagaIterator<void>} The result of the saga.
 */
function* deleteClassroomProcess({
  payload: {id},
}: DeleteClassroomAction): SagaIterator<void> {
  try {
    yield put(setIsLoading(LoadersId.IS_DELETING_CLASSROOM, true));

    const currentClassrooms = yield select(selectClassrooms);

    // Navigate back
    yield call(goBack);

    // Scalable solution: Integrate a backend endpoint here to delete a classroom.
    const updatedClassrooms = {...currentClassrooms};
    delete updatedClassrooms[id];
    yield put(setClassrooms(updatedClassrooms));

    yield put(setIsLoading(LoadersId.IS_DELETING_CLASSROOM, false));
  } catch (error) {
    /** Error handler */
  }
}

export default deleteClassroomProcess;
