import React from "react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Btc_homes_logo from "../Assets/Images/Btc_homes_logo.png";
import Fade from "react-reveal/Fade";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../Utils/StateProvider";
import { auth } from "../Firebase/Firebase";

function Navbar() {
  let navigate = useNavigate();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="navbar">
      <Fade top distance="20%" duration={2000}>
        <header>
          <img src={Btc_homes_logo} className="logo_img" />

          <div className="navLink">
            <nav ref={navRef}>
              <a href="#home" onClick={showNavbar}>
                Home
              </a>
              <a href="#about" onClick={showNavbar}>
                AboutUs
              </a>
              <a href="#services" onClick={showNavbar}>
                Services
              </a>
              <a href="#foodMenu" onClick={showNavbar}>
                FoodMenu
              </a>
              <a href="#rooms" onClick={showNavbar}>
                Rooms
              </a>
              <a href="#contact" onClick={showNavbar}>
                ContactUs
              </a>

              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </nav>
          </div>

          <div onClick={handleAuthentication} className="Header_user">
            <Link to={!user && "/Login"}>
              <div className="user">
                <span onClick={() => navigate("/Login")}>
                  <div className="signIn_signOut">
                    {!user ? "Sign In" : "Sign Out"}
                  </div>
                </span>
              </div>
            </Link>

            <button className="nav-btn " onClick={showNavbar}>
              {<FaBars />}
            </button>
          </div>
        </header>
      </Fade>
    </div>
  );
}

export default Navbar;
