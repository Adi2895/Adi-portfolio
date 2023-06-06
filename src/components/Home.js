

import React from 'react'

export default function Home() {
    
    return (
        <>
        <section >
        <div className="container " style={{marginTop:200, marginBottom:50}}>
            <div className="conatiner" >
                <h1 className='myName' style={{fontSize:"3.8rem"}}>  <span className="hii"> Hii</span>, there <br></br>I am Aditya</h1>
                <h1 style={{fontSize:"3.8rem" , fontFamily:'Alkatra'}}>Full stack Web Developer </h1>
                <p className='container content-justify' style={{fontSize:"1.4rem", textAlign:"left" }}>
                I'm a tech enthusiast with a strong passion for coding. I find great joy and fulfillment in
                 exploring the vast and ever-evolving world of technology. 
                 With a positive attitude, I approach challenges with enthusiasm and an eagerness to learn and grow.
                 <br/>
                 <br/>
                 Coding has become more than just a skill for me; it's a genuine passion. I enjoy diving into programming languages, 
                 developing software, and solving complex problems using code. 
                 The ability to create something from scratch and witness it come 
                 to life through programming is truly fascinating to me.
                 <br/>
                 <br/>
                 Having a keen interest in the tech world, I stay up to date with the latest trends, 
                 advancements, and innovations in the industry.
                 This curiosity allows me to constantly expand my knowledge 
                 and stay ahead of the curve. I'm always excited to explore new 
                 technologies and their potential applications.
                 </p>
            </div>

        </div>

        <hr style={{ border: "dotted 6px rgb(253, 230, 230)", width:"10%", borderTop:"none", margin:"150px auto", }}/>
        </section>
        </>
    )
}

