import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Dinning from './components/Dining';
import Rooms from './components/Rooms';
import Contact from './components/Contact';
import Events from './components/Events';
import Gallery from './components/Gallery';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/dining" element={<Dinning />} /> 
            <Route path="/rooms" element={<Rooms />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/events" element={<Events />} /> 
            <Route path="/gallery" element={<Gallery />} /> 
          </Routes> 
      </div>
    </Router>
  );
};

export default App;
