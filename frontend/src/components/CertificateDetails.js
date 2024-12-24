import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CertificateDetails.css";

const CertificateDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState(null);

  // Extract certificate IDs from the query string
  const query = new URLSearchParams(location.search);
  const idsQuery = query.get("ids");

  useEffect(() => {
    const fetchCertificates = async () => {
      // Check if certificate IDs are provided
      if (!idsQuery) {
        setError("No certificate IDs provided.");
        return;
      }

      try {
        // Split IDs into an array
        const idsArray = idsQuery.split(",");

        // Make a POST request to fetch certificate details
        const response = await axios.post(
          "https://backend-51k4.onrender.com/api/certificates/verify",
          { certificateIDs: idsArray }
        );

       // Check if the response contains valid data
        if (Array.isArray(response.data) && response.data.length > 0) {
          setCertificates(response.data);
        } else {
          setError("No certificates found for the provided IDs.");
        }
      } catch (error) {
        // Handle network or server errors
        console.error("Error fetching certificate data:", error);
        setError("Error fetching certificate data. Please try again.");
      }
    };

    fetchCertificates();
  }, [idsQuery]);

  return (
    <div className="certificate-details-container">
      <h2>Certificate Details</h2>

      {/* Display an error message if any */}
      {error && <p className="error-message">{error}</p>}

      {/* Display certificates if available */}
      {certificates.length > 0 ? (
        certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <p>
              <strong>Certificate ID:</strong> {certificate.certificateID}
            </p>
            <p>
              <strong>Student Name:</strong> {certificate.studentName}
            </p>
            <p>
              <strong>Course:</strong> {certificate.courseName}
            </p>
            <p>
              <strong>Issued:</strong>{" "}
              {new Date(certificate.issueDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        ))
      ) : (
        !error && <p>loading............</p>
      )}

      {/* Back button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default CertificateDetails;
