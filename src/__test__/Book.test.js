import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from '../components/Book';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <Book />
    </div>,
  );
});
