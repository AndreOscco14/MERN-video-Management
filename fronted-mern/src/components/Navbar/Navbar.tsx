import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/">MyVideos</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to={"/new-video"}>Añadir Video</NavLink>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li> */}
            </ul>
            </div>
        </div>
</nav>
        </div>
    )
}

export default Navbar