const national = [
  {
    src: "/img/Clients/national/NHPC1.png",
    alt: "Nepal Health Professional Council (NHPC)",
  },
  {
    src: "/img/Clients/national/HIBN.png",
    alt: "Health Insurance Board of Nepal",
  },
  { src: "/img/Clients/national/Nepalinstitute1.png", alt: "Nepalinstitute" },
  {
    src: "/img/Clients/national/Clamphook1.png",
    alt: "Clamphook Entrance Preparation",
  },
  { src: "/img/Clients/national/NPC1.png", alt: "Nepal Pharmacy Council" },
];
const international = [
  {
    src: "/img/Clients/international/BritishCouncil.png",
    alt: "British Council",
  },
  { src: "/img/Clients/international/CG1.png", alt: "City & Guilds (UK)" },
  {
    src: "/img/Clients/international/CoreIntegra1.png",
    alt: "Core Integra (India)",
  },
  { src: "/img/Clients/international/jot1.png", alt: "JOT (Japan)" },
  {
    src: "/img/Clients/international/NTA1.png",
    alt: "NTA (India) – JEE Main and JEE Advanced",
  },
  {
    src: "/img/Clients/international/TSC.png",
    alt: "TCS iON (Tata Consultancy Services, India):",
  },
];

const ClientsSection = () => {
  return (
    <div id="client-section">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-center text-highlight px-3">
              Our Clients
            </h6>
            <h1 className="mb-4">Our Valueable Clients</h1>
          </div>
          {/* National clients */}
          <div className="row mb-5">
            {/* Left Side – 30% */}
            <div className="col-lg-4">
              <h2 className="mb-3 text-highlight">Our National Clients</h2>
              <p>
                AEIRC has built a strong reputation through Clientships with
                leading national organizations. These collaborations showcase
                our commitment to excellence, adherence to protocols, and
                capability to manage high-stakes projects within the country.
              </p>
            </div>

            {/* Right Side – 70% */}
            <div className="col-lg-8 mt-1">
              <div className="row g-2">
                {national.map((logo, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-4 col-md-3 d-flex align-items-center justify-content-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="img-fluid"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* International clients */}
          <div className="row">
            {/* Left Side – 30% */}
            <div className="col-lg-4 mb-1">
              <h2 className="mb-3 text-highlight">Our International Clients</h2>
              <p>
                In addition to our national success, AEIRC has established
                impactful Clientships with renowned international institutions.
                These global alliances reflect our dedication to innovation,
                global standards, and collaborative research across borders.
              </p>
            </div>

            {/* Right Side – 70% */}
            <div className="col-lg-8">
              <div className="row g-2">
                {international.map((logo, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-4 col-md-3 d-flex align-items-center justify-content-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="img-fluid"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
