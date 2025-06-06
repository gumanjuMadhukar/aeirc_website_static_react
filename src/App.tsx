import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ExamLabs from "./pages/ExamLabs";
import OurTeam from "./pages/OurTeam";
import TestimonialPage from "./pages/TestimonialPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
// import Navbar from "./components/navbar";
import Navbar from "./components/NavigationBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./js/main.js";
import "./styles/style.css";
import FooterSection from "./components/FooterSection";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/exam" element={<ExamLabs />}/>
        <Route path="/team" element={<OurTeam />}/>
        <Route path="/Testimonial" element={<TestimonialPage />}/>
        <Route path="/404" element={<NotFoundPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
      <FooterSection/>
    </BrowserRouter>
  );
}

export default App;
