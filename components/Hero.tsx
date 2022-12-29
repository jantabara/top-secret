import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="hero flex items-center justify-center h-screen bg-center bg-cover hero__custom-img">
      <div className="hero__overlay absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] flex">
        <div className="p-5 text-white z-[2] m-auto">
          <h2
            data-aos="zoom-out"
            data-aos-duration="800"
            className="text-3xl md:text-5xl font-bold hero__heading"
          >
            {heading}
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="800"
            className="py-1 text-xl font-thin"
          >
            {message}
          </p>
          {/* <button className="px-8 py-2 border">Book</button> */}
        </div>
      </div>
      <div className="absolute overflow-hidden hero__custom-video top-0">
        <video autoPlay muted loop className="hero__video mobile-no-load">
          <source data-src="background.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
