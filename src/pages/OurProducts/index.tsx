import LabSection from "../../components/ProductSection";
import TestimonialSection from "../../components/TestimonialSection";
import ExamHeader from "../../components/ProductHeader";
import ProductGallery from "../../components/ProductGallery";

const products = () => {
  return (
    <div>
      <ExamHeader />
      <LabSection />
      <ProductGallery/>
      <TestimonialSection />
    </div>
  );
};

export default products;
