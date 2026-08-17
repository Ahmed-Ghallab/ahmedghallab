import React, { useState } from "react";
import "./ContactForm.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${formData.fullName}`;
    const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:eng.ahmedghallab@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }, 400);
  };

  const directContacts = [
    {
      icon: <IoMail />,
      title: "Email",
      value: "eng.ahmedghallab@gmail.com",
      link: "mailto:eng.ahmedghallab@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone / WhatsApp",
      value: "+20 127 954 7848",
      link: "https://wa.me/201279547848",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "ahmedghallab22",
      link: "https://www.linkedin.com/in/ahmedghallab22/",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Alexandria, Egypt (Remote / UAE / On-site)",
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have an opportunity, project, or question? Feel free to reach out directly or send a message.
      </p>

      {/* Direct Contact Cards */}
      <div className="contact-cards-grid">
        {directContacts.map((c, i) => (
          <div key={i} className="contact-quick-card">
            <div className="contact-card-icon">{c.icon}</div>
            <div className="contact-card-details">
              <h4>{c.title}</h4>
              {c.link ? (
                <a href={c.link} target="_blank" rel="noreferrer">
                  {c.value}
                </a>
              ) : (
                <p>{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form Box */}
      <div className="contact-wrapper">
        <h3 className="form-title">Send a Direct Message</h3>

        {submitted ? (
          <div className="form-success-msg">
            <FaCheckCircle className="success-icon" />
            <h4>Thank you, {formData.fullName}!</h4>
            <p>Your default email client is opening to send this message.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-row-2col">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone / WhatsApp (Optional)</label>
              <input
                type="tel"
                name="phone"
                placeholder="+20 123 456 7890"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about the role, project requirements, or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane style={{ marginRight: "0.5rem" }} />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
