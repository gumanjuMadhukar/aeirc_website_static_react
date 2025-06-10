// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import HomeBanner from "../../components/Banner/homeBanner";
import ServiceSection from "../../components/ServiceSection";
import Categories from "../../components/Categories";
import LabSection from "../../components/ProductSection";
// import TeamSection from "../../components/TeamSection";
import TestimonialSection from "../../components/TestimonialSection";
// import About from "../../components/About";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ServiceSection />
      {/* <About/> */}
      <Categories />
      <LabSection />
      {/* <TeamSection/> */}
      <TestimonialSection />
    </div>
  );
};

export default Home;
