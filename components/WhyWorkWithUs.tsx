// import Image from "next/image";
import React from "react";

const WhyWorkWithUs = () => {
  return (
    <div className="pt-8 pb-24" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container mx-auto text-center" id="about">
        <div className="about mx-4 xl:mx-0">
          <div className="relative w-100 md:mx-4 lg:mx-0">
            <div className="max-w-fit ml-auto">
              <h1 className="text-4xl md:text-5xl font-extralight text-left mt-8 mb-16">
                Why work with us
              </h1>
              <p className="absolute right-0 top-12 font-thin">
                Let's make a great deal!
              </p>
            </div>
          </div>
          <div className="about__container">
            <div
              className="about__segment"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <div className="about__content">
                <h3 className="about__heading">No new kid on the block</h3>
                <div className="about__text">
                  All years combined, we can offer as much as twelve years of
                  experience in a great scale of various businesses. We have
                  took part in multiple start-ups, digital agencies, but also
                  delivered solutions for medium-sized to corporate scale
                  organizations.
                </div>
              </div>
            </div>
            <div
              className="about__segment mt-4 lg:mt-32"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <div className="about__content">
                <h3 className="about__heading">Using the cool tech</h3>
                <div className="about__text">
                  In Eight Digit Club we speak mainly JavaScript. That's why you
                  can find us working on a super-wide spectrum of projects.
                  Ranging from native mobile apps to full-blown web
                  applications, there is nothing our team cannot handle!
                </div>
              </div>
            </div>
            <div
              className="about__segment mt-4 lg:mt-64"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <div className="about__content">
                <h3 className="about__heading">Naturally iterative</h3>
                <div className="about__text">
                  We believe that business should be fun. That is why want to
                  take some of your responsibility with software off of your
                  back. So while you have fun with your business, we take care
                  of the coding and project management.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
