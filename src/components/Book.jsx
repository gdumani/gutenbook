import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  const [book] = useSelector((state) => state.homeReducer.results.filter((bk) => bk.id === +id));
  console.log(book);
  const image = `https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.medium.jpg`;

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={image} alt="book.name" />
      <div>
        {book.authors.map((author, i) => {
          const key = i;
          return <h4 key={key}>{author.name}</h4>;
        })}
      </div>
      <div>
        {book.subjects.map((topic, i) => {
          const key = i;
          return <p key={key}>{topic}</p>;
        })}
      </div>
      <div>
        {book.languages.map((lang, i) => {
          const key = i;
          return (
            <span key={key}>
              {lang}
              {' '}
            </span>
          );
        })}
      </div>
      <p>
        {book.download_count}
        {' '}
        downloads
      </p>
      <a href={book.formats['text/html']} target="_blank" rel="noreferrer">Go read it</a>
    </div>

  );
};

export default Book;
