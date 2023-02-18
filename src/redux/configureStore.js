import * as toolkit from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './book/book';
import homeReducer from './home/home';

const store = toolkit.configureStore(
  {
    reducer: { homeReducer, bookReducer },
    MiddlewareArray: [thunk, logger],
  },
);

export default store;
