import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeBanner from "../../components/Banner/homeBanner";
import ServiceSection from "../../components/Service/ServiceSection";
import Categories from "../../components/Gallery";
import ProductSection from "../../components/Product/ProductSection";
// import TestimonialSection from "../../components/TestimonialComponent/TestimonialSection";
import WhyUs from "../../components/WhyUs";
import PartnersSection from "../../components/PartnersSection";
import WeatherCard from "../../components/WeatherCard";

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
      <WeatherCard />
      <div id="home-services">
        <ServiceSection />
      </div>
      <WhyUs />
      <Categories />
      <ProductSection />
      <PartnersSection />
      {/* <TestimonialSection /> */}
      {/* <ScrollToTopButton/> */}
    </div>
  );
};

export default Home;
