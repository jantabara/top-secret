// import Image from "next/image";
import React from "react";

const WhatDoWeDo = () => {
  return (
    <div className="background--has-stripes pt-16 pb-32">
      <div className="container mx-auto text-center" id="about">
        <div className="about mx-4 xl:mx-0">
          <div className="relative md:mx-4 lg:mx-0 max-w-fit">
            <h1 className="text-4xl md:text-5xl font-extralight text-left mt-8 mb-20">
              What do we do
            </h1>
            <p className="absolute right-0 top-12 font-thin">
              Discover our specialization.
            </p>
          </div>
          <div className="about__container">
            <div
              className="about__segment"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <div className="about__content">
                <h3 className="about__heading">Application Development</h3>
                <div className="about__text">
                  This is why we are here. Application development is what we
                  love and what we do best. Ranging from mobile apps, PWAs to
                  full-scale web applications, we can deliver any of these with
                  an effortless swing of our keyboards. We code, we deploy and
                  we maintain whatever your business logic might be.
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
                <h3 className="about__heading">Consulting</h3>
                <div className="about__text">
                  You already have an application, but it's oftentimes
                  misbehaving? No problem at all! We can help you identify
                  performance bottlenecks, exterminate bugs or refactor your
                  solution to using cutting-edge technologies. We can also
                  provide advice and consulting.
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
                <h3 className="about__heading">Launchpad</h3>
                <div className="about__text">
                  You have got an amazing idea, but you do not want to take the
                  struggle of watching thousands upon thousands of hours of the
                  best Indian coding tutorials? And you do not have the starting
                  money capital either? Worry no longer, because we can still
                  make a wonderful deal! Tell us your idea and we can start
                  co-operating as soon as today!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeDo;
