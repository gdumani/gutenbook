import * as toolkit from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeSlice from './home/home';

const store = toolkit.configureStore(
  {
    reducer: { home: homeSlice },
    MiddlewareArray: [logger],
  },
);

export default store;
