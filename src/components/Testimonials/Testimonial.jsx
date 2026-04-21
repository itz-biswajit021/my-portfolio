import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [lines, setLines] = useState(4);

  // 📱 Responsive line control
  useEffect(() => {
    const updateLines = () => {
      if (window.innerWidth <= 640) {
        setLines(8); // mobile
      } else {
        setLines(4); // tablet + desktop
      }
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  const clients = [
    {
      img: profilePic1,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      rating: 5,
      review:
        "Working with Biswajit was an amazing experience. His ability to translate ideas into beautiful and functional interfaces is outstanding. The attention to detail, responsiveness, and performance optimization truly impressed me.",
    },
    {
      img: profilePic2,
      name: "Ananya Das",
      role: "UI/UX Designer",
      rating: 4,
      review:
        "The project execution was smooth and efficient. He has a strong understanding of design principles and implements them perfectly in development. Communication was clear and deadlines were met consistently.",
    },
    {
      img: profilePic3,
      name: "Amit Verma",
      role: "AI Engineer",
      rating: 5,
      review:
        "Highly skilled in AI and backend integration. The solutions provided were scalable and practical. I especially liked the way complex problems were simplified into elegant implementations.",
    },
    {
      img: profilePic4,
      name: "Sneha Roy",
      role: "Product Manager",
      rating: 5,
      review:
        "Professional, reliable, and extremely talented. The final product exceeded expectations and delivered real value. Would definitely collaborate again on future projects.",
    },
  ];

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="t-wrapper" id="testimonial">
      {/* HEADING */}
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "skyblue" }}
        ></div>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                {/* PROFILE */}
                <div className="testimonial-top">
                  <img src={client.img} alt={client.name} />

                  <div className="client-info">
                    <h4>{client.name}</h4>
                    <span>{client.role}</span>

                    {/* ⭐ RATING */}
                    <div className="rating">
                      {"★".repeat(client.rating)}
                      {"☆".repeat(5 - client.rating)}
                    </div>
                  </div>
                </div>

                {/* REVIEW */}
                <p
                  className={`testimonial-review ${
                    isExpanded ? "expanded" : ""
                  }`}
                  style={
                    !isExpanded
                      ? {
                          display: "-webkit-box",
                          WebkitLineClamp: lines,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }
                      : {}
                  }
                >
                  {client.review}
                </p>

                {/* READ MORE */}
                {client.review.length > 120 && (
                  <button
                    className="read-more-btn"
                    onClick={() => toggleReadMore(index)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;