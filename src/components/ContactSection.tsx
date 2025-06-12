import React, { useState } from "react";

type ContactInfoItem = {
  iconClass: string;
  title: string;
  text: string;
};

const contactInfo: ContactInfoItem[] = [
  {
    iconClass: "fas fa-map-marker-alt",
    title: "Office",
    text: "Babarmal, Kathmandu",
  },
  {
    iconClass: "fas fa-phone-alt",
    title: "Mobile",
    text: "9851046500",
  },
  {
    iconClass: "fas fa-envelope-open",
    title: "Email",
    text: "info@example.com",
  },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    try {
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("subject", formData.subject);
      formBody.append("message", formData.message);

      const response = await fetch("https://yourdomain.com/contact.php", {
        //domain name here
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      const text = await response.text();

      if (response.ok) {
        setStatusMessage(text || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage(`Error: ${text}`);
      }
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Contact Us
          </h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Get In Touch</h5>
            <p className="mb-4">The contact form is now active.</p>
            {contactInfo.map(({ iconClass, title, text }) => (
              <div className="d-flex align-items-center mb-3" key={title}>
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-site-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className={`${iconClass} text-black`}></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-black">{title}</h5>
                  {title === "Email" ? (
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${text}&su=Booking%20Request`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none d-flex align-items-center text-black"
                    >
                      {/* <i className="bi bi-envelope me-2"></i> */}
                      <span>{text}</span>
                    </a>
                  ) : (
                    <p className="mb-0">{text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.85604596331!2d85.32434121132162!3d27.690843776092727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cfc621cdf5%3A0xf81f589e0bfe1f46!2sAdvance%20Education%20%26%20Innovative%20Research%20Center%20(AEIRC)!5e0!3m2!1sen!2snp!4v1749118691909!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div
            className="col-lg-4 col-md-12 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "150px" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-custom  w-100 py-3"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
            {statusMessage && (
              <div className="mt-3 alert alert-info" role="alert">
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
