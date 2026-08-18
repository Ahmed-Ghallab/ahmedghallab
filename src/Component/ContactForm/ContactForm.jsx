import React, { useState } from "react";
import "./ContactForm.css";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp,
  FaSpinner,
  FaExclamationTriangle,
  FaEnvelope,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/eng.ahmedghallab@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone || "Not provided",
            message: formData.message,
            _subject: `⚡ Portfolio Message from ${formData.fullName}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus("success");
      } else {
        throw new Error(result.message || "Failed to transmit message.");
      }
    } catch (err) {
      console.warn("Direct form submission error, offering mailto fallback:", err);
      setStatus("error");
      setErrorMsg("Network transmission delay. You can send directly via Email or WhatsApp below.");
    }
  };

  const handleReset = () => {
    setFormData({ fullName: "", email: "", phone: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
  };

  const mailtoLink = `mailto:eng.ahmedghallab@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.fullName || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
  )}`;

  const whatsappLink = `https://wa.me/201279547848?text=${encodeURIComponent(
    `Hello Ahmed, my name is ${formData.fullName || "Visitor"}. ${formData.message || "I am reaching out regarding a front-end opportunity."}`
  )}`;

  // 3 Primary Direct Contact Channels
  const directContacts = [
    {
      icon: <IoMail />,
      title: "Email",
      value: "eng.ahmedghallab@gmail.com",
      mobileValue: "Send Email",
      link: "mailto:eng.ahmedghallab@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone / WhatsApp",
      value: "+20 127 954 7848",
      mobileValue: "+20 127 954 7848",
      link: "https://wa.me/201279547848",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "ahmedghallab22",
      mobileValue: "LinkedIn Profile",
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
            title={`${c.title}: ${c.value}`}
          >
            <div className="contact-card-icon">{c.icon}</div>
            <div className="contact-card-details">
              <h4>{c.title}</h4>
              <p className="contact-val-desktop">{c.value}</p>
              <p className="contact-val-mobile">{c.mobileValue}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Contact Form Box */}
      <div className="contact-wrapper">
        <div className="form-header-area">
          <h3 className="form-title">Send a Direct Message</h3>
        </div>

        {status === "success" ? (
          <div className="form-success-msg">
            <FaCheckCircle className="success-icon" />
            <h4>Message Sent Successfully!</h4>
            <p>
              Thank you, <strong>{formData.fullName}</strong>. Your message has been delivered directly to Ahmed's inbox. You will receive a response at <strong>{formData.email}</strong> shortly.
            </p>
            <div className="success-actions">
              <button onClick={handleReset} className="reset-form-btn">
                Send Another Message
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-quick-wa"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleFormSubmit}>
            {status === "error" && (
              <div className="form-error-banner">
                <FaExclamationTriangle className="error-banner-icon" />
                <div className="error-banner-text">
                  <p>{errorMsg}</p>
                  <div className="error-banner-actions">
                    <a href={mailtoLink} className="fallback-btn email-fb">
                      <FaEnvelope /> Send via Email App
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="fallback-btn wa-fb"
                    >
                      <FaWhatsapp /> Send via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="form-row-2col">
              <div className="form-group">
                <label htmlFor="contact-fullName">Full Name *</label>
                <input
                  id="contact-fullName"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone / WhatsApp (Optional)</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+20 127 954 7848"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell me about your project, team opportunity, or timeline..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="form-submit-row">
              <button
                type="submit"
                className={`submit-btn ${status === "loading" ? "loading" : ""}`}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <FaSpinner className="btn-spinner" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane style={{ marginRight: "0.5rem" }} />
                    Send Message
                  </>
                )}
              </button>

              <a
                href="https://wa.me/201279547848"
                target="_blank"
                rel="noreferrer"
                className="direct-whatsapp-btn"
                title="Instant Chat on WhatsApp"
              >
                <FaWhatsapp /> Quick WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
