import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// EXISTING PROJECT IMAGES
import coffee from "../../img/coffeeUI.png";
import paint from "../../img/paint program.jpg";
import uber from "../../img/uber design.jpg";
import can from "../../img/COFFEE CAN.png";
import cup from "../../img/COFFEEcup.png";

// NEW PROJECT IMAGES
import hateSpeech from "../../img/hate-speech.png";
import interview from "../../img/interview.png";
import faq from "../../img/faq_chatbot.png";
import grievance from "../../img/grievance.png";

import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [

    {
      img: interview,
      title: "AI Interview Platform",
      desc: "A full-stack AI-driven interview ecosystem that enables real-time interview simulation, AI-based HR evaluation (speech, emotion, face analysis), and examiner-controlled assessments with detailed performance analytics.",
      tags: ["AI", "Machine Learning", "Flask", "Web App", "Full-Stack System", "NLP"],
      link: "https://github.com/itz-biswajit021/AI_Interview_platform.git",
    },

    {
      img: hateSpeech,
      title: "Hate Speech Detection",
      desc: "A hybrid NLP system that detects hate speech, offensive, and clean text using ML, DL, and BERT models with lexicon fusion, real-time analysis, and interactive visualization dashboard.",
      tags: ["AI/ML", "NLP", "BERT", "CNN", "LSTM", "SVM", "Logistic Regression", "Lexicon Fusion", "Flask", "React", "Google Colab"],
      link: "https://github.com/itz-biswajit021/hate-speech.git",
    },

     {
      img: grievance,
      title: "Citizen Complaint & Grievance Analyzer",
      desc: "AI/ML-powered NLP system that analyzes citizen complaints, classifies them using TF-IDF + Logistic Regression, and automatically maps them to relevant departments with a real-time Streamlit dashboard and MySQL logging.",
      tags: ["AI/ML", "NLP", "Logistic Regression", "TF-IDF", "Streamlit", "MySQL", "Google Colab"],
      link: "https://github.com/itz-biswajit021/citizen-grievance-analyzer.git",
    },

    {
      img: faq,
      title: "Hybrid Banking FAQ Chatbot",
      desc: "An AI-powered banking chatbot that combines intent classification and FAQ similarity matching to deliver accurate, real-time responses using NLP and machine learning.",
      tags: ["AI/ML", "NLP", "Chatbot", "TF-IDF", "Neural Network", "Cosine Similarity", "Flask API", "JavaScript", "Google Colab"],
      link: "https://github.com/itz-biswajit021/banking_faq_chatbot.git",
    },

    {
      img: coffee,
      title: "Coffee E-commerce Mobile App UI/UX",
      desc: "A mobile UI/UX design for a coffee-focused e-commerce app, featuring product browsing, detailed product pages, and a smooth checkout flow with a clean and conversion-driven interface.",
      tags: ["UI/UX", "Mobile App", "Figma", "E-commerce", "Product Design", "User Flow", "Wireframing", "Prototyping"],
      link: "https://www.figma.com/design/E7Gj6rvGqlQOdECqFIbaNN/CoffeeCart?node-id=0-1&t=ej6LBfznLIsJmyBr-1",
    },

    {
      img: paint,
      title: "Virtual Paint",
      desc: "A gesture-controlled painting app using OpenCV that lets users draw in real-time without touching the screen.",
      tags: ["Python", "OpenCV", "AI"],
      link: "https://github.com/itz-biswajit021/GesturePainting.git",
    },

    {
      img: cup,
      title: "Coffee Branding",
      desc: "Modern UI-based branding project focused on product design, color theory, and visual identity creation.",
      tags: ["UI/UX", "Design"],
      link: "https://www.canva.com/design/DAGk_NTxauw/kDApDdQoaOIhXQ901yCQ2w/edit",
    },

    {
      img: uber,
      title: "Uber UI",
      desc: "Landing page redesign for Uber with a clean UI approach and improved user experience using Figma.",
      tags: ["Figma", "UI Design"],
      link: "https://www.figma.com/design/tykJxE8Khe61tdR2jwkdvk/UBER_LandingPage",
    },

    {
      img: can,
      title: "Packaging Design",
      desc: "Creative packaging design for coffee products focusing on branding consistency and modern aesthetics.",
      tags: ["Branding", "Design"],
      link: "https://www.canva.com/design/DAGlEs8YDeY/qUJb4QsqX7uveZqTziccPw/edit",
    },
    
  ];

  return (
    <div className={`portfolio ${darkMode ? "dark" : ""}`} id="portfolio">
      {/* HEADINGS */}
      <span style={{ color: darkMode ? "white" : "" , fontSize: "2.3rem", fontWeight: "600" }}>
        Recent Projects
      </span>
      <span style={{ fontSize: "1.8rem", fontWeight: "600" }}>
        Portfolio
      </span>

      {/* ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ width: "100%" }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          speed={800}
          className="portfolio-slider"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            900: { slidesPerView: "auto", spaceBetween: 30 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="slide-wrapper">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <div className="project-card">

                    {/* 🔢 PROJECT NUMBER */}
                    <span className="project-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* IMAGE */}
                    <div className="project-image">
                      <img src={project.img} alt={project.title} />
                    </div>

                    {/* CONTENT */}
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                    </div>

                    {/* 🔥 TAGS INSIDE (NON-SCALING LAYER) */}
                    <div className="project-tags-layer">
                      {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>

                  </div>
                </a>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Portfolio;