import React, { useContext, useEffect, useState } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boyy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // Theme
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // ================= TYPING LOOP =================
  const fullName = "Biswajit Mahapatra";

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const newText = fullName.substring(0, index + 1);
        setText(newText);
        setIndex(index + 1);

        if (newText === fullName) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const newText = fullName.substring(0, index - 1);
        setText(newText);
        setIndex(index - 1);

        if (newText === "") {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullName]);

  // ================= DYNAMIC ROLES =================
  const roles = [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "UI/UX Designer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="Intro" id="Intro">

      {/* LEFT */}
      <motion.div
        className="i-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div
          className="i-name"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >

          {/* Hi */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{ color: darkMode ? "white" : "" }}
          >
            Hi, I'm
          </motion.span>

          {/* NAME */}
          <motion.span
            className="typing-name"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="word">
                {word.split("").map((char, i) => (
                  <span key={i} className="glow-letter">
                    {char}
                  </span>
                ))}
                {wordIndex !== text.split(" ").length - 1 && (
                  <span className="space"> </span>
                )}
              </span>
            ))}
            <span className="cursor">|</span>
          </motion.span>

          {/* ROLE */}
          <motion.span
            className="dynamic-role"
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {roles[roleIndex]}
          </motion.span>

          {/* DESCRIPTION */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I design and develop <b>end-to-end intelligent applications</b> by combining 
            <b> modern web technologies</b> with <b>AI/ML solutions</b>. Using <b>React</b>, 
            <b> Flask</b>, and <b>Python</b>, I build scalable, responsive systems—from 
            intuitive user interfaces to deployed machine learning models—focused on 
            solving real-world problems with performance, security, and clean design.
          </motion.span>
        </motion.div>

        {/* BUTTON */}
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire Me</button>
        </Link>

        {/* SOCIAL ICONS */}
        <div className="i-icons">
          <a
            href="https://github.com/itz-biswajit021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/biswajit-mahapatra-6231a8293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>

          <a
            href="https://www.instagram.com/_biswajit_mahapatra_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </motion.div>

      {/* RIGHT */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="DESIGNER" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="DEVELOPER" />
        </motion.div>

        {/* BLURS */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;