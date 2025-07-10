import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carouselOverrides.css";
import { Carousel } from "react-responsive-carousel";
import { fetchBannersByPage } from "../../api/banner"; // adjust import as needed

interface Banner {
  id: number;
  title: string;
  image: string;
  page: string;
  status: string;
  description?: string;
  button_text?: string;
  button_link?: string;
}

interface Slide {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const fallbackSlides: Slide[] = [
  {
    src: "/img/whatsapp/lab2_img.jpg",
    alt: "Slide 2",
    caption: "Our Services",
    description:
      "Bridging tech, health, and education through software, hosting, telemedicine, AI, and IT consulting.",
    buttonText: "View Progress",
    buttonLink: "/progress",
  },
  {
    src: "/img/Banner/caurosel-2.jpg",
    alt: "Slide 1",
    caption: "Our Exam Lab",
    description:
      "Certified CBT lab offering secure and standardized testing services with advanced infrastructure.",
    buttonText: "Explore Lab",
    buttonLink: "/courses",
  },
  {
    src: "/img/whatsapp/HR_Office.jpg",
    alt: "HR Office",
    caption: "Our Office Space",
    description:
      "A glimpse into our modern office where innovation and collaboration meet. Meet our HR in action.",
    buttonText: "Meet Our Team",
    buttonLink: "/about",
  },
  {
    src: "/img/whatsapp/lab1_img.jpg",
    alt: "Slide 4",
    caption: "Our Operations",
    description:
      "Driven by ISO, GDPR, and national standards to ensure secure, high-quality, and reliable services.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const HomeBanner: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    async function loadSlides() {
      try {
        const data: Banner[] = await fetchBannersByPage("home");
        const active = data.filter((b) =>b.page === "home" && b.status === "active").slice(0, 4);

        if (active.length > 0) {
          const dynamicSlides: Slide[] = active.map((b) => ({
            src: b.image.startsWith("/storage/")
              ? `${BASE_URL}${b.image}`
              : `${BASE_URL}/storage/${b.image}`,
            alt: b.title,
            caption: b.title,
            description: b.description,
          }));

          setSlides(dynamicSlides);
        } else {
          setSlides(fallbackSlides);
        }
      } catch (error) {
        console.error("Failed to fetch banners. Using fallback slides.", error);
        setSlides(fallbackSlides);
      }
    }

    loadSlides();
  }, []);

  return (
    <div id="home-banner">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        swipeable
        emulateTouch
        stopOnHover={true}
        useKeyboardArrows
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.src} alt={slide.alt} className="carousel-image" />
            <div className="carousel-gradient">
              <div className="carousel-overlay">
                <div className="text-content">
                  {slide.caption && <h2>{slide.caption}</h2>}
                  {slide.description && <p>{slide.description}</p>}
                  {/* {slide.buttonText && slide.buttonLink && (
                    <a href={slide.buttonLink} className="carousel-button">
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
