import React from "react";

const WhyWorkWithUs = () => {
  return (
    <div className="pt-16 pb-24" style={{ backgroundColor: "#f4f4f4" }} id="why-choose-us">
      <div className="container mx-auto text-center">
        <div className="about mx-4 xl:mx-0">
          <div className="relative w-100 md:mx-4 lg:mx-0">
            <div className="max-w-fit ml-auto">
              <h1 className="text-4xl md:text-5xl font-extralight text-left mt-8 mb-16">
                Proč spolupracovat
              </h1>
              <p className="absolute right-0 top-12 font-thin">
                Pojďme udělat skvělý deal!
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
                <h3 className="about__heading">Nejsme žádní zelenáči</h3>
                <div className="about__text">
                  Všechny roky sečteny, nabízíme až dvanáct let zkušeností
                  v širokém spektru rozličných IT byznysů. Start-upy, digitální agentury, velké korporáty.
                  S těmi všemi jsme již v minulosti spolupracovali.
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
                <h3 className="about__heading">Cool technologie</h3>
                <div className="about__text">
                  V <b>Eight Digit Club</b>-u mluvíme hlavně JavaScriptem. To je ten důvod, proč dokážeme obsáhnout tak široké množství projektů.
                  Od mobilních aplikací až po full-blown webové systémy.
                  <br/>
                  <br/>
                  <i>#javascript #react</i>
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
                <h3 className="about__heading">Od přírody iterativní</h3>
                <div className="about__text">
                  Věříme v agile software development. Namísto do kamene vytesaných 
                  vývojových procesů, které nikdy nereflektují náhlé změny priorit,
                  preferujeme krátké iterace. Během nich neustále validujeme pokrok vzhledek k Vašim cílům.
                  Díky tomu jsme schopni ušít koncový produkt přímo na míru Vašim potřebám.
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
