import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" data-aos="fade-up" data-aos-duration="800">
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
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col pl-8 md:pl-0">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col pl-8 md:pl-0">
            <h4>blog</h4>
            <ul>
              <li>
                <a href="#">latest articles</a>
              </li>
              <li>
                <a href="#">featured</a>
              </li>
            </ul>
          </div>
          <div className="footer-col pl-8 md:pl-0">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <FaFacebook size={28} className="m-1.5" />
              </a>
              <a href="#">
                <FaTwitter size={28} className="m-1.5" />
              </a>
              <a href="#">
                <FaInstagram size={28} className="m-1.5" />
              </a>
              <a href="#">
                <FaLinkedin size={28} className="m-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
