// Dependencies
import {fork, all} from 'redux-saga/effects';

// Sagas
import classrooms from './classrooms/sagas';
import students from './students/sagas';

// Forked Sagas
export const sagas = [classrooms, students];

export default function* rootSaga(): any {
  yield all(sagas.map(fork));
}
