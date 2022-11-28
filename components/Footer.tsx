import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="mb-4">
          <div className="flex justify-center w-24 md:w-32 mb-6 md:mb-0 xl:ml-0 ml-8">
            <img src="/edc_white.svg" />
          </div>
          <div className="footer__copy mx-8 xl:mx-0">
            <hr className="footer__delimiter md:my-12" />
          </div>
        </div>
      </div>
      <div
        className="container sm:p-8 xl:p-0"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="row">
          <div className="footer-col pl-8 md:pl-0">
            <h4>Contact & Address</h4>
            <ul className="footer-row mt-4">
              <li>Eight Digit Club s.r.o.</li>
              <li>Lidická 700/19, Veveří, 602 00 Brno</li>
              <li>Registration ID: 17423724</li>
              <li>
                <a className="footer-email" href="mailto:info@8digit.club">
                  info@8digit.club
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col pl-8 md:pl-0 md:ml-16">
            <h4>Follow us</h4>
            <div className="social-links footer-row mt-4">
              <a href="#">
                <FaLinkedin size={22} className="m-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
