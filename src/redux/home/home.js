import axios from 'axios';

const GET_BOOKS = 'GET_BOOKS';
const URL = 'https://gutendex.com/books/';

const initialState = [];

export const getBooks = (url = URL) => async (dispatch) => {
  const response = await axios.get(url).then((apiBooks) => (apiBooks.data));
  //   (apiBooks) => (
  //     {
  //       count: apiBooks.data.count,
  //       next: apiBooks.data.next,
  //       previous: apiBooks.data.previous,
  //       results: apiBooks.data.results.map((el) => (
  //         {
  //           id: el.id,
  //           title: el.title,
  //           authors: (el.authors[0]) ? el.authors[0].name : '**No data**',
  //           subjects: (el.subjects[0]) ? el.subjects[0] : '**No data**',
  //           languages: el.languages[0],
  //         }
  //       )),
  //     }
  //   ),
  // );
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
