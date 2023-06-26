import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar(props) {

    

    function changeColorOver(e) {
        e.target.style.color = "#caa9e0"
    }
    function changeColorOut(e) {
        e.target.style.color = "white"
    }

    
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <NavLink onClick={props.handleClick} className="navbar-brand mx-3" href="/">Aditya Jangra</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >

                        <li className="nav-item">
                            <NavLink onClick={props.homeHandle} className="nav-link mx-3" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={props.techHandle} className="nav-link mx-3" to="/" >Technology</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={props.contactHandle} className="nav-link mx-3" to="/" >Contact</NavLink>
                        </li>
                    </ul>


                    <ul className="navbar-nav" >
                        <li className="nav-item ml-auto">
                            <NavLink className="nav-link mx-3" target="_blank" style={{ color: 'white' }} 
                            to="https://www.linkedin.com/in/adi2/"><i onMouseOut={changeColorOut} onMouseOver={changeColorOver} className="fa-brands fa-linkedin-in fa-beat-fade fa-xl"></i></NavLink>
                        </li>
                        <li className="nav-item ml-auto">
                            <NavLink className="nav-link mx-3" target="_blank" style={{ color: 'white' }}
                                to="https://github.com/Adi2895"><i onMouseOut={changeColorOut} onMouseOver={changeColorOver} className="fa-brands fa-github fa-beat-fade fa-xl"></i></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
