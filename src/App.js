import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Book from './components/Book';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  </BrowserRouter>

);

export default App;
