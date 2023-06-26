import React from 'react'
import logo from "./static/personel-removebg.png"
export default function Intro() {
  return (
    <>
      
      <p className='container content-justify' style={{fontSize:"1.4rem", textAlign:"left" }}>
        <h3 className='mb-3' style={{color:"#fba2a2"}}> Let me introduce myself:</h3>
        <div className="row justify-content-center text-align-center image-container">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <img className='myImage' src={logo} alt="myImage"/>
            </div>
          <div className="col-lg-9 col-md-8 col-sm-12 description">
            <p >I'm a tech enthusiast with a strong passion for coding. I find great joy and fulfillment in
                 exploring the vast and ever-evolving world of technology. 
                 With a positive attitude, I approach challenges with enthusiasm and an eagerness to learn and grow.
          </p></div>
        </div>
                
                
                 <br/>
                 <p >
                 Coding has become more than just a skill for me; it's a genuine passion. I enjoy diving into programming languages, 
                 developing software, and solving complex problems using code. 
                 The ability to create something from scratch and witness it come 
                 to life through programming is truly fascinating to me.
                 </p>
                 <br/>
                 <p>
                 Having a keen interest in the tech world, I stay up to date with the latest trends, 
                 advancements, and innovations in the industry.
                 </p>
                 {/* This curiosity allows me to constantly expand my knowledge 
                 and stay ahead of the curve. I'm always excited to explore new 
                 technologies and their potential applications. */}
                 </p>
                 <hr style={{ border: "dotted 6px rgb(253, 230, 230)", width:"10%", borderTop:"none", margin:"150px auto", }}/>
            
    </>
  )
}
