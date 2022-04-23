import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './book/book';
import homeReducer from './home/home';

const reducer = combineReducers({
  bookReducer,
  homeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
