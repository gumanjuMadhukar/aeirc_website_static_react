const national = [
  {
    src: "/img/partners/national/NHPC.png",
    alt: "Nepal Health Professional Council (NHPC)",
  },
  {
    src: "/img/partners/national/HIBN.png",
    alt: "Health Insurance Board of Nepal",
  },
  { src: "/img/partners/national/Nepalinstitute.jpg", alt: "Nepalinstitute" },
  {
    src: "public/img/partners/national/Clamphook .png",
    alt: "Clamphook Entrance Preparation",
  },
  { src: "/img/partners/national/NPC.png", alt: "Nepal Pharmacy Council" },
];
const international = [
  {
    src: "/img/partners/international/BritishCouncil.png",
    alt: "British Council",
  },
  { src: "/img/partners/international/CG.png", alt: "City & Guilds (UK)" },
  {
    src: "/img/partners/international/CoreIntegra.png",
    alt: "Core Integra (India)",
  },
  { src: "/img/partners/international/jot.png", alt: "JOT (Japan)" },
  {
    src: "/img/partners/international/NTA.png",
    alt: "NTA (India) – JEE Main and JEE Advanced",
  },
  {
    src: "/img/partners/international/TSC.png",
    alt: "TCS iON (Tata Consultancy Services, India):",
  },
];

const PartnersSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title bg-white text-center text-highlight px-3">
            Our Partners
          </h6>
          <h1 className="mb-4">AEIRC Is Partners With</h1>
        </div>
        {/* National Partners */}
        <div className="row">
          {/* Left Side – 30% */}
          <div className="col-lg-4 mb-4 p-4">
            <h2 className="mb-3 text-highlight">Our National Partners</h2>
            <p>
              AEIRC has built a strong reputation through partnerships with
              leading national organizations. These collaborations showcase our
              commitment to excellence, adherence to protocols, and capability
              to manage high-stakes projects within the country.
            </p>
          </div>

          {/* Right Side – 70% */}
          <div className="col-lg-8 mt-4 p-4">
            <div className="row g-4">
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
        {/* International Partners */}
        <div className="row">
          {/* Left Side – 30% */}
          <div className="col-lg-4 mb-4">
            <h2 className="mb-3 text-highlight">Our International Partners</h2>
            <p>
              In addition to our national success, AEIRC has established
              impactful partnerships with renowned international institutions.
              These global alliances reflect our dedication to innovation,
              global standards, and collaborative research across borders.
            </p>
          </div>

          {/* Right Side – 70% */}
          <div className="col-lg-8">
            <div className="row g-4">
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
  );
};

export default PartnersSection;
