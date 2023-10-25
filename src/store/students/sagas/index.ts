// Dependencies
import {takeLatest} from 'redux-saga/effects';

// Types
import {StudentsActionTypes} from '../types';

// Sagas
import createStudentProcess from './createStudentProcess';
import deleteStudentProcess from './deleteStudentProcess';

function* students() {
  yield takeLatest(StudentsActionTypes.CREATE_STUDENT, createStudentProcess);
  yield takeLatest(StudentsActionTypes.DELETE_STUDENT, deleteStudentProcess);
}

export default students;
