import LabSection from "../../components/ProductSection";
import TestimonialSection from "../../components/TestimonialSection";
import ExamHeader from "../../components/ProductHeader";
// import ProductGallery from "../../components/ProductGallery";
import PartnersSection from "../../components/PartnersSection";

const products = () => {
  return (
    <div>
      <ExamHeader />
      <LabSection />
      {/* <ProductGallery/> */}
      <PartnersSection/>
      <TestimonialSection />
    </div>
  );
};

export default products;
