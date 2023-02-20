import React from 'react';
import ReactDOM from 'react-dom/client';
import BookItem from '../components/BookItem';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <BookItem {...{
        id: 1, title: 't', authors: [{ name: 'a' }], languages: ['en'],
      }}
      />
    </div>,
  );
});
