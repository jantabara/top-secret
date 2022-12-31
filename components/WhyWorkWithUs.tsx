import React from "react";

const WhyWorkWithUs = () => {
  return (
    <div className="pt-16 pb-24" style={{ backgroundColor: "#f4f4f4" }} id="why-choose-us">
      <div className="container mx-auto text-center">
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
                  We believe in agile software development. Instead of
                  set-in-stone development model, which never reflects sudden
                  changes of priorities, we prefer short iterations. During
                  these, we validate the progress with your goals. Thanks to
                  that, we are able to tailor the final product to your needs.
                  As a client, you are always a part of the development process!
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
