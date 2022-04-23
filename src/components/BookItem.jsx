import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    id, title, authors, subjects, languages,
  } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{authors}</td>
      <td>{subjects}</td>
      <td>{languages}</td>
    </tr>
  );
};

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  subjects: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
};

export default BookItem;
