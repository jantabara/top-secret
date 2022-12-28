import { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import Footer from "../components/Footer";

import "../styles/globals.css";
import "aos/dist/aos.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      <Script src="video-optimize.js" />
    </>
  );
}

export default MyApp;
