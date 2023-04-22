import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../components/Home';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <Home />
    </div>,
  );
});
