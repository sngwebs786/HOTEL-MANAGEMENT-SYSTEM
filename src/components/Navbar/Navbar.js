import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";

function Navbar() {

    //navbar design
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    //navbar func

    //-------------------
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();


    async function handleLogout() {
        try {
            await logOut();
            navigate("/login");
        } catch {
            console.log("can't logut");
        }
    }

    //---------------


    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        SNG Hotels
                        {/* <i className="fas fa-code"></i> */}
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/rooms"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Rooms
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                        {!user ? (

                            <>
                                <li className="nav-item2">
                                    <NavLink
                                        exact
                                        to="/login"
                                        activeClassName="active"
                                        className="nav-links login-and-signup-btn login-btn"
                                        onClick={handleClick}
                                    >
                                        Log In
                                    </NavLink>
                                </li>
                                <li className="nav-item2">
                                    <NavLink
                                        exact
                                        to="/signup"
                                        activeClassName="active"
                                        className="nav-links login-and-signup-btn signup-btn"
                                        onClick={handleClick}
                                    >
                                        Sign Up
                                    </NavLink>
                                </li>
                            </>
                        ) : (

                            <>
                                <li className="nav-item2">
                                    <NavLink
                                        exact
                                        to="/mybookings"
                                        activeClassName="active"
                                        className="nav-links login-and-signup-btn bookings-btn"
                                        onClick={handleClick}
                                    >
                                        Bookings
                                    </NavLink>
                                </li>
                                <li className="nav-item2">
                                    <NavLink
                                        exact
                                        to="/signup"
                                        activeClassName="active"
                                        className="nav-links login-and-signup-btn logout-btn"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </NavLink>
                                </li>
                            </>

                        )}


                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;