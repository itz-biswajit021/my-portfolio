import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">

      {/* LEFT SIDE */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          My Awesome
        </span>
        <span>Services</span>

        <span>
          I build <b>end-to-end intelligent systems</b> by integrating 
          <b> UI/UX design</b>, <b>full-stack development</b>, and 
          <b>AI-driven solutions</b> to deliver impactful, real-world applications.
          <br /><br />

          • UI/UX Design using <b>Figma</b> with a focus on clean, user-centric interfaces <br />
          • Responsive Frontend Development using <b>React</b>, <b>JavaScript</b>, HTML & CSS <br />
          • Backend & API Development using <b>Flask</b>, <b>MongoDB</b>, and <b>MySQL</b> <br />
          • Applied <b>Machine Learning & NLP</b> for intelligent automation and data-driven systems <br />
          • Secure, scalable, and performance-optimized applications with real-world deployment focus
        </span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="cards">

        {/* DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading="DESIGN"
            detail="User-centric UI/UX design focused on intuitive layouts and seamless experiences, using Figma and Canva to create clean, responsive, and visually engaging interfaces."
          />
        </motion.div>

        {/* FRONTEND */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="FRONTEND"
            detail="Building responsive, high-performance web applications using React, JavaScript, HTML, and CSS, with modern UI practices, smooth interactions, and seamless integration with backend APIs and real-time features."
          />
        </motion.div>

        {/* PYTHON */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading="PYTHON"
            detail="Developing backend systems, automation tools, and AI/ML-driven applications using Python, including Flask APIs, NLP models, data analysis, and scalable solutions for real-world intelligent systems."
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;