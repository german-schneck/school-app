// Dependencies
import {SagaIterator} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';

// Types
import {CreateStudentAction} from '../types';
import {LoadersId} from '../../../shared/types/loaders';

// Selectors
import {selectStudents} from '../selectors';

// Actions
import {setStudents} from '../actions';
import {setIsLoading} from '../../ui/loaders/actions';
import {goBack} from '../../../navigator/navigatorActions';

/**
 * Creates a new student.
 *
 * @param {CreateStudentAction} action - The create student action.
 * @returns {SagaIterator<void>} The result of the saga.
 */
function* createStudentProcess({
  payload: {data},
}: CreateStudentAction): SagaIterator<void> {
  try {
    yield put(setIsLoading(LoadersId.IS_CREATING_STUDENT, true));

    const currentStudents = yield select(selectStudents);

    // Scalable solution: Integrate a backend endpoint here to create a student.

    const newId = Object.keys(currentStudents).length + 1;

    const newStudent = {
      id: newId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
    };

    yield put(setStudents({...currentStudents, [newId]: newStudent}));

    // Navigate back
    yield call(goBack);

    yield put(setIsLoading(LoadersId.IS_CREATING_STUDENT, false));
  } catch (error) {
    /** Error handler */
  }
}

export default createStudentProcess;
