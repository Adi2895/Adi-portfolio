import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact(props) {

    const [formsubmit, setFormsubmit] = useState(null);
    
    const formSubmitted = (e)=>{
        e.preventDefault();
        var empt = document.forms["form1"]["name"]["email"]["aboutProject"].value;
        if(empt == ""){
            alert("Please fill the form completely");
        } else {
        setFormsubmit("Thanks...🥰 We will contact you soon!");
        setTimeout(()=>{
            setFormsubmit(null);
        }, 2000)
    }
    }


    const goToTop = ()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (

        

        <>


            <section ref={props.contact}>
            <div style={{ marginBottom: "100px" }}>
                <div className='container' style={{ marginBottom: "80px" }}>
                    <h1 className='mx-auto get-in-touch' >Get in touch</h1>
                </div>

                <div className="container ">
                    <div className="row mx-auto">

                    {/* Social media icons */}

                    <div className="col-12 col-md-5 mx-2">
                        <div className="container container-app-email" >
                            <h4 style={{ color: "white", marginBottom: "3px" }}> <span><i className="fa-solid fa fa-envelope fa-xl" style={{ color: "orange", padding: "5px" }}></i> </span> Email ID </h4>
                            <div className="container sensitive" >
                                <Link className='clickable' style={{ textDecoration: "none", color: "blue" }} to="mailto:jangraaditya11@gmail.com?subject=What's your subject User?">jangraaditya11@gmail.com</Link>
                            </div>
                        </div>



                        <div className="container container-app-whatsapp">
                            <h4 style={{ color: "white", marginBottom: "2px" }}> <span><i className="fa-brands fa-whatsapp  fa-xl" style={{ color: "#20df69" }}></i></span> Whatsapp </h4>
                            <div className="container sensitive">
                                {/* <Link className='clickable'  style={{ textDecoration: "none" }} target='_blank' to="https://api.whatsapp.com/send?phone=8950620400">Click me → 8950620400</Link> */}
                                <Link className='clickable'  style={{ textDecoration: "none" }} target='_blank' to="https://wa.me/+918950620400">Click me → 8950620400</Link>
                            </div>
                        </div>



                        <div className="container container-for-linkedin" >
                        <div className="container sensitive">
                            <Link className='clickable' target="_blank" style={{ color: 'white', textDecoration: "none", fontSize: "20px", marginBottom: "50px" }} to="https://www.linkedin.com/in/adi2/"><i className="fa-brands fa-linkedin-in fa-xl mx-2" style={{color:"#a3a3e8"}}></i> Linkedin</Link>
                        </div>
                        </div>

                    </div>



                    {/* contact me  */}



                    <div className=" col-12 col-md-6 mx-2" >
                        <form className='clickable' name="form1" onSubmit={formSubmitted} style={{ color: "white" }} action="https://formsubmit.co/jangraaditya11@gmail.com" method='POST'>
                            <fieldset >
                                <legend style={{ color: "white" }}>Contact me </legend>


                                <div className="form-group ">
                                    <label htmlfor="exampleInputPassword1">Name</label>
                                    <input type="text" name='name' style={{marginBottom:"25px"}} className="form-control" id="exampleInputPassword1" placeholder="Enter Name" required/>
                                    <input type="hidden" name="_subject" value="Request for the project from adiportfolio website"></input>
                                    <input type="hidden" name="_captcha" value="false"></input>
                                    
                                </div>

                                <div className="form-group" >
                                    <label htmlfor="exampleInputEmail1">Email address</label>
                                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                                    <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlfor="exampleInputPassword1" style={{marginTop:"25px"}}>About project</label>
                                    <textarea name='aboutProject' type="text" className="form-control" id="exampleInputPassword1" placeholder="Write about your project" required/>
                                </div>
                                <button type="submit"  className="btn btn-primary my-3">Submit</button>

                            </fieldset>
                        </form>
                    </div>

                    </div>


                    <h4 style={{color:"white", paddingLeft:"35%", fontFamily:"'Cataraman, cursive'"}} className='mx-auto'>{formsubmit}</h4>
                    <div className="container mx-auto" style={{paddingLeft:"50%"}}>
                    <button onClick={goToTop} style={{fontFamily:"'Cataraman, cursive'", }} className=' btn btn-dark mx-auto rounded-circle '>
                    <i className="fa-solid fa-arrow-up fa-xl" style={{color: "#45eff2"}}></i>
                    </button>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}