import React from 'react'
import {Link} from 'react-router-dom'
export default function footer() {


    function mouseover(e) {
        e.target.style.color = "green"
    }

    function mouseout(e) {
        e.target.style.color = "white"
    }

    return (
        <>

            <div className='' style={{ backgroundColor: "black", paddingTop:"10%", textAlign:"center", height: "300px", display: "block" }} >

                <div className="social-icons" >

                    <Link to= "https://www.linkedin.com/in/adi2/" target='_blank' style={{ textDecoration: "none" }}>
                        <i onMouseOver={mouseover} onMouseOut={mouseout} style={{ color: "white" }} className="fab fa-linkedin fa-xl mx-2"></i>
                    </Link>

                    <Link to= "https://twitter.com/AdityaJ1715144" target='_blank' style={{ textDecoration: "none" }}>
                        <i onMouseOver={mouseover} onMouseOut={mouseout} style={{ color: "white" }} className="fab fa-twitter fa-xl mx-2"></i>
                    </Link>

                    <Link to= "https://www.instagram.com/adityajangra4/" target='_blank' className="social-icon" style={{ textDecoration: "none" }}>
                        <i onMouseOver={mouseover} onMouseOut={mouseout} className="fab fa-instagram fa-xl mx-2"></i>


                    </Link>

                    <h4 style={{ color: "white", fontSize: "0.9rem", letterSpacing: "4px", paddingTop: "20px" }} className="footer-text">
                        ©<span id="date">2023</span>
                        <span className="company"><Link to= "/" style={{ textDecoration: "none" }} target="_blank"> ADITYA </Link></span>
                        ALL RIGHTS RESERVED
                    </h4>
                </div>
            </div>

        </>
    )
}