// src/pages/Home.js
import React, { useEffect, useRef } from "react";


import './Home.css';
import CertificateSample from '../components/CertificateSample';
import { Helmet } from 'react-helmet';




const Home = () => {

  const videoRef = useRef(null);

  // Toggle Play/Pause for the video
  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };


  useEffect(() => {
    const courseList = document.getElementById('courseList');
    // Pause the scroll on hover
    const pauseScroll = () => {
      courseList.style.animationPlayState = 'paused';
    };

    const resumeScroll = () => {
      courseList.style.animationPlayState = 'running';
    };

    courseList.addEventListener('mouseover', pauseScroll);
    courseList.addEventListener('mouseout', resumeScroll);

    return () => {
      courseList.removeEventListener('mouseover', pauseScroll);
      courseList.removeEventListener('mouseout', resumeScroll);

      
    };
  }, []);





  return (



    <div className="home">


<Helmet>
  {/* Basic Meta Tags */}
  <title>InternCourse Pvt. Ltd. </title>
  <meta name="description" content="InternCourse is the leading platform for online learning, offering affordable and high-quality courses in software development, web development, Java, Python, and more. Start learning today!" />
  <meta name="keywords" content="InternCourse, Intern Course, Course Intern, Internship, Internship Certificates, online learning, e-learning, software development, Java courses, Python courses, web development, digital education, learn programming online" />

  {/* Open Graph Meta Tags (for social media) */}
  <meta property="og:title" content="InternCourse - Learn Software Development & More Online" />
  <meta property="og:description" content="InternCourse offers top-quality online courses in software development, web development, Java, Python, and other tech skills. Start your learning journey today!" />
  <meta property="og:image" content="https://interncourse.online/images/home-image.jpg" />
  <meta property="og:url" content="https://interncourse.online" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="InternCourse" />

  {/* Twitter Card Meta Tags (for Twitter sharing) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="InternCourse - Affordable Online Courses for All" />
  <meta name="twitter:description" content="Learn software development, Java, Python, web development, and more with InternCourse. Start your online learning journey today!" />
  <meta name="twitter:image" content="https://interncourse.online/images/home-image.jpg" />
  <meta name="twitter:site" content="@InternCourse" />

  {/* Canonical Link (to prevent duplicate content) */}
  <link rel="canonical" href="https://interncourse.online" />

  {/* Additional Structured Data (for rich snippets) */}
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "InternCourse",
      "url": "https://interncourse.online",
      "logo": "https://interncourse.online/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/InternCourse",
        "https://www.instagram.com/InternCourse",
        "https://twitter.com/InternCourse",
        "https://www.linkedin.com/company/interncourse"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9771041512",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    }
  `}
</script>

</Helmet>



<section className="hero">
  <div className="hero-content">
    <h1>Unlock Your Potential with InternCourse</h1>
    <p>Learn new skills at your own pace, from anywhere in the world.</p>
    <a href="https://forms.gle/GHXAr6CAXj9KbLBZ8" target="_blank" rel="noopener noreferrer">
      <button className="cta-button">Enroll Now</button>
    </a>
  </div>
</section>



    {/* About Section */}
<section className="about">
  <h2>Empower Your Learning Journey!</h2>

  
{/* Offers Carousel */}
<div className="carousel-container">
    <div className="carousel">
      <div className="offer-item">
        <h4>Limited-Time Discount</h4>
        <p>Get 40% off on all courses. Enroll now!</p>
      </div>
      <div className="offer-item">
        <h4>Earn Rewards</h4>
        <p>Complete a course and win exciting rewards!</p>
      </div>
      <div className="offer-item">
        <h4>Free Bonus Materials</h4>
        <p>Unlock free bonus resources with each enrollment.</p>
      </div>
      {/* Duplicate Items for Infinite Scrolling */}
      <div className="offer-item">
        <h4>Limited-Time Discount</h4>
        <p>Get 40% off on all courses. Enroll now!</p>
      </div>
      <div className="offer-item">
        <h4>Earn Rewards</h4>
        <p>Complete a course and win exciting rewards!</p>
      </div>
      <div className="offer-item">
        <h4>Free Bonus Materials</h4>
        <p>Unlock free bonus resources with each enrollment.</p>
      </div>
    </div>
  </div>
</section>

 

{/* Courses Section */}
<section className="courses">
  <h2>Popular Courses</h2>
  <div className="course-list" id="courseList">
    {/* Course Items */}
    <div className="course-item">
      <img src="/images/webdev.jpg" alt="Web Development" className="course-image" />
      <h4>Web Development</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/revit.jpg" alt="Revit" className="course-image" />
      <h3>Revit</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/scada.jpg" alt="SCADA" className="course-image" />
      <h3>SCADA</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
   

    <div className="course-item">
      <img src="/images/ansys.jpg" alt="ANSYS" className="course-image" />
      <h3>ANSYS</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/chat.jpg" alt="Chatbot" className="course-image" />
      <h3>Chatbot</h3>
      <p>Duration: 06 Weeks</p>
      <p>Price: ₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/data.WebP" alt="Data Science" className="course-image" />
      <h4>Data Science</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
  
    <div className="course-item">
      <img src="/images/ai.jpg" alt="Artificial Intelligence" className="course-image" />
      <h4>Artificial Intelligence</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cyber.jpg" alt="Cybersecurity" className="course-image" />
      <h4>Cybersecurity</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/base.jpg" alt="Database Management" className="course-image" />
      <h5>Database Management</h5>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/python.jpg" alt="Python" className="course-image" />
      <h4>Python</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/java.jpg" alt="Java" className="course-image" />
      <h4>Java</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cp.jpg" alt="C++" className="course-image" />
      <h4>C++</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/c.jpg" alt="C Programming" className="course-image" />
      <h4>C Programming</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/script.jpg" alt="JavaScript" className="course-image" />
      <h4>JavaScript</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>

    <div className="course-item">
      <img src="/images/staad.jpg" alt="STAAD PRO" className="course-image" />
      <h3>STAAD PRO</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/etabs.jpg" alt="ETABS" className="course-image" />
      <h3>ETABS</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/bim.jpg" alt="BIM" className="course-image" />
      <h3>BIM</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/autocad-2016-1.jpg" alt="AutoCAD" className="course-image" />
      <h3>AutoCAD</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/mat.jpg" alt="MATLAB" className="course-image" />
      <h3>MATLAB</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
  
  <div className="course-item">
      <img src="/images/iot.jpg" alt="IOT" className="course-image" />
      <h3>IOT</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/ansys.jpg" alt="ANSYS" className="course-image" />
      <h3>ANSYS</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/hvac.jpg" alt="HVAC" className="course-image" />
      <h3>HVAC</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/catia.jpg" alt="CATIA" className="course-image" />
      <h3>CATIA</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
 
    <div className="course-item">
      <img src="/images/solid.jpg" alt="SOLIDWORKS" className="course-image" />
      <h3>SOLIDWORKS</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>


    {/* Add remaining course items here */}
  </div>
</section>

{/* Courses Section */}
<section className="courses">
  <h2>Certification Courses</h2>
  <h4>Computer Science and Engineering (CSE)</h4>
  <div className="course-list" id="courseList">
    {/* Course Items */}
    <div className="course-item">
      <img src="/images/webdev.jpg" alt="Web Development" className="course-image" />
      <h4>Web Development</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/data.WebP" alt="Data Science" className="course-image" />
      <h4>Data Science</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
  
    <div className="course-item">
      <img src="/images/ai.jpg" alt="Artificial Intelligence" className="course-image" />
      <h4>Artificial Intelligence</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cyber.jpg" alt="Cybersecurity" className="course-image" />
      <h4>Cybersecurity</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/base.jpg" alt="Database Management" className="course-image" />
      <h5>Database Management</h5>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/python.jpg" alt="Python" className="course-image" />
      <h4>Python</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/java.jpg" alt="Java" className="course-image" />
      <h4>Java</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cp.jpg" alt="C++" className="course-image" />
      <h4>C++</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/c.jpg" alt="C Programming" className="course-image" />
      <h4>C Programming</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/script.jpg" alt="JavaScript" className="course-image" />
      <h4>JavaScript</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    
    {/* Add remaining course items here */}
  </div>
</section>



{/* Courses Section */}
<section className="courses">
  
  <h4>Civil Engineering</h4>
  <div className="course-list" id="courseList">
    {/* Course Items */}
  
   
    <div className="course-item">
      <img src="/images/revit.jpg" alt="Revit" className="course-image" />
      <h3>Revit</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/staad.jpg" alt="STAAD PRO" className="course-image" />
      <h3>STAAD PRO</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/etabs.jpg" alt="ETABS" className="course-image" />
      <h3>ETABS</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/bim.jpg" alt="BIM" className="course-image" />
      <h3>BIM</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/autocad-2016-1.jpg" alt="AutoCAD" className="course-image" />
      <h3>AutoCAD</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    
    {/* Add remaining course items here */}
  </div>
</section>

{/* Courses Section */}
<section className="courses">
  
  <h4>EE / ECE</h4>
  <div className="course-list" id="courseList">

  <div className="course-item">
      <img src="/images/scada.jpg" alt="SCADA" className="course-image" />
      <h3>SCADA</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/mat.jpg" alt="MATLAB" className="course-image" />
      <h3>MATLAB</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
  
  <div className="course-item">
      <img src="/images/iot.jpg" alt="IOT" className="course-image" />
      <h3>IOT</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/webdev.jpg" alt="Web Development" className="course-image" />
      <h4>Web Development</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/data.WebP" alt="Data Science" className="course-image" />
      <h4>Data Science</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
  
    <div className="course-item">
      <img src="/images/ai.jpg" alt="Artificial Intelligence" className="course-image" />
      <h4>Artificial Intelligence</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cyber.jpg" alt="Cybersecurity" className="course-image" />
      <h4>Cybersecurity</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/base.jpg" alt="Database Management" className="course-image" />
      <h5>Database Management</h5>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/python.jpg" alt="Python" className="course-image" />
      <h4>Python</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/java.jpg" alt="Java" className="course-image" />
      <h4>Java</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cp.jpg" alt="C++" className="course-image" />
      <h4>C++</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/c.jpg" alt="C Programming" className="course-image" />
      <h4>C Programming</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/script.jpg" alt="JavaScript" className="course-image" />
      <h4>JavaScript</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    {/* Add remaining course items here */}
  </div>
</section>

{/* Courses Section */}
<section className="courses">
  
  <h4>Mechanical Engineering</h4>
  <div className="course-list" id="courseList">
    {/* Course Items */}
    <div className="course-item">
      <img src="/images/ansys.jpg" alt="ANSYS" className="course-image" />
      <h3>ANSYS</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/hvac.jpg" alt="HVAC" className="course-image" />
      <h3>HVAC</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/catia.jpg" alt="CATIA" className="course-image" />
      <h3>CATIA</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
 
    <div className="course-item">
      <img src="/images/solid.jpg" alt="SOLIDWORKS" className="course-image" />
      <h3>SOLIDWORKS</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    
    {/* Add remaining course items here */}
  </div>
</section>

{/* Courses Section */}
<section className="courses">
  
  <h4>Artificial intelligence (AI)</h4>
  <div className="course-list" id="courseList">
    {/* Course Items */}
    <div className="course-item">
      <img src="/images/chat.jpg" alt="Chatbot" className="course-image" />
      <h3>Chatbot</h3>
      <p>Duration: 06 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/iot.jpg" alt="IOT" className="course-image" />
      <h3>IOT</h3>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>

    <div className="course-item">
      <img src="/images/webdev.jpg" alt="Web Development" className="course-image" />
      <h4>Web Development</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899</p>
    </div>
    <div className="course-item">
      <img src="/images/data.WebP" alt="Data Science" className="course-image" />
      <h4>Data Science</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
  
    <div className="course-item">
      <img src="/images/ai.jpg" alt="Artificial Intelligence" className="course-image" />
      <h4>Artificial Intelligence</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cyber.jpg" alt="Cybersecurity" className="course-image" />
      <h4>Cybersecurity</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/base.jpg" alt="Database Management" className="course-image" />
      <h5>Database Management</h5>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/python.jpg" alt="Python" className="course-image" />
      <h4>Python</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/java.jpg" alt="Java" className="course-image" />
      <h4>Java</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/cp.jpg" alt="C++" className="course-image" />
      <h4>C++</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/c.jpg" alt="C Programming" className="course-image" />
      <h4>C Programming</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    <div className="course-item">
      <img src="/images/script.jpg" alt="JavaScript" className="course-image" />
      <h4>JavaScript</h4>
      <p>Duration: 08 Weeks</p>
      <p>₹899 </p>
    </div>
    
    
    {/* Add remaining course items here */}
  </div>
</section>








<section className="demo-classes-section">
      <h2>Demo Classes</h2>
      <div className="demo-classes-container">
        <div className="demo-class-card">
          <video
            className="demo-class-video"
            ref={videoRef}
            controls
            width="600"
          >
            <source src="/videos/demo1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p className="demo-class-name">
            Class 0: Introduction to ANSYS
          </p>
          <button className="demo-class-button" onClick={toggleVideo}>
            Play/Pause
          </button>
          
        </div>
        <div className="demo-class-card">
          <video
            className="demo-class-video"
            ref={videoRef}
            controls
            width="600"
          >
            <source src="/videos/demo2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p className="demo-class-name">
            Class 0: Introduction to STAAD.PRO
          </p>
          <button className="demo-class-button" onClick={toggleVideo}>
            Play/Pause
          </button>
          
       
        
      </div>
      </div>
   
      
    </section>






<section class="unique-team-section">
  <h2>Our Expert Team</h2>
  <div class="unique-team-container">
    <div class="unique-team-card">
      <img src="images/Mayank.WebP" alt="Mayank Jha" class="unique-team-image" />
      <p class="unique-team-name">Mayank Jha</p>
      <p class="unique-team-role">Software Developer</p>
    </div>
    <div class="unique-team-card">
      <img src="images/Ankit.jpg" alt="Ankit Pandey" class="unique-team-image" />
      <p class="unique-team-name">Ankit Pandey</p>
      <p class="unique-team-role">Architect</p>
    </div>
    <div class="unique-team-card">
      <img src="images/manvi.WebP" alt="Manvi Verma" class="unique-team-image" />
      <p class="unique-team-name">Manvi Verma</p>
      <p class="unique-team-role">Java Developer</p>
    </div>
    <div class="unique-team-card">
      <img src="images/Harsh.WebP" alt="Harsh Verma" class="unique-team-image" />
      <p class="unique-team-name">Harsh Verma</p>
      <p class="unique-team-role">Quantity Surveyor</p>
    </div>
  </div>
</section>





 {/* Student's Feedback Section */}
 <section className="feedback">
        <h2>What Our Students Say</h2>
        <div className="feedback-list">
          <div className="feedback-item">
            <p>"The Web Development course was a game-changer for me! I learned so many new skills and now I can build my own websites."</p>
            <h4>Shubhankar Verma</h4>
            <p>Heritage Institute of Technology, Kolkata</p>
          </div>
          <div className="feedback-item">
            <p>"AutoCAD training helped me land a job as an architectural designer. The course was comprehensive and easy to follow."</p>
            <h4>Sumit Chaudhary</h4>
            <p>Birla Institute of Technology - Mesra</p>
          </div>
          <div className="feedback-item">
            <p>"Revit course helped me understand BIM concepts and boosted my career. The instructors were very knowledgeable."</p>
            <h4>Priya Singh</h4>
            <p>Motilal Nehru National Institute of Technology, Allahabad</p>
          </div>
          {/* Add more feedback items as needed */}
        </div>
      </section>


      <section className="call-to-action">
  <h2>Start Learning Today</h2>
  <p>Join thousands of learners around the world and upgrade your skills.</p>
  <a href="https://forms.gle/GHXAr6CAXj9KbLBZ8" target="_blank" rel="noopener noreferrer">
    <button className="cta-button">Sign Up Now</button>
  </a>
</section>

 {/* Add the Certificate Sample Section Here */}
 <CertificateSample />

 <h1>Register Now</h1>
    <div class="google-form-container">
        <iframe src="https://forms.gle/GHXAr6CAXj9KbLBZ8" width="640" height="845" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>

    <section className="circular-images-section">
      <h2>Registered </h2> {/* Optional heading */}
      <div className="circular-images-container">
        <div className="circular-image">
          <img src="images/AICTE.jpg" alt="AICTE" />
        </div>
        <div className="circular-image">
          <img src="images/MCA.jpg" alt="MCA" />
        </div>
        <div className="circular-image">
          <img src="images/BIHAR.jpg" alt="BIHAR STARTUP" />
        </div>

        <div className="circular-image">
          <img src="images/ISO.jpg" alt="ISO" />
        </div>
        <div className="circular-image">
          <img src="images/MSME.jpg" alt="MSME" />
      
        </div>
        {/* Add more circular images as needed */}
      </div>
    </section>

{/* Ongoing Projects Section */}
<section className="ongoing-projects">
        <h2>Ongoing Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <img src="/images/smart.jpg" alt="Project 1" className="project-image" />
            <div className="project-content">
              <h3>Smart City Design</h3>
              <p>Developing sustainable, smart city designs using cutting-edge urban planning tools like AutoCAD and Revit.</p>
              <a href="/projects/smart-city" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-item">
            <img src="/images/health.jpg" alt="Project 2" className="project-image" />
            <div className="project-content">
              <h3>Healthcare Data Analysis</h3>
              <p>Utilizing Data Science to analyze healthcare data and improve patient care through predictive models.</p>
              <a href="/projects/healthcare-data" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-item">
            <img src="/images/asses.jpg" alt="Project 3" className="project-image" />
            <div className="project-content">
              <h3>Cybersecurity Risk Assessment</h3>
              <p>Protecting organizations by identifying cybersecurity risks and providing mitigation strategies through ethical hacking.</p>
              <a href="/projects/cybersecurity" className="project-link">View Project</a>
            </div>
          </div>


        </div>
      </section>

      
    </div>
  );
};

export default Home;
