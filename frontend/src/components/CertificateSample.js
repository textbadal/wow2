// src/components/CertificateSample.js
import React from 'react';
import './CertificateSample.css';

const CertificateSample = () => {
  return (
    <section className="certificate-section">
      <h2>Certificate Sample</h2>
      <div className="certificate-container">
        <img 
          src={`${process.env.PUBLIC_URL}/images/sus.jpg`} 
          alt="Sample Certificate" 
          className="certificate-image" 
        />
        <div className="certificate-info">
          <p>This is a sample of the certificate you will receive upon course completion.</p>
          <a href="/images/sus.jpg" className="download-btn" download>
            Download Sample
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificateSample;
