import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">BISWAJIT</div>
        <Toggle />
      </div>

      {/* hamburger icon */}
      <div
        className="n-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* right */}
      <div className={`n-right ${menuOpen ? "active" : ""}`}>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Testimonial
              </Link>
            </li>
          </ul>
        </div>

        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;