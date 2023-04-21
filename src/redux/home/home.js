/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const GET_BOOKS = 'GET_BOOKS';
// export const SET_FILTER = 'SET_FILTER';
// export const CLEAR_FILTER = 'CLEAR_FILTER';
const URL = 'https://gutendex.com/books';

const initialState = { searchFilter: { topic: '', search: '', languages: '' } };

// export const getBooks = (url = `${URL}/`) => async (dispatch) => {
//   const response = await axios.get(url).then((apiBooks) => (apiBooks.data));
//   dispatch({
//     type: GET_BOOKS,
//     payload: response,
//   });
// };
export const getBooks = createAsyncThunk('home/getBooks', async (url = `${URL}/`) => {
  const response = await axios.get(url).then((apiBooks) => (apiBooks.data));
  console.log(response);
  return response;
});

export const newUrl = (searchFilter) => {
  const { topic, search, languages } = searchFilter;
  return `${URL}${(topic || search || languages) && '?'}${topic && `topic=${topic}`}`
+ `${topic && search && '&&'}${search && `search=${search}`}`
+ `${(topic || search) && languages && '&&'}${languages && `languages=${languages}`}`;
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.searchFilter = { ...state.searchFilter, ...action.payload };
    },
    clearFilter: (state) => {
      state.searchFilter = { topic: '', search: '', languages: '' };
    },
  },
  extraReducers(builder) {
    builder.addCase(getBooks.fulfilled, (state, action) => ({ ...state, ...action.payload }));
  },
});

export const { setFilter, clearFilter } = homeSlice.actions;

export default homeSlice.reducer;

// Path: src/redux/home/home.js

// export const setFilter = (name, value) => ({
//   type: SET_FILTER,
//   payload: { [name]: value },
// });

// export const clearFilter = () => ({
//   type: CLEAR_FILTER,
//   payload: { searchFilter: { topic: '', search: '', languages: '' } },
// });

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_BOOKS:
//       return { searchFilter: state.searchFilter, ...action.payload };
//     case SET_FILTER:
//       return { ...state, searchFilter: { ...state.searchFilter, ...action.payload } };
//     case CLEAR_FILTER:
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };

// export default reducer;
