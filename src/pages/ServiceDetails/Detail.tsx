import { useParams } from "react-router-dom";
import { services } from "./servicesData";
import ServiceHeader from "../../components/ServiceHeader";

const Details = () => {
  const { id } = useParams();
  // console.log(id)

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="text-red-500 text-center mt-10">Service not found.</div>;
  }

  return (
    <>
      <ServiceHeader />
      <div className="max-w-4xl mx-auto py-10 px-6">
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center space-y-6">
          <i className={`fa fa-6x ${service.icon} text-primary mb-6`}></i>
          <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl">{service.description}</p>
          <div className="text-gray-600 max-w-4xl whitespace-pre-line">{service.detail}</div>
        </div>
      </div>
    </>
  );
};

export default Details;
