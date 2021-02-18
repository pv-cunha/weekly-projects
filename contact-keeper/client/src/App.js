import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';

// Context States
import ContactState from './Context/Contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </ContactState>
  );
};

export default App;
