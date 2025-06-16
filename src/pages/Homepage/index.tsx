// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import HomeBanner from "../../components/Banner/homeBanner";
import ServiceSection from "../../components/ServicePageComponent/ServiceSection";
import Categories from "../../components/Categories";
import ProductSection from "../../components/ProductSection";
// import TeamSection from "../../components/TeamSection";
import TestimonialSection from "../../components/TestimonialSection";
import WhyUs from "../../components/WhyUs";
import PartnersSection from "../../components/PartnersSection";
// import ScrollToTopButton from "../../components/ScrollToTopButton";

// import About from "../../components/About";

const Home = () => {
  return (
    <div id="home-page">
      <HomeBanner />
      <ServiceSection />
      <WhyUs/>
      {/* <About/> */}
      <Categories />
      <ProductSection />
      {/* <TeamSection/> */}
      <PartnersSection/>
      <TestimonialSection />
      {/* <ScrollToTopButton/> */}
    </div>
  );
};

export default Home;
