import Categories from '../../components/Categories'
import LabSection from '../../components/LabSection'
import TestimonialSection from '../../components/TestimonialSection'
import ExamHeader from '../../components/ExamLabHeader'

const exam = () => {
  return (
    <div>
      <ExamHeader/>
      <Categories/>
      <LabSection/>
      <TestimonialSection/>
    </div>
  )
}

export default exam
