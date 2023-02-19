import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
  const {
    id, title, authors, languages,
  } = props;
  const image = `https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.small.jpg`;
  return (
    <Link to={`book/${id}`} className="grid-item">
      <p>{id}</p>
      <img src={image} alt="cover" />
      <h4>{title}</h4>
      <p>{(authors[0]) ? authors[0].name : '**No data**'}</p>
      <p>{languages[0]}</p>
    </Link>
  );
};

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookItem;
