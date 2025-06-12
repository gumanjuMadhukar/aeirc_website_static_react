const collaborators = [
  { src: "/img/duhs.png", alt: "DUHS" },
  { src: "/img/bmrtf.png", alt: "Behavioral Medicine Foundation" },
  { src: "/img/dihe.png", alt: "Dadabhoy Institute" },
  { src: "/img/qihc.png", alt: "QIH Center" },
  { src: "/img/karachi_medical.png", alt: "Karachi Medical" },
  { src: "/img/must.png", alt: "Malir University" },
  { src: "/img/asm.png", alt: "American Society for Microbiology" },
  { src: "/img/baqai.png", alt: "Baqai Medical University" },
];

const partnersSection = () => {
  return (
    <div>
      <div className="container-xxl py-5 ">
      <div className="container">
      <section className="bg-white py-10 px-4">
        <div className="col-lg-5 mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Collaborators
        </h2>
        </div>
        <div className="col-lg-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {collaborators.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-28 h-28 object-contain"
              />
            </div>
          ))}
        </div></div>
      </section>
      </div>
      </div>

    </div>
  );
};

export default partnersSection;
