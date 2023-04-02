import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    
    return (

        <>
        <div style={{marginBottom:"100px"}}>
            <div className='container' style={{marginBottom:"80px"}}>
                <h1 className='mx-auto' style={{ fontSize:"3.8rem" , fontFamily:"Alkatra"}}>Get in touch</h1>
            </div>

            <div className="container row mx-auto">
                <div className="col-sm mx-2">
                    <div className="container " style={{textAlign:"center" , marginBottom:"70px" , backgroundColor:"#110a0a", borderRadius:"10px", height:"90px" , paddingTop:"15px"}}>
                    <h4 style={{ color: "white", marginBottom: "3px" }}> <span><i className="fa-solid fa-comment-sms fa-beat fa-xl" style={{ color: "#20df69", padding: "5px" }}></i> </span> Gmail ID </h4>
                    <div className="container" >
                        <Link style={{ textDecoration: "none" , color:"blue" }} to="mailto:jangraaditya11@gmail.com?subject=What's your subject User?">jangraaditya11@gmail.com</Link>
                    </div>
                    </div>



                    <div className="container" style={{textAlign:"center" , marginBottom:"70px" , backgroundColor:"#110a0a", borderRadius:"10px", height:"90px" , paddingTop:"15px"}}>
                    <h4 style={{ color: "white", marginBottom: "2px" }}> <span><i className="fa-brands fa-whatsapp fa-beat-fade fa-xl" style={{ color: "#20df69" }}></i></span> Whatsapp NO: </h4>
                    <div className="container"  >
                        <Link style={{ textDecoration: "none" }} target='_blank' to="https://api.whatsapp.com/send?phone=8950620400">Click me → 8950620400</Link>
                    </div>
                    </div>



                    
                    <div className="container" style={{textAlign:"center" , marginBottom:"70px" , backgroundColor:"#110a0a", borderRadius:"10px", height:"50px" , paddingTop:"10px"}} >
                    <Link target="_blank" style={{ color: 'white', textDecoration: "none", fontSize: "20px", marginBottom:"50px" }} to="https://www.linkedin.com/in/adi2/"><i className="fa-brands fa-linkedin-in fa-beat-fade fa-xl mx-2"></i> Linkedin</Link>
                    </div>
                    
                </div>


                <div className="col-sm mx-2" >
                    <fieldset className="scheduler-border" style={{ border:"solid white"}}>
                        <legend  className="scheduler-border" style={{color:"white"}}>Contact me for your Project</legend>
                    <form style={{color:"white"}}>

                    <div className="form-group ">
                            <label htmlfor="exampleInputPassword1">Name</label>
                            <input type="text" className="form-control my-3" id="exampleInputPassword1" placeholder="Enter Name"/>
                        </div>

                        <div className="form-group" >
                            <label  htmlfor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlfor="exampleInputPassword1">About project</label>
                            <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Write about your project"/>
                        </div>                       
                        <button type="submit" className="btn btn-primary my-2">Submit</button>
                    </form>
                    </fieldset>
                </div>

            </div>
            </div>
        </>

    )
}