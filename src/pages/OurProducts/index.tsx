import Categories from "../../components/Categories";
import LabSection from "../../components/ProductSection";
import TestimonialSection from "../../components/TestimonialSection";
import ExamHeader from "../../components/ProductHeader";

const products = () => {
  return (
    <div>
      <ExamHeader />
      <LabSection />
      <Categories />
      <TestimonialSection />
    </div>
  );
};

export default products;
