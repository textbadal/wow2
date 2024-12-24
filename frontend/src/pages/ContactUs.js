import React from 'react';
import { Helmet } from 'react-helmet';
import './ContactUs.css';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Contact Us - InternCourse: Get in Touch with Our Team</title>
        <meta name="description" content="Contact InternCourse for any inquiries, support, or feedback. Reach out to our team for help with your online learning journey." />
        <meta name="keywords" content="Contact InternCourse, support, feedback, help with courses, learning, contact for online learning, customer support" />

        {/* Open Graph Meta Tags (for social media) */}
        <meta property="og:title" content="Contact InternCourse: Get in Touch with Our Team" />
        <meta property="og:description" content="Get in touch with InternCourse's team for any questions, support, or feedback about our online courses and services." />
        <meta property="og:image" content="https://interncourse.online/images/contact-image.jpg" />
        <meta property="og:url" content="https://interncourse.online/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - InternCourse: Reach Out to Our Team" />
        <meta name="twitter:description" content="Have any questions or need support? Contact InternCourse's team for assistance with our online learning platform." />
        <meta name="twitter:image" content="https://interncourse.online/images/contact-image.jpg" />
        <meta name="twitter:site" content="@InternCourse" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://interncourse.online/contact" />

        {/* JavaScript (if needed) - wrap content properly */}
        <script>
          {`
            // Your custom JavaScript can go here if needed
            console.log('Contact page loaded');
          `}
        </script>
      </Helmet>

      <h1>Get in Touch</h1>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or need assistance,
        don’t hesitate to reach out. Our team is here to help.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={24} />
          <span>Email: <a href="mailto:support@interncourse.online">support@interncourse.online</a></span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={24} />
          <span>Phone: <a href="tel:+91 93042 45362">+91 93042 45362</a></span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={24} />
          <span>Phone: <a href="tel:+91 97710 41512">+91 97710 41512</a></span>
        </div>
      
      </div>

      <h2>Or send us a message</h2>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="social-media">
        <p>Connect with us on social media:</p>
        <div className="social-icons">
          <a href="https://x.com/07InternCourse" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
