import Link from "next/link";

const DefaultFooter = ({ dark }) => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      style={{ width: 200 }}
                      src={
                        dark
                          ? "assets/images/logos/footer-logo-white.png"
                          : "assets/images/logos/edc_black.svg"
                      }
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a target="_blank" href="https://www.instagram.com/8digitclub/">
                  <i className="fab fa-instagram" /> <span>Instagram</span>
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/eight-digit-club/">
                  <i className="fab fa-linkedin" /> <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <span>Pojďme si plácnout</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="mailto:info@8digit.club"
                >
                  info@8digit.club <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="callto:+420737605550"
                >
                  +420 737 605 550 <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                Rychlé odkazy
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <Link legacyBehavior href="/">
                      Domů
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/404">
                      O nás
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/404">
                      Projekty
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/404">
                      Reference
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/404">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated">
                {/* <ul>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faqs">
                      <a>FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      How IT Works
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright &copy;2024,{" "}
                  <Link legacyBehavior href="/">
                    <a>Eight Digit Club, s.r.o.</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
