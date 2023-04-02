import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

    function changeColorOver(e) {
        e.target.style.color = "#caa9e0"
    }
    function changeColorOut(e) {
        e.target.style.color = "white"
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >

                <Link className="navbar-brand mx-4" href="#">Aditya</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >

                        <li className="nav-item">
                            <Link className="nav-link mx-4" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-4" href="#">Tech</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-4" href="#">Contact</Link>
                        </li>
                    </ul>


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <Link className="nav-link mx-4" target="_blank" style={{ color: 'white' }} to="https://www.linkedin.com/in/adi2/"><i onMouseOut={changeColorOut} onMouseOver={changeColorOver} className="fa-brands fa-linkedin-in fa-beat-fade fa-xl"></i></Link>
                        </li>
                        <li className="nav-item ml-auto">
                            <Link className="nav-link mx-4" target="_blank" style={{ color: 'white' }}
                                to="https://github.com/Adi2895"><i onMouseOut={changeColorOut} onMouseOver={changeColorOver} className="fa-brands fa-github fa-beat-fade fa-xl"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
