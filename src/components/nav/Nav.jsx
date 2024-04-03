import React, { useRef, useState } from "react";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [show, setShow] = useState(false);
  return (
    <div className="con-tent">
      <h3>
        Healthyfi<span>Me</span>
      </h3>
      <nav ref={navRef}>
        <a href="/" onClick={hideNavbar}>
          Home
        </a>
        <a href="/oncampus" onClick={hideNavbar}>
          On Campus
        </a>
        <a href="/offcampus" onClick={hideNavbar}>
          Off Campus
        </a>
        <a href="/resources" onClick={hideNavbar}>
          Resources
        </a>
        <a href="/contact" onClick={hideNavbar}>
          Contact Us
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Nav;
