// Dependencies
import {combineReducers} from 'redux';

/**
 * Reducers
 */
import classrooms from './classrooms/reducer';
import students from './students/reducer';
import loaders from './ui/loaders/reducer';

// Exporter
const rootReducer = combineReducers({
  students,
  classrooms,
  ui: combineReducers({
    loaders,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
