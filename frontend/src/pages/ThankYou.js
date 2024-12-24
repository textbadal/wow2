import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const { courseTitle } = location.state || {};

  return (
    <div className="thank-you-container">
      <h2>Thank You for Enrolling!</h2>
      <p>Your enrollment for the course <strong>{courseTitle}</strong> has been successfully submitted.</p>
    </div>
  );
};

export default ThankYou;
