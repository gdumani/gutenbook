import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  console.log(id);
  const [book] = useSelector((state) => {
    console.log(state);
    return state.homeReducer.results.filter((bk) => bk.id === +id);
  });
  console.log(book);
  const image = `https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.medium.jpg`;

  return (
    <div>
      <h1>Guten Book</h1>
      <h2>{book.title}</h2>
      <img src={image} alt="book.name" />
    </div>
  );
};

export default Book;
