import LabSection from "../../components/ProductRelatedComponent/ProductSection";
import TestimonialSection from "../../components/TestimonialComponent/TestimonialSection";
import ExamHeader from "../../components/ProductRelatedComponent/ProductHeader";
// import ProductGallery from "../../components/ProductGallery";
import PartnersSection from "../../components/PartnersSection";

const products = () => {
  return (
    <div id="product-page">
      <ExamHeader />
      <LabSection />
      {/* <ProductGallery/> */}
      <PartnersSection />
      <TestimonialSection />
    </div>
  );
};

export default products;
