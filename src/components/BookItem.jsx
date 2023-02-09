import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    id, title, authors, subjects, languages,
  } = props;
  return (
    <tr>
      <td>
        {`${title} id: ${id}`}
      </td>
      <td>{(authors[0]) ? authors[0].name : '**No data**'}</td>
      <td>{subjects[0] ? subjects[0] : '**NO DATA**'}</td>
      <td>{languages[0]}</td>
    </tr>
  );
};

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookItem;
