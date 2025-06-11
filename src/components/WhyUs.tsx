import React, { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    id: "one",
    title: "Unmatched Experience",
    content:
      "Years of successfully managing Nepal’s largest exams, including those for NHPC, NPC, and British Council, with verified success.",
  },
  {
    id: "two",
    title: "Scalability & Security",
    content:
      "Capable of handling 100 to 2,000 candidates daily across three soundproof, air-conditioned CBT exam labs, with robust biometric and network security measures.",
  },
  {
    id: "three",
    title: "Advanced Infrastructure",
    content:
      "Three CBT exam labs, a dedicated waiting room, a soundproof telemedicine room, and two meeting halls supported by a powerful human resource team for seamless operations.",
  },
  {
    id: "four",
    title: "Technology-Driven Solutions",
    content:
      "From wearable health tech to custom LMS, AI diagnostics, and robotics education, we build for scale and impact.",
  },
  {
    id: "five",
    title: "Dedicated Team",
    content:
      "A multidisciplinary team of engineers, IT experts, exam coordinators, software developers, AI specialists, and certified invigilators.",
  },
  {
    id: "six",
    title: "Compliance & Quality",
    content:
      "ISO 9001:2015-certified, GDPR-ready, and fully compliant with Nepalese and international standards, with strict adherence to standardized protocols.",
  },
  {
    id: "seven",
    title: "Innovation Leadership",
    content:
      "Pioneering AI and robotics education, telemedicine, and AI-driven diagnostics to address emerging needs.",
  },
];

const WhyUs: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("one");

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            WHY US?
          </h6>
          <h1 className="mb-5">Why Choose AEIRC</h1>
        </div>

        <div className="accordion" id="accordionExample">
          {accordionData.map((item) => {
            const collapseId = `collapse${item.id}`;
            const headingId = `heading${item.id}`;
            const isActive = activeId === item.id;

            return (
              <div
                className={`accordion-item ${isActive ? "bg-powder-blue" : ""}`}
                key={item.id}
              >
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${
                      !isActive ? "collapsed" : ""
                    }`}
                    type="button"
                    onClick={() =>
                      setActiveId(isActive ? "" : item.id)
                    }
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isActive}
                    aria-controls={collapseId}
                  >
                    <strong>{item.title}</strong>
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${
                    isActive ? "show" : ""
                  }`}
                  aria-labelledby={headingId}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
