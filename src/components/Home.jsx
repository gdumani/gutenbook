import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearFilter, getBooks, newUrl, setFilter,
} from '../redux/home/home';
import BookItem from './BookItem';

const Home = () => {
  const books = useSelector((store) => store.home);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, [dispatch]);

  const {
    count, next, previous, results, searchFilter,
  } = books;
  const {
    topic, search, languages,
  } = searchFilter;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { [name]: value };
    dispatch(setFilter(data));
  };
  return (
    <div className="main">
      <h1>GUTENBÜCHER</h1>
      <form className="searchform">
        <input type="text" name="topic" placeholder="topic" onChange={handleChange} value={topic} />
        <input type="text" name="search" placeholder="Search author/title" onChange={handleChange} value={search} />
        <input type="text" name="languages" placeholder="languages separated by coma" onChange={handleChange} value={languages} />
        <button type="button" onClick={() => dispatch(getBooks(newUrl(searchFilter)))}>Search</button>
        <button type="button" onClick={() => dispatch(clearFilter())}>Clear</button>
      </form>
      <p className="pages">
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

      <div className="grid-container">

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

      </div>

    </div>
  );
};
export default Home;
