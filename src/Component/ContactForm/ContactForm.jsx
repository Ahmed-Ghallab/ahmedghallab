import React, { useState } from "react";
import "./ContactForm.css";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaPaperPlane,
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

  // 3 Primary Direct Contact Channels
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
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have an opportunity, project, or question? Feel free to reach out directly or send a message.
      </p>

      {/* 3 Direct Contact Cards in 1 Row */}
      <div className="contact-cards-grid">
        {directContacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="contact-quick-card"
          >
            <div className="contact-card-icon">{c.icon}</div>
            <div className="contact-card-details">
              <h4>{c.title}</h4>
              <p>{c.value}</p>
            </div>
          </a>
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
