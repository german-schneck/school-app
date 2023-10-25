// Dependencies
import {SagaIterator} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';

// Types
import {CreateClassroomAction} from '../types';
import {LoadersId} from '../../../shared/types/loaders';

// Selectors
import {selectClassrooms} from '../selectors';

// Actions
import {setClassrooms} from '../actions';
import {setIsLoading} from '../../ui/loaders/actions';
import {goBack} from '../../../navigator/navigatorActions';

/**
 * Creates a new classroom.
 *
 * @param {CreateClassroomAction} action - The create classroom action.
 * @returns {SagaIterator<void>} The result of the saga.
 */
function* createClassroomProcess({
  payload: {data},
}: CreateClassroomAction): SagaIterator<void> {
  try {
    yield put(setIsLoading(LoadersId.IS_CREATING_CLASSROOM, true));

    const currentClassrooms = yield select(selectClassrooms);

    // Scalable solution: Integrate a backend endpoint here to create a classroom.

    const newId = Object.keys(currentClassrooms).length + 1;

    yield put(
      setClassrooms({
        ...currentClassrooms,
        [newId]: {
          id: newId,
          name: data.name,
          description: data.description,
          students: [],
        },
      }),
    );

    // Navigate back
    yield call(goBack);

    yield put(setIsLoading(LoadersId.IS_CREATING_CLASSROOM, false));
  } catch (error) {
    /** Error handler */
  }
}

export default createClassroomProcess;
