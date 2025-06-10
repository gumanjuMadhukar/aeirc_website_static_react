import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carouselOverrides.css";
import { Carousel } from "react-responsive-carousel";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const slides: Slide[] = [
  {
    src: "/img/carousel-1.jpg",
    alt: "Slide 1",
    caption: "Services",
    description: "Learn more about IELTS preparation with our expert tutors.",
    buttonText: "Explore Courses",
    buttonLink: "/courses",
  },
  {
    src: "/img/carousel-2.jpg",
    alt: "Slide 2",
    caption: "News",
    description: "Monitor your IELTS performance with personalized feedback.",
    buttonText: "View Progress",
    buttonLink: "/progress",
  },
  {
    src: "/img/course-1.jpg",
    alt: "Slide 3",
    caption: "Exams",
    description: "Access high-quality mock tests for all IELTS modules.",
    buttonText: "Start Test",
    buttonLink: "/mock-tests",
  },
  {
    src: "/img/course-2.jpg",
    alt: "Slide 4",
    caption: "Our Partners",
    description: "Connect with our support team for study guidance.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const HomeBanner: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        overflow: "hidden",
        position: "relative",
        margin: 0,
        padding: 0,
      }}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        swipeable
        emulateTouch
        useKeyboardArrows
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "80vh", 
              position: "relative",
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", 
                display: "block",
                margin: "0 auto",
                // backgroundColor: "#ffffff",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "80vh", 
                backgroundColor: "rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                paddingLeft: "40px",
                boxSizing: "border-box",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "80vh",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0 8rem",
                  boxSizing: "border-box",
                  color: "white",
                }}
              >
                <div
                  style={{
                    maxWidth: "600px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {slide.caption && (
                    <h2 style={{ fontSize: "2.5rem", margin: 0 }}>
                      {slide.caption}
                    </h2>
                  )}
                  {slide.description && (
                    <p style={{ fontSize: "1.1rem", margin: 0 }}>
                      {slide.description}
                    </p>
                  )}
                  {/* {slide.buttonText && slide.buttonLink && (
                    <a
                      href={slide.buttonLink}
                      style={{
                        backgroundColor: "#2563eb",
                        padding: "0.7rem 1.5rem",
                        borderRadius: "0.375rem",
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "600",
                        userSelect: "none",
                        fontSize: "1rem",
                        width: "fit-content",
                      }}
                    >
                      {slide.buttonText}
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBanner;
