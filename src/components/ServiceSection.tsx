const services = [
  {
    icon: 'fa-solid fa-computer',
    title: 'Computer-Based Test (CBT) Services',
    description: 'AEIRC is Nepal’s premier and most trusted provider of secure, scalable, and reliable computer-based testing solutions.',
    delay: '0.1s',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Server Infrastructure & Hosting',
    description: 'Our solid server infrastructure underpins secure and effective client operations.',
    delay: '0.3s',
  },
  {
    icon: 'fa-globe',
    title: 'Software Application and Development',
    description: 'The organization is into dedicated software development, providing customized high-impact solutions to various industries.',
    delay: '0.5s',
  },
  {
    icon: 'fa-book-open',
    title: 'IT Consulting & Infrastructure Services ',
    description: 'AEIRC provides fully integrated IT consulting and infrastructure services.',
    delay: '0.7s',
  },
  {
    icon: 'fa-globe',
    title: 'Server Infrastructure & Hosting',
    description: 'AEIRC provides fully integrated IT consulting and infrastructure services to aid the acceleration of digital transformation.',
    delay: '0.3s',
  },
  {
    icon: 'fa-notes-medical',
    title: 'Telemedicine & Health Technology ',
    description: 'AEIRC leads in health technology and provides unique solutions to improve healthcare access and outcomes.',
     delay: '0.3s',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI & Robotics Education',
    description: 'AEIRC is pioneering AI and robotics education to prepare the next generation for a technology-driven future',
    delay: '0.7s',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Research, Innovation & Capacity Building',
    description: 'AEIRC is committed to advancing research and fostering innovation: ',
    delay: '0.7s',
  },
];

const ServiceSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Services Provided By AEIRC</h1>
        </div>
        <div className="row g-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="service-item text-center pt-3 h-[320px] flex flex-col justify-between min-h-[320px]">
                <div className="p-4">
                  <i className={`fa fa-3x ${service.icon} text-primary mb-4`}></i>
                  <h5 className="mb-3">{service.title}</h5>
                  {/* <h5 className="mb-3">{service.title}</h5> */}
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
