import React from 'react';
import './AboutUs.css';
import { Helmet } from 'react-helmet';

// Sample data for team members
const teamMembers = [
  { name: 'Mayank Jha', role: 'Software Developer', imageUrl: 'images/Mayank.WebP' },
  { name: 'Ankit Pandey', role: 'Architect', imageUrl: 'images/Ankit.jpg' },
  { name: 'Manvi Verma', role: 'Java Developer', imageUrl: 'images/manvi.WebP' },
  { name: 'Harsh Verma', role: 'Quantity Surveyor', imageUrl: 'images/Harsh.WebP' },


];

const AboutUs = () => {
  return (
    <div className="about-us">

<Helmet>
        {/* Basic Meta Tags */}
        <title>About Us - InternCourse: Your Online Learning Platform</title>
        <meta
          name="description"
          content="Learn more about InternCourse, a leading online learning platform. Discover our mission, vision, team, and how we deliver high-quality, affordable courses to students worldwide."
        />
        <meta
          name="keywords"
          content="InternCourse, online learning, e-learning, online courses, software development courses, Java development, digital learning, affordable education"
        />

        {/* Open Graph Meta Tags (for social media) */}
        <meta property="og:title" content="About InternCourse - Revolutionizing Online Education" />
        <meta
          property="og:description"
          content="Discover InternCourse, the leading platform offering affordable online courses in various fields like software development, design, and more. Meet our team and learn about our vision."
        />
        <meta property="og:image" content="https://interncourse.online/images/about-image.jpg" />
        <meta property="og:url" content="https://interncourse.online/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InternCourse" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About InternCourse | Affordable Online Learning" />
        <meta
          name="twitter:description"
          content="Learn about InternCourse, an innovative platform offering top-notch online courses in software development and more."
        />
        <meta name="twitter:image" content="https://interncourse.online/images/about-image.jpg" />
        <meta name="twitter:site" content="@InternCourse" />

        {/* Canonical Link (to prevent duplicate content) */}
        <link rel="canonical" href="https://interncourse.online/about" />

        {/* Additional Structured Data (for rich snippets) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "InternCourse",
              "url": "https://interncourse.online/about",
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
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "ZIP Code",
                "addressCountry": "IN"
              }
            }
          `}
        </script>
      </Helmet>


      {/* Vision Section */}
<section className="vision">
  <h2>Our Vision</h2>
  <p>
    At InternCourse, our vision is to revolutionize the way people experience e-learning. We aim to create an educational ecosystem that is not only accessible but also engaging, interactive, and forward-thinking. Our goal is to empower learners worldwide to achieve their dreams and aspirations by providing them with the tools and knowledge they need to succeed. 
  </p>
  <p>
    We envision a future where learning is no longer confined to traditional classrooms or limited by geographical barriers. Through cutting-edge technologies, personalized learning paths, and a supportive community, we want to break down the obstacles that prevent many people from accessing quality education. Our mission is to build a global learning platform that brings the best educational resources to your fingertips, no matter where you are in the world.
  </p>
  <p>
    Whether you're a student aiming to build a successful career or a professional looking to upskill, we want to provide an immersive and transformative learning experience that helps you achieve your goals. By continuously innovating and adapting to the evolving needs of learners, we strive to remain at the forefront of the e-learning industry, shaping the future of education for generations to come.
  </p>
</section>

{/* Mission Section */}
<section className="mission">
  <h2>Our Mission</h2>
  <p>
    Our mission at InternCourse is to democratize education by offering affordable, high-quality courses that cater to learners of all skill levels. We believe that education should not be a privilege but a right, and we are committed to breaking down barriers to learning for individuals worldwide. Through our diverse course offerings, we aim to equip learners with the knowledge and skills they need to excel in today’s rapidly changing job market.
  </p>
  <p>
    We focus on creating engaging, interactive content that fosters a deeper understanding of key concepts, allowing students to apply their learning in real-world scenarios. Our courses are designed to be highly practical, with expert instructors who bring their real-world experience into the classroom. We also ensure that students have access to a wide range of support resources, including community forums, mentorship opportunities, and career guidance.
  </p>
  <p>
    Beyond just providing knowledge, we want to build a learning environment where students feel motivated and empowered to take their education to the next level. Our platform encourages collaboration, creativity, and critical thinking, helping students not only grasp theoretical knowledge but also develop practical skills that can be immediately applied in their careers.
  </p>
  <p>
    Ultimately, our mission is to foster a learning culture that goes beyond traditional methods and provides learners with the tools, resources, and inspiration to continue their educational journey for life. We are committed to helping every student who comes through our platform achieve their personal and professional goals, making education more accessible, affordable, and effective.
  </p>
</section>



      {/* Team Members Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageUrl} alt={`${member.name}`} className="team-member-photo" />
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
