import React, { useState } from "react";
import "./RegistrationPopup.css";

const RegistrationPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage(""); // Clear error message on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.contact) {
      setErrorMessage("All fields are required.");
      return;
    }

    setIsFormSubmitted(true); // Set form as submitted

    // Clear form data after submission
    setFormData({ name: "", email: "", contact: "" });

    // Show success message immediately after submission
    setSuccessMessage("Successfully Registered! Welcome aboard!");

    // Close the popup after a short delay (after success message is shown)
    setTimeout(() => {
      onClose(); // Close popup after the message is shown
    }, 1000); // Delay of 2 seconds before closing
  };

  return (
    <>
      {/* Show success message after form is closed */}
      {successMessage && !isFormSubmitted && (
        <div className="success-message" role="alert" aria-live="polite">
          <h3>{successMessage}</h3>
        </div>
      )}

      {/* Popup form */}
      <div
        className="popup-overlay"
        role="dialog"
        aria-labelledby="popup-title"
        aria-describedby="popup-desc"
      >
        <div className="popup-content" role="document">
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close Registration Popup"
          >
            &times;
          </button>
          <h2 id="popup-title">Register</h2>
          <form onSubmit={handleSubmit} aria-describedby="form-instructions">
            <p id="form-instructions">
              Please fill in the details below to register.
            </p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                required
              />
            </div>

            {/* Display error message if validation fails */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button
              type="submit"
              className="register-button"
              disabled={!formData.name || !formData.email || !formData.contact}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPopup;
