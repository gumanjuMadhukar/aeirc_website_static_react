import { Link } from "react-router-dom";

const ServiceHeader: React.FC = () => {
  return (
    <div className="container-fluid 
     py-5 mb-5 page-header">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link className="text-white" to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="text-white" to="#">Pages</Link>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Team
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
