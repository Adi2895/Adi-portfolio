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

                <Link className="navbar-brand" href="#">Aditya</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >

                        <li className="nav-item">
                            <Link className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Tech</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link " style={{ color: 'white' }} href="#"><i onMouseOut={changeColorOut} onMouseOver={changeColorOver} className="fa-brands fa-linkedin-in fa-beat-fade fa-xl"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " style={{ color: 'white' }}
                                href="#"><i onMouseOut={changeColorOut} onMouseOver={changeColorOver} className="fa-brands fa-github fa-beat-fade"></i></Link>
                        </li>
                    </ul>

                </div>
            </nav>


        </>
    )
}
