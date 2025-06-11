import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Top bar */}
      <div className="w-100 bg-powder-blue py-3 px-4 d-flex justify-content-between align-items-center text-nav">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aeirc.org&su=Booking%20Request"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nav text-decoration-none d-flex align-items-center"
        >
          <i className="bi bi-envelope me-2"></i>
          <small>info@aeirc.org</small>
        </a>
        <div className="d-flex gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nav"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nav"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container px-3 m-3">
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top m-0 p-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "navbar-brand d-flex align-items-center px-4 px-lg-5 active"
                : "navbar-brand d-flex align-items-center px-4 px-lg-5"
            }
          >
            <img
              src="/img/logo_AEIRC.png"
              alt="Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </NavLink>

          <button
            className="navbar-toggler me-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse m-0" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              {["/", "/about", "/products", "/contact"].map((path, idx) => {
                const label = ["Home", "About", "Products", "Contact"][idx];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    className={({ isActive }) =>
                      isActive ? "nav-item nav-link active" : "nav-item nav-link"
                    }
                  >
                    {label}
                  </NavLink>
                );
              })}

              <div className="nav-item dropdown">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"
                  }
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </NavLink>
                <div className="dropdown-menu fade-down m-0">
                  <NavLink to="/team" className="dropdown-item">
                    Our Team
                  </NavLink>
                  <NavLink to="/about" className="dropdown-item">
                    About Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
