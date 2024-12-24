import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CertificateVerification.css";

const CertificateVerification = () => {
  // State management
  const [certificateID, setCertificateID] = useState(""); // Single certificate ID
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle the verification process
  const handleVerify = async () => {
    setError(null); // Clear previous errors

    if (!certificateID.trim()) {
      setError("Please enter a valid certificate ID.");
      return;
    }

    setLoading(true);

    try {
      // Make API request to verify the single certificate
      const response = await axios.post(
        "https://backend-51k4.onrender.com/api/certificates/verify",
        { certificateIDs: [certificateID.trim()] }
      );

      // If certificate is found, navigate to details page
      if (response.data && response.data.length > 0) {
        navigate(`/details?ids=${certificateID}`, {
          state: { certificates: response.data },
        });
      } else {
        setError(`No certificate found with the ID: ${certificateID}`);
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="certificate-verification-container">
      <h1 className="heading">Certificate Verification</h1>
      <p className="description">
        Enter a certificate ID below to verify its details.
      </p>

      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certificateID}
        onChange={(e) => setCertificateID(e.target.value)}
        className="certificate-input"
        disabled={loading} // Disable input while verifying
      />

      <button
        onClick={handleVerify}
        disabled={loading || !certificateID.trim()} // Disable button if input is empty
        className={`verify-btn ${loading ? "loading" : ""}`}
      >
        {loading ? "Verifying..." : "Verify Certificate"}
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CertificateVerification;
