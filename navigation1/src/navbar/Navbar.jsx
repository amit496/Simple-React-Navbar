import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ mode, setmode }) => {

    let toggletheme = () => {
        mode === "light" ? setmode('dark') : setmode('light');
    }

    return (
        <>
            <div className={`navcontainer ${mode}`}>
                <div className={`${mode === "light" ? "logo" : "logodark"}`}>
                    <h2><a href="#">Brand Name</a></h2>
                </div>

                <div className={`${mode === "light" ? "navbar" : "navbardark"}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>

                <div className={`${mode === "light" ? "searchcontainer" : "searchcontainer-dark"}`}>
                    <input type="search" name="search" id="search" className={`${mode === "light" ? "searchinput" : "searchinput-dark"}`}/>
                    <FaSearch  className={`${mode === "light" ? "searchicon" : "searchicon-dark"}`}  />
                </div>

                <div className="toggleicon">
                    {mode === "light" ? <FaMoon onClick={toggletheme} /> : <FaSun onClick={toggletheme} />}
                </div>
            </div>
        </>
    )
}
export default Navbar;
