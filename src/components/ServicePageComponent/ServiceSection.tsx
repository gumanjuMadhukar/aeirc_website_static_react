import { Link } from "react-router-dom";
import { services } from "../../pages/ServicePage/servicesData";

const ServiceSection = () => {
  return (
    <div className="container-xxl py-5 service-container">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            Services
          </h6>
          <h1 className="mb-5">Services Provided By AEIRC</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 wow fadeInUp"
              // data-wow-delay={service.delay}
            >
              <Link
                to={`/ServiceDetails/${service.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="service-item service-bg service-hover text-center pt-3 h-[350px] flex flex-col justify-between p-4 shadow-md rounded-lg transition duration-300">
                  <div className="p-4">
                    <i
                      className={`fa fa-3x ${service.icon} mb-4`}
                    ></i>
                    <h5 className="mb-3">{service.title}</h5>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
