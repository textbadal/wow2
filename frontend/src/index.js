import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Import App component
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Enrollment from './pages/Enrollment';
import ThankYou from './pages/ThankYou'; // Correct import path for ThankYou
import CertificateVerification from './pages/CertificateVerification';
import CertificateDetails from "./components/CertificateDetails";
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="certificate-verification" element={<CertificateVerification />} />
        <Route path="/details" element={<CertificateDetails />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  </Router>
);
