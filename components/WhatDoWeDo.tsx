import React from "react";

const WhatDoWeDo = () => {
  return (
    <div className="background--has-stripes pt-16 pb-24" id="about">
      <div className="container mx-auto text-center">
        <div className="about mx-4 xl:mx-0">
          <div className="relative md:mx-4 lg:mx-0 max-w-fit">
            <h1 className="text-4xl md:text-5xl font-extralight text-left mt-8 mb-20">
              Naše služby
            </h1>
            <p className="absolute right-0 top-12 font-thin">
              Na co se zaměřujeme?
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
                <h3 className="about__heading">Vývoj aplikací</h3>
                <div className="about__text">
                  Toto je důvod, proč jsme tady. Vývoj aplikací je to, co milujeme a co nám jde ze všeho nejlépe. 
                  Od mobilních aplikací až po složité webové systémy, není nic co bychom nedokázali doručit. Programujeme a udržujeme v chodu jakoukoliv ideu, či business logiku.
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
                <h3 className="about__heading">Konzultace</h3>
                <div className="about__text">
                  Již máte aplikaci, ale častokrát se Vám stává, že nefunguje?
                  Žádný problém! Můžeme Vám pomoci identifikovat slabá místa ve výkonu aplikace, 
                  odladit chyby nebo refaktorovat Váš projekt, aby používal <b>nejmodernější technologie</b>.
                  Také dokážeme poskytnout rady a konzultace na míru.
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
                  Máte úžasný nápad, ale nechcete strávit tisíce hodin Vašeho mládí
                  sledováním těch nejotravnějších Indických tutoriálů na YouTube?
                  Nebo nemáte tučný počáteční rozpočet do startu? Již se nemusíte dále obávat, stále si můžeme plácnout!
                  Svěřte nám Váš nápad a spolupráce může<b> začít již dnes!</b>
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
