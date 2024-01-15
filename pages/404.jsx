import Layout from "@/src/layout/Layout";
import Link from "next/link";
const E404 = () => {
  return (
    <Layout>
      <section
        className="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-55 wow fadeInRight delay-0-2s">
                <h1>Jejda!</h1>
                <div className="section-title mb-50 rmb-35">
                  <h2>Omlouváme se, ale tuto část teprve připravujeme.</h2>
                </div>
                <Link legacyBehavior href="/">
                  <a className="theme-btn style-two">
                    Zpět domů <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <div className="social-style-four d-flex mt-60 rmt-35">
                  <a target="_blank" href="https://www.instagram.com/8digitclub/">
                    <i className="fab fa-instagram" /> <span>Instagram</span>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" /> <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow zoomIn delay-0-2s">
                {/* <img
                  src="assets/images/logos/edc_black.svg"
                  alt="404 Error"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 404 Error Section End */}
    </Layout>
  );
};
export default E404;
