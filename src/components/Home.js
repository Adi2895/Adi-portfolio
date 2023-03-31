

import React from 'react'

export default function Home() {
    return (
        <>
        <div className="row">
        <div className="container col-md-6" style={{marginTop:260, marginLeft:100}}>
            <div className="conatiner" >
                <h1 className='myName' style={{fontSize:60}}>Hii, there <br></br>I am Aditya</h1>
                <h1 style={{fontSize:60 , fontFamily:'Alkatra'}}>Front End Web Developer </h1>
                <p style={{fontSize:25, textAlign:"left"}}>
                    I am a tech enthusiast and daily learner.
                    I am very passionate towards my work and work with my 100% 
                    of potential.
                </p>
            </div>

        </div>
        </div>

        <hr style={{border: "dotted 6px #000", width:"10%", borderTop:"none", margin:"30px auto"}}/>
        </>
    )
}

