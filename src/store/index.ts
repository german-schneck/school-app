// Dependencies
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

// Packages
import reducers from './reducers';
import sagas from './sagas';

// Apply Middleware
const sagaMiddleware = createSagaMiddleware();

/**
 * Configuration for redux-persist
 * @type {Object}
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['ui'],
};

/**
 * Persisted reducer with the given configuration
 * @type {Function}
 */
const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Function to configure the store
 * @param {Object} initialState - The initial state
 * @returns {Object} The configured store and persistor
 */
export default (initialState = {}) => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
    preloadedState: initialState,
  });

  // Run Saga
  sagaMiddleware.run(sagas);

  /**
   * Persistor for the store
   * @type {Object}
   */
  const persistor = persistStore(store);

  return {store, persistor};
};
