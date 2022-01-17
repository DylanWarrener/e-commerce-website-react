// React redux functions
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Redux root reducer
import rootReducer from './root-reducer';

// The logging information
const middlewares = [logger];

// Creates a store with the root reducer and adds the middleware logger
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Exports the file as store
export default store;