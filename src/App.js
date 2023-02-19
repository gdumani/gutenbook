import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Book from './components/Book';

const App = () => (
  <BrowserRouter>
    <React.StrictMode>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </div>
    </React.StrictMode>
  </BrowserRouter>

);

export default App;
