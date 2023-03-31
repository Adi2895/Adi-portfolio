
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>

    <Router>

      <Navbar />
      <Home/>
      
      </Router>
    </>
  );
}

export default App;
