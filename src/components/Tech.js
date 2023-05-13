import React from 'react'

export default function Tech(props) {
    

    return (
        <>

        
        <div ref ={props.tech} className='container unclickable' >
            <h1 className="my-4" style={{ fontSize: "3rem", fontFamily:"Alkatra" }}>Technologies</h1>
            <p className='container' style={{ fontSize: "1.4rem", textAlign:"left", marginBottom:"40px" }}>
                My tech stack is MERN Stack. I am proficient in HTML/CSS as well. If We talk about Backend-part 
                I use Node.js, Express.js and for front end-part I use React.js. Additionally I use Bootstrap 
                framework.In databases I am good at MongoDB.
                I also love to solve data structure and algorithimic 
                problems because they involves logic and usually take part in coding contest.
            </p>
        </div>


            <div className="container row mx-auto" >
                {/* ist */}
                <div className="col-sm-12 col-md-6 col-lg-4 my-3 grow">
                    <div className="card" style={{width: "16rem", height:"12rem"}}>
                        <div className="card-body mx-auto">
                            <h5 style={{color:"#72acbe"}} className="card-title"> <span><i  className="fa-brands fa-react fa-spin fa-xl"></i></span> Front-End</h5>
                            <ul >                      
                                <li className='card-text'>React.js</li>
                                <li className='card-text'>HTML</li>
                                <li className='card-text'>CSS</li>
                                <li className='card-text'>Bootstrap</li>                          
                            </ul>
                        </div>
                    </div>
                </div>


                {/* 2nd  */}

                <div className="col-sm-12 col-md-6 col-lg-4 my-3 grow">
                    <div className="card" style={{width: "16rem",height:"12rem"}}>
                        <div className="card-body mx-auto">
                            <h5 style={{color:"#72acbe"}} className="card-title"> <span><i className="fa-brands fa-dev fa-beat-fade fa-xl"></i></span> Backend-End</h5>
                            <ul >
                                <li className='card-text'>Node.js</li>
                                <li className='card-text'>Express.js</li>
                                <li className='card-text'>API</li>                       
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3rd */}


                <div className="col-sm-12 col-md-6 col-lg-4 my-3 grow">
                    <div className="card" style={{width: "16rem", height:"12rem"}}>
                        <div className="card-body mx-auto">
                            <h5 style={{color:"#72acbe"}} className="card-title"> <span><i className="fa-solid fa-database fa-beat-fade fa-xl"></i></span> DataBases</h5>
                            <ul >
                                <li className='card-text'>MongoDB</li>                         
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "dotted 6px rgb(253, 230, 230)", width:"10%", borderTop:"none", margin:"150px auto", }}/>
            
        </>
    )
}
