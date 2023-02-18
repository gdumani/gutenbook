import axios from 'axios';

const GET_BOOKS = 'GET_BOOKS';
const SET_FILTER = 'SET_FILTER';
const URL = 'https://gutendex.com/books';

const initialState = { searchFilter: { topic: '', search: '', languages: '' } };

export const getBooks = (url = `${URL}/`) => async (dispatch) => {
  const response = await axios.get(url).then((apiBooks) => (apiBooks.data));
  dispatch({
    type: GET_BOOKS,
    payload: response,
  });
};

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: { [name]: value },
});

export const newUrl = () => '/';
// {
//   const { topic, search, languages } = searchFilter;
//   return `${URL}${(topic || search || languages) && '?'}${topic && `topic=${topic}`}`
// + `${topic && search && '&&'}${search && `search=${search}`}`
// + `${(topic || search) && languages && '&&'}${languages && `languages=${languages}`}`;
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { searchFilter: state.searchFilter, ...action.payload };
    case SET_FILTER:
      return console.log({ ...state, searchFilter: { ...state.searchFilter, ...action.payload } });
    default:
      return state;
  }
};

export default reducer;
