import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import backArrow from '../assets/back-white.png';

const Book = () => {
  const { id } = useParams();
  const [book] = useSelector((state) => state.home.results.filter((bk) => bk.id === +id));
  const image = `https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.medium.jpg`;

  return (
    <div className="main">
      <div className="title">
        <Link to="/">
          <img src={backArrow} alt="back" className="back" />
        </Link>
        <h2>{book.title}</h2>
      </div>
      <img src={image} alt="book.name" className="cover" />
      <div className="details-grid">
        <div className="details-item">
          {book.authors.map((author, i) => {
            const key = i;
            return <h4 key={key}>{author.name}</h4>;
          })}
        </div>
        <div className="details-item">
          {book.subjects.map((topic, i) => {
            const key = i;
            return <p key={key}>{topic}</p>;
          })}
        </div>
        <div className="details-item">
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
        <p className="details-item">
          {book.download_count}
          {' '}
          downloads
        </p>
        <a className="read" href={book.formats['text/html']} target="_blank" rel="noreferrer">Go read it</a>
      </div>
    </div>

  );
};

export default Book;
