// pages/ServiceDetails/Details.tsx
import { useParams } from "react-router-dom";
import { services } from "./servicesData";

const Details = () => {
  const { id } = useParams();
  console.log("URL param id:", id); // Debug log

  const service = services.find((s) => s.id === id);
  console.log("Found service:", service); // Debug log

  if (!service) {
    return <div className="text-red-500 text-center">Service not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="text-center">
        <i className={`fa fa-4x ${service.icon} mb-4`}></i>
        <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <div className="text-gray-700">{service.detail}</div>
      </div>
    </div>
  );
};

export default Details;
