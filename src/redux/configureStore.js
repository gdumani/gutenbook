import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './book/book';
import homeReducer from './home/home';

const store = configureStore(
  { reducer: { homeReducer, bookReducer } },
  applyMiddleware(thunk, logger),
);

export default store;
