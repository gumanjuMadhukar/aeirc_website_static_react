const FooterSection: React.FC = () => {
  return (
    <div
      id="footer-page"
      className="container-fluid text-dark footer mt-5 wow fadeIn"
      style={{ backgroundColor: "#e9f1fc" }}
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 col-md-6">
            <img
              src="/img/logo.png"
              alt="aeirc_logo"
              className="img-fluid"
              style={{
                maxWidth: 100,
                margin: "0",
                display: "block",
                filter:
                  "invert(32%) sepia(100%) saturate(1373%) hue-rotate(172deg) brightness(85%) contrast(100%)",
              }}
            />
            <h3 className="text-secondary mb-3 pt-2">
              Advance Education & Innovative Research Centre Pvt. Ltd.
            </h3>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary mb-3">Quick Link</h4>
            <a className="btn btn-link" href="about">
              About Us
            </a>
            <a className="btn btn-link" href="contact">
              Contact Us
            </a>
            <a className="btn btn-link" href="#">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="#">
              Terms & Condition
            </a>
            <a className="btn btn-link" href="#">
              FAQs & Help
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary mb-3">Contact</h4>
            <p className="mb-2 text-secondary">
              <i className="fas fa-map-marker-alt me-3 "></i>Babarmal, Kathmandu
            </p>
            <p className="mb-2 text-secondary">
              <i className="fas fa-phone-alt me-3"></i>9851046500
            </p>
            <p className="mb-2">
              <span className="custom-tooltip-wrapper">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aeirc.com&su=Booking%20Request"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav text-decoration-none d-flex align-items-center"
                >
                  <i className="fas fa-envelope me-3"></i>info@aeirc.com
                </a>
                <span className="custom-tooltip-text">
                  Email us for booking
                </span>
              </span>
            </p>

            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.facebook.com/share/1Fg5keFa1e/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.linkedin.com/company/aeirc-tech/?originalSubdomain=np"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <h4 className="text-dark mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              {[1, 2, 3, 2, 3, 1].map((img, index) => (
                <div className="col-4" key={index}>
                  <img
                    className="img-fluid bg-light p-1"
                    src={`img/course-${img}.jpg`}
                    alt="Gallery"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
              <br />
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
              <br />
              Distributed By{" "}
              <a className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FooterSection;
