// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import HomeBanner from "../../components/Banner/homeBanner";
import ServiceSection from "../../components/ServiceSection";
import Categories from "../../components/Categories";
import LabSection from "../../components/ProductSection";
// import TeamSection from "../../components/TeamSection";
import TestimonialSection from "../../components/TestimonialSection";
import WhyUs from "../../components/WhyUs";
import PartnersSection from "../../components/PartnersSection";
// import About from "../../components/About";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ServiceSection />
      <WhyUs/>
      {/* <About/> */}
      <Categories />
      <LabSection />
      {/* <TeamSection/> */}
      <PartnersSection/>
      <TestimonialSection />
    </div>
  );
};

export default Home;
