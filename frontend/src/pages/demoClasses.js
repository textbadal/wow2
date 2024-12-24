import React, { useRef } from 'react';
import './demoClasses.css'; // We will style this component next

const DemoClasses = () => {
  // Step 2: Create video refs for individual control
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const toggleVideo = (videoRef) => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section className="demo-classes-section">
      <h2>Demo Classes</h2>
      <div className="demo-classes-container">
        {/* Demo Class 1 */}
        <div className="demo-class-card">
          <video
            className="demo-class-video"
            ref={videoRef1}
            controls
            width="100%"  // Full width on smaller screens
          >
            <source src="/videos/demo1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p className="demo-class-name">Class 0: Introduction to ANSYS</p>
          <button
            className="demo-class-button"
            onClick={() => toggleVideo(videoRef1)}
          >
            {videoRef1.current?.paused ? 'Play' : 'Pause'}
          </button>
        </div>

        {/* Demo Class 2 */}
        <div className="demo-class-card">
          <video
            className="demo-class-video"
            ref={videoRef2}
            controls
            width="100%"  // Full width on smaller screens
          >
            <source src="/videos/demo2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p className="demo-class-name">Class 1: Introduction to STAAD.PRO</p>
          <button
            className="demo-class-button"
            onClick={() => toggleVideo(videoRef2)}
          >
            {videoRef2.current?.paused ? 'Play' : 'Pause'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoClasses;
