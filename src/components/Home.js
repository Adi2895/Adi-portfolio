

import React from 'react'

export default function Home() {
    
    return (
        <>
        <section >
        <div className="container " style={{marginTop:200, marginBottom:50}}>
            <div className="conatiner" >
                <h1 className='myName' style={{fontSize:"3.8rem"}}>  <span className="hii"> Hii</span>, there <br></br>I am Aditya</h1>
                <h1 style={{fontSize:"3.8rem" , fontFamily:'Alkatra'}}>Front End Web Developer </h1>
                <p className='container content-justify' style={{fontSize:"1.4rem", textAlign:"left" }}>
                    I am a tech enthusiast and daily learner.
                    I am passionate about coding and have a keen learner in the tech world which triggers me to give my 100% in my work.
                </p>
            </div>

        </div>

        <hr style={{ border: "dotted 6px rgb(253, 230, 230)", width:"10%", borderTop:"none", margin:"150px auto", }}/>
        </section>
        </>
    )
}

