
import './App.css';
import React, { useRef, useEffect } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  const tech = useRef(null);
  const contact = useRef(null); 
  const home = useRef(null);


  const homeHandle=()=>{
    window.scrollTo({ top:0, left:0, behavior:'smooth'});
  }

  const techHandle=()=>{
    tech.current?.scrollIntoView({top:1, behavior:'smooth'});
  }

  const contactHandle = ()=>{

    contact.current?.scrollIntoView({top:3, behavior:'smooth'});
    
    }


  return (
    <>

    <Router>

      <Navbar homeHandle={homeHandle} 
      contactHandle={contactHandle} techHandle={techHandle}/>
      <Home />
      <Tech tech={tech} />
      <Contact contact={contact} />
      <Footer/>
      </Router>
    </>
  );
}

export default App;
