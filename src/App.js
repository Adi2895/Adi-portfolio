
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {


  return (
    <>

    <Router>

      <Navbar />
      <Home/>
      <Tech/>
      <Contact/>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
