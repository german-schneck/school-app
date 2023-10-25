// Dependencies
import {takeLatest} from 'redux-saga/effects';

// Types
import {ClassroomsActionTypes} from '../types';

// Sagas
import createClassroomProcess from './createClassroomProcess';
import deleteClassroomProcess from './deleteClassroomProcess';

function* classrooms() {
  yield takeLatest(
    ClassroomsActionTypes.CREATE_CLASSROOM,
    createClassroomProcess,
  );
  yield takeLatest(
    ClassroomsActionTypes.DELETE_CLASSROOM,
    deleteClassroomProcess,
  );
}

export default classrooms;
