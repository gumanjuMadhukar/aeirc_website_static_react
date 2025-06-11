import { useParams } from "react-router-dom";
import { services } from "./servicesData";
import ServiceHeader from "../../components/ServiceHeader";

const Details = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="text-red-500 text-center mt-10">Service not found.</div>;
  }

  return (
    <>
      <ServiceHeader />

      <div className="container py-5">
        <div className="row align-items-center gy-4">

          {/* Details Section */}
          <div className="col-12 col-md-8">
            <div className="bg-white rounded shadow p-4">
              <i className={`fa fa-6x ${service.icon} text-primary mb-3`}></i>
              <h1 className="fw-bold">{service.title}</h1>
              <p className="lead text-secondary">{service.description}</p>
              <div className="text-muted mb-3" style={{ whiteSpace: "pre-line" }}>
                {service.detail}
              </div>

              {/* Render the lists if available */}
              {service.lists && service.lists.length > 0 && (
                <ul className="list-disc list-inside text-muted">
                  {service.lists.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Details;
