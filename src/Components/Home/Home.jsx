import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <>
      <div className="landing-page container mx-auto bg-sky-300 text-center h-[94vh]">
        <header className="hero-section pt-20">
          <h1 className="text-5xl font-semibold">
            <span className="highlight text-[#00d1b2]">Unlock</span> Your Creative Potential
          </h1>
          <h2 className="text-2xl mt-8 font-medium">with Online Design and Development Courses.</h2>
          <p className="text-md text-[#666] mt-3">Learn from Industry Experts and Enhance Your Skills.</p>
        </header>

        <div className="video-section flex justify-center mt-36 h-[50%]  mx-auto">
        <video controls>
          <source src="https://www.youtube.com/watch?v=toTzrUgpMSs" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    </>
  );
}

export default Home;
