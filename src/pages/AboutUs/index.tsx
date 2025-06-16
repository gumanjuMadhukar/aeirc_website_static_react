import AboutHeader from "../../components/AboutPageComponent/AboutHeader";
import ServiceSection from "../../components/ServicePageComponent/ServiceSection";
import About from "../../components/AboutPageComponent/About";
import TeamSection from "../../components/TeamSection";
import WhyUs from "../../components/WhyUs";
import PartnersSection from "../../components/PartnersSection";

const AboutUs = () => {
  return (
    <div id="about_us-page">
      <AboutHeader />
      <About />
      <WhyUs />
      <ServiceSection />
      <PartnersSection />
      <TeamSection />
    </div>
  );
};

export default AboutUs;
