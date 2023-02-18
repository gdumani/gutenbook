import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, newUrl, setFilter } from '../redux/home/home';
import BookItem from './BookItem';

const Home = () => {
  const books = useSelector((store) => store.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, [dispatch]);

  const {
    count, next, previous, results,
  } = books;
  // const {
  //   topic, search, languages,
  // } = books.searchFilter;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter(name, value));
  };
  return (
    <div>
      <h1>GUTENBÜCHER</h1>
      <form>
        <input type="text" name="topic" placeholder="topic" onChange={handleChange} defaultValue="" />
        <input type="text" name="search" placeholder="Search author/title" onChange={handleChange} defaultValue="" />
        <input type="text" name="languages" placeholder="languages separated by coma" onChange={handleChange} defaultValue="" />
        <button type="button" onClick={() => dispatch(getBooks(newUrl()))}>Search</button>
      </form>
      <p>
        {((/page=\d*/g).test(previous)) && (
        <span>
          {'Page '}
          {(parseInt((/[1-9]\d*/).exec((/page=\d*/g).exec(previous)[0])[0], 10) + 1).toString()}
        </span>
        )}
        {(next) && (
        <span>
          {' Total pages '}
          {Math.floor(count / 32)}
        </span>
        )}
        {previous && <button type="button" onClick={() => dispatch(getBooks(previous))}>Previous</button>}
        {next && <button type="button" onClick={() => dispatch(getBooks(next))}>Next</button>}
      </p>

      <table>
        <tbody>
          {(results) && results.map((bookItem) => {
            const {
              id, title, authors, subjects, languages,
            } = bookItem;
            return (
              <BookItem
                key={id}
                {...{
                  id, title, authors, subjects, languages,
                }}
              />
            );
          })}
        </tbody>
      </table>

    </div>
  );
};
export default Home;
