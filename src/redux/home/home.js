import axios from 'axios';

const GET_BOOKS = 'GET_BOOKS';
export const URL = 'https://gutendex.com/books';

const initialState = [];

export const getBooks = (url = `${URL}/`) => async (dispatch) => {
  const response = await axios.get(url).then((apiBooks) => (apiBooks.data));
  dispatch({
    type: GET_BOOKS,
    payload: response,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
