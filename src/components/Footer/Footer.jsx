import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <footer className="footer">

      {/* 🌊 WAVE BACKGROUND */}
      <div className="footer-wave">
        <img src={Wave} alt="footer wave" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="f-content">

        {/* 📧 EMAIL */}
        <a
          href="mailto:021biswajit@gmail.com"
          className="f-email"
        >
          021biswajit@gmail.com
        </a>

        {/* 🌐 SOCIAL ICONS */}
        <div className="f-icons">

          <a
            href="https://www.instagram.com/_biswajit_mahapatra_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Insta />
          </a>

          <a
            href="https://facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </a>

          <a
            href="https://github.com/itz-biswajit021"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>

        </div>

        {/* 🧑‍💻 COPYRIGHT / SIGNATURE */}
        <span className="f-copy">
          © {new Date().getFullYear()} Biswajit Mahapatra • All Rights Reserved
        </span>

      </div>
    </footer>
  );
};

export default Footer;