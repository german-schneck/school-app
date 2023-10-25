// Dependencies
import {SagaIterator} from 'redux-saga';
import {put, select} from 'redux-saga/effects';

// Types
import {DeleteStudentAction} from '../types';
import {LoadersId} from '../../../shared/types/loaders';

// Selectors
import {selectStudents} from '../selectors';
import {selectUnnormalizedClassrooms} from '../../classrooms/selectors';

// Actions
import {setStudents} from '../actions';
import {setIsLoading} from '../../ui/loaders/actions';
import {setClassrooms} from '../../classrooms/actions';
import {normalizeState} from '../../../shared/utils/state';
import {Classroom} from '../../classrooms/types';

/**
 * Deletes a student.
 *
 * @param {DeleteStudentAction} action - The delete student action.
 * @returns {SagaIterator<void>} The result of the saga.
 */
function* deleteStudentProcess({
  payload: {id},
}: DeleteStudentAction): SagaIterator<void> {
  try {
    yield put(setIsLoading(LoadersId.IS_DELETING_CLASSROOM, true));

    const currentStudents = yield select(selectStudents);

    // Scalable solution: Integrate a backend endpoint here to delete a student.

    // Update Students State
    const updatedStudents = {...currentStudents};
    delete updatedStudents[id];
    yield put(setStudents(updatedStudents));

    // Remove students from classrooms.
    const classrooms: Classroom[] = yield select(selectUnnormalizedClassrooms);

    const classroomsWithStudent = classrooms.filter(e =>
      e.students.includes(id),
    );

    const newClassrooms = classroomsWithStudent.map(classroom => ({
      ...classroom,
      students: classroom.students.filter(studentId => studentId !== id),
    }));

    yield put(
      setClassrooms(normalizeState([...classrooms, ...newClassrooms], 'id')),
    );

    yield put(setIsLoading(LoadersId.IS_DELETING_CLASSROOM, false));
  } catch (error) {
    /** Error handler */
  }
}

export default deleteStudentProcess;
