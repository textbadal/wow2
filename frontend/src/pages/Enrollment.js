import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Enrollment.css';

const Enrollment = () => {
  const location = useLocation();
  
  // Get courseId and course information from the location state
  const { courseId } = location.state || {};  // Get courseId passed through NavLink
  const coursesData = [
    {
      category: "POPULAR COURSES",
      courses: [
        { id: 1, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
        { id: 2, img: "/images/revit.jpg", title: "Revit", duration: "08 Weeks", price: "₹899" },
        { id: 3, img: "/images/scada.jpg", title: "SCADA", duration: "08 Weeks", price: "₹899" },
        { id: 4, img: "/images/ansys.jpg", title: "ANSYS", duration: "08 Weeks", price: "₹899" },
        { id: 5, img: "/images/chat.jpg", title: "Chatbot", duration: "06 Weeks", price: "₹899" },
        { id: 6, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
        { id: 7, img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
        { id: 8, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
        { id: 9, img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
        { id: 10, img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
        { id: 11, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
        { id: 12, img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
        { id: 13, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
        { id: 14, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" },
        { id: 15, img: "/images/staad.jpg", title: "STAAD PRO", duration: "08 Weeks", price: "₹899" },
        { id: 16, img: "/images/etabs.jpg", title: "ETABS", duration: "08 Weeks", price: "₹899" },
        { id: 17, img: "/images/bim.jpg", title: "BIM", duration: "08 Weeks", price: "₹899" },
        { id: 18, img: "/images/autocad-2016-1.jpg", title: "AutoCAD", duration: "08 Weeks", price: "₹899" },
        { id: 19, img: "/images/mat.jpg", title: "MATLAB", duration: "08 Weeks", price: "₹899" },
        { id: 20, img: "/images/iot.jpg", title: "IOT", duration: "08 Weeks", price: "₹899" },
        { id: 21, img: "/images/ansys.jpg", title: "ANSYS", duration: "08 Weeks", price: "₹899" },
        { id: 22, img: "/images/hvac.jpg", title: "HVAC", duration: "08 Weeks", price: "₹899" },
        { id: 23, img: "/images/catia.jpg", title: "CATIA", duration: "08 Weeks", price: "₹899" },
        { id: 24, img: "/images/solid.jpg", title: "SOLIDWORKS", duration: "08 Weeks", price: "₹899" }
      ]
    },

    {
      category: "Computer Science and Engineering (CSE)",
      courses: [
        { id: 25, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
        { id: 26, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
        { id: 27, img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
        { id: 28, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
        { id: 29, img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
        { id: 30, img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
        { id: 31, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
        { id: 32, img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
        { id: 33, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
        { id: 34, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" }
      ]
    },
    {
      category: "Civil Engineering",
      courses: [
        { id: 35, img: "/images/revit.jpg", title: "Revit", duration: "08 Weeks", price: "₹899" },
        { id: 36, img: "/images/staad.jpg", title: "STAAD PRO", duration: "08 Weeks", price: "₹899" },
        { id: 37, img: "/images/etabs.jpg", title: "ETABS", duration: "08 Weeks", price: "₹899" },
        { id: 38, img: "/images/bim.jpg", title: "BIM", duration: "08 Weeks", price: "₹899" },
        { id: 39, img: "/images/autocad-2016-1.jpg", title: "AutoCAD", duration: "08 Weeks", price: "₹899" }
      ]
    },
    {
      category: "EE / ECE",
      courses: [
        { id: 40, img: "/images/scada.jpg", title: "SCADA", duration: "08 Weeks", price: "₹899" },
        { id: 41, img: "/images/mat.jpg", title: "MATLAB", duration: "08 Weeks", price: "₹899" },
        { id: 42, img: "/images/iot.jpg", title: "IOT", duration: "08 Weeks", price: "₹899" },
        { id: 43, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
        { id: 44, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
        { id: 45, img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
        { id: 46, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
        { id: 47, img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
        { id: 48, img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
        { id: 49, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
        { id: 50, img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
        { id: 51, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
        { id: 52, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" }
      ]
    },
    {
      category: "Mechanical Engineering",
      courses: [
        { id: 53, img: "/images/ansys.jpg", title: "ANSYS", duration: "08 Weeks", price: "₹899" },
        { id: 54, img: "/images/hvac.jpg", title: "HVAC", duration: "08 Weeks", price: "₹899" },
        { id: 55, img: "/images/catia.jpg", title: "CATIA", duration: "08 Weeks", price: "₹899" },
        { id: 56, img: "/images/solid.jpg", title: "SOLIDWORKS", duration: "08 Weeks", price: "₹899" }
      ]
    },
    {
      category: "Artificial Intelligence (AI)",
      courses: [
        {id: 57, img: "/images/chat.jpg", title: "Chatbot", duration: "06 Weeks", price: "₹899" },
        { id: 58, img: "/images/iot.jpg", title: "IOT", duration: "08 Weeks", price: "₹899" },
        {id: 59, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
        {id: 60, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
        { id: 61,img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
        {id: 62, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
        { id: 63,img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
        { id: 64,img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
        {id: 65, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
        { id: 66,img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
        {id: 67, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
        {id: 68, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" }
      ]
    }
    
      
    ];

  // Find course data based on courseId
  const course = coursesData.flatMap(category => category.courses).find(course => course.id === courseId);

  // Always call useState before any return or conditional logic
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  // State to handle form submission success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page refresh on form submit

    // Log form data (you can replace this with actual form submission logic)
    console.log('Form Submitted:', formData);

    // Set the form submission state to true, to show the thank you message
    setIsSubmitted(true);
  };

  // Check if course exists before returning
  if (!course) {
    return <p>Course not found</p>; // Show error if course is not found
  }

  return (
    <div className="enrollment-container">
      {!isSubmitted ? (
        <>
          <h2>Enroll in {course.title}</h2>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Price:</strong> {course.price}</p>

          <form onSubmit={handleSubmit} className="enrollment-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button type="submit">Submit Enrollment</button>
          </form>
        </>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You for Enrolling!</h2>
          <p>Your enrollment for the course {course.title} has been successfully submitted.</p>
        </div>
      )}
    </div>
  );
};

export default Enrollment;
