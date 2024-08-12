import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the default styles
import "./contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xjkbrane", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormStatus("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      setFormStatus("There was an error. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mt-5">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      {formStatus && (
        <div
          className={`mt-3 ${
            formStatus.includes("successfully") ? "text-success" : "text-danger"
          }`}
        >
          {formStatus}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
