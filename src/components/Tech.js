import React from 'react'
import frontend from "./static/frontend.jpeg"
export default function Tech(props) {
    

    return (
        <>

        
        <div ref ={props.tech} className='container unclickable' >
            <h1 className="my-4" style={{ fontSize: "3rem", fontFamily:"Alkatra" }}>Technologies</h1>
            <p className='container' style={{ fontSize: "1.4rem", textAlign:"left", marginBottom:"40px" }}>
            
            <p>In my tech section, I proudly showcase my proficiency in the
             MERN stack. As a full-stack developer, 
             I have expertise in both front-end and back-end technologies.
             </p>
             
             <br/>
             <div className='container row d-flex'>
            <div className='container container-for-frontendimg col-md-5 col-lg-5 col-sm-12 grow'>
             <img className="frontend-img mb-2" src='https://media.istockphoto.com/id/1304912525/vector/javascript-front-end-developing.jpg?s=612x612&w=0&k=20&c=OD4CZ_f61zru2-OeTCujzxJjxDucGgkMxthDIZ_mBcs='  alt=""/>
             </div>
             <p className='frontend-description col-md-7 col-lg-7 col-sm-12'> For front-end development, I rely on the power of React.js, 
             a popular JavaScript library. With React.js, I can create interactive and dynamic user interfaces that
               provide an exceptional user experience. 
               To enhance the visual appeal and responsiveness of my 
               projects, I leverage Bootstrap, a widely-used CSS 
               framework.
               </p>
               </div>
             <br/>

             <div className='container row d-flex'>  
            <p>
             On the back-end side, I rely on the power of Node.js and Express.js. 
             These frameworks enable me to build efficient and scalable server-side 
             applications. Leveraging the event-driven, non-blocking nature of Node.js,
              I can handle a large number of concurrent requests while ensuring optimal 
              performance. Express.js, with its simplicity and robust features, 
              allows me to create RESTful APIs and handle various backend functionalities with ease.
              </p>
              </div>
            
             <br/>
             <div className='container row d-flex'>
             <p className='frontend-description col-md-7 col-lg-7 col-sm-12'>
             For data storage and management, I rely on MongoDB, a powerful NoSQL database. 
             MongoDB's flexibility and scalability make it an excellent choice 
             for handling complex data structures and accommodating future growth. 
             I can seamlessly interact with MongoDB using Mongoose,
              an elegant object data modeling library for Node.js.
              </p>
             <div className='container container-for-frontendimg col-md-5 col-lg-5 col-sm-12 grow'>
             <img className="frontend-img mb-2" src='https://cdn.dribbble.com/users/1698250/screenshots/8270664/media/f5953af29e2df772840107899769f01a.jpg'  alt=""/>
             </div>
             
            </div>
              <br/>
          
              <div className='container row d-flex'>
             <p>
             As a developer who loves challenges, I thoroughly enjoy solving data structure 
             and algorithmic problems. I usually participate in coding contests,
             where I apply my problem-solving skills to come up with 
             efficient and elegant solutions. These experiences enhance my
              analytical thinking and sharpen my ability to tackle complex programming 
              challenges.
              </p>
              </div>
            </p>
        </div>


            <div className="container row mx-auto" >
                {/* ist */}
                <div className="col-sm-12l-md-6 col-lg-4 my-3 grow">
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
