import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import jarvis from "../../img/JarvisAI.png";
import paint from "../../img/paint program.jpg";
import uber from "../../img/uber design.jpg";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
  spaceBetween={-80}
  slidesPerView={"auto"}
  centeredSlides={true}
  grabCursor={true}
  className="portfolio-slider"
  breakpoints={{
    0: {           // Mobile (0px to 639px)
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    640: {         // Tablet (640px to 767px)
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {         // Desktop (768px+)
      slidesPerView: "auto",
      spaceBetween: -80,
    },
  }}
>
  <SwiperSlide >
    <a href="https://github.com/your-username/sidebar-repo" target="_blank" rel="noopener noreferrer">
      <img src={jarvis} alt="Jarvis Project" />
    </a>
  </SwiperSlide>
  <SwiperSlide >
    <a href="https://github.com/itz-biswajit021/GesturePainting.git" target="_blank" rel="noopener noreferrer">
      <img src={paint} alt="Paint Project" />
    </a>
  </SwiperSlide>
  <SwiperSlide >
    <a href="https://www.figma.com/design/tykJxE8Khe61tdR2jwkdvk/UBER_LandingPage?node-id=0-1&t=TJcYo0tHasT0sMAX-1" target="_blank" rel="noopener noreferrer">
      <img src={uber} alt="UBER design" />
    </a>
  </SwiperSlide>
  <SwiperSlide >
    <a href="https://github.com/your-username/sidebar-repo" target="_blank" rel="noopener noreferrer">
      <img src={MusicApp} alt="Music App" />
    </a>
  </SwiperSlide>
  <SwiperSlide >
    <a href="https://github.com/your-username/sidebar-repo" target="_blank" rel="noopener noreferrer">
      <img src={HOC} alt="HOC Project" />
    </a>
  </SwiperSlide>
</Swiper>

    </div>
  );
};

export default Portfolio;
