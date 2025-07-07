import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeBanner from "../../components/Banner/homeBanner";
import ServiceSection from "../../components/Service/ServiceSection";
import Categories from "../../components/Gallery";
import ProductSection from "../../components/Product/ProductSection";
// import TestimonialSection from "../../components/TestimonialComponent/TestimonialSection";
// import WhyUs from "../../components/WhyUs";
import PartnersSection from "../../components/PartnersSection";
import WeatherCard from "../../components/WeatherCard";
import SmarterAccordion from "../../components/FaqSection";
import WhyChooseUS from "../../components/WhyChooseUs";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="home-page">
      <HomeBanner />
      <div id="home-services">
        <ServiceSection />
      </div>
      <WhyChooseUS />
      <SmarterAccordion />
      {/* <WhyUs /> */}
      <ProductSection />
      <Categories />
      <PartnersSection />
      {/* <TestimonialSection /> */}
      <WeatherCard />
      {/* <ScrollToTopButton/> */}
    </div>
  );
};

export default Home;
