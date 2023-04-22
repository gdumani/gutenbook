import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://gutendex.com/books';

const initialState = { searchFilter: { topic: '', search: '', languages: '' } };

export const getBooks = createAsyncThunk('home/getBooks', async (url = `${URL}/`) => {
  const response = await axios.get(url).then((apiBooks) => (apiBooks.data));
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
