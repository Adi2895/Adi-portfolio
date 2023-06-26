

import React, { useState, useEffect } from 'react'
// import overlay from "./static/_2lining.png"
export default function Home() {
        
    const [displayText, setDisplayText] = useState('');

const Typewriter = () => {
    
var speed = 50;
var text = "Fuull stack Web Developer"


    
  useEffect(() => {
    let i = 0;
    const typingTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prevText => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
    }, 1000); // Delay the typing effect by 1 second (adjust as needed)

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [])}

Typewriter();



    return (
        <>
        <section id="home">
        <div className="container ">
            <h1 className="conatiner " >
                
                <h1 className='myName' >  <span className="hii"> Hii, there <br></br>I am Aditya </span></h1>
                <h1 className='myName typewriter' > {displayText}</h1>
            </h1>

        </div>
               </section>
               {/* <img src={overlay} class="img-fluid rounded-top" alt=""/> */}
      
        </>
    )
}

