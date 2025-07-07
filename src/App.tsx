import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
import Navbar from "./components/Nav/NavigationBar";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import OurTeam from "./pages/OurTeam";
import TestimonialPage from "./pages/TestimonialPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import Details from "./pages/ServicePage/Detail";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FooterSection from "./components/FooterSection";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./js/main.js";
import "./styles/style.css";
import "./styles/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/team" element={<OurTeam />} />
        <Route path="/Testimonial" element={<TestimonialPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/:id" element={<Details />} />
        <Route path="/ServiceDetails/:id" element={<Details />} />
      </Routes>
      <ScrollToTopButton/>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
