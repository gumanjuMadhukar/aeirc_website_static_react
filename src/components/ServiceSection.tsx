import { Link } from "react-router-dom";
import { services } from "../pages/ServicePage/servicesData";

const ServiceSection = () => {
  return (
    <div className="container-xxl py-5 ">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Services Provided By AEIRC</h1>
        </div>
        <div className="row g-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 wow fadeInUp "
              // data-wow-delay={service.delay}
            >
              <Link
                to={`/ServiceDetails/${service.id}`}
                style={{ textDecoration: "none" }}
              >
                <a>
                  <div
                    className="service-item service-hover text-center pt-3 h-[350px] flex flex-col justify-between p-4 shadow-md rounded-lg transition duration-300"
                    style={{ height: "350px" }}
                  >
                    <div className="p-4 ">
                      <i
                        className={`fa fa-3x ${service.icon} text-dark mb-4`}
                      ></i>

                      <h5 className="mb-3 text-dark">{service.title}</h5>
                      <p className="text-sm text-dark">{service.description}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
