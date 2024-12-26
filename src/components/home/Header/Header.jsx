import React, { useEffect, useRef, useState } from "react";
//import "../../../assets/css/";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaTimes, FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 667);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div id="preloader"></div>

    <header>
      <nav className="navbar navbar-dark navbar-expand-lg navbar-togglable fixed-top">
        <div className="container">
          
          {/*<!-- Navbar brand (mobile) -- */}
          <Link to="/" className="navbar-brand d-lg-none">
            Touché
          </Link>
          {/* Brand Name / Logo */}
          
          {/*<!-- Navbar toggler -- */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

  
          {/*<!-- Navbar collapse -- */}
          <div className="collapse navbar-collapse">
            {/*<!-- Navbar nav -- */}
            <ul className="flex flex-col gap-2 space-x-8 navbar-nav">
              <div className="nav-item"><Link to="/about" className="nav-link"> About Us </Link></div>
              <div className="nav-item"><Link to="/menu" className="nav-link">Menu </Link></div>
              <div className="nav-item"><Link to="/news" className="nav-link"> News & Events </Link></div>
            </ul>
  
            {/*<!-- Navbar brand -- */}
            <Link to="/" className="navbar-brand d-none d-lg-flex mx-lg-auto">
              Touché
            </Link>
  
            {/*<!-- Navbar nav -- */}
            <ul className="flex items-center navbar-nav">
              <div className="nav-item"><Link to="/gallery" className="nav-link">Gallery </Link></div>
              <div className="nav-item"><Link to="/book" className="nav-link">Reservation </Link></div>
              <div className="nav-item"><Link to="/contact" className="nav-link"> Contact </Link></div>
            </ul>
          </div>

          {/* Mobile Menu Button */}
            
          
        </div>
      </nav>
      
    </header>
    </>
  );
};

export default Header;
