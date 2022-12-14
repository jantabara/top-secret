import Head from "next/head";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Map from "../components/Map";
import WhatDoWeDo from "../components/WhatDoWeDo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eight Digit Club</title>
        <meta name="description" content="Eight Digit Club official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Not just another agency."
        message="We make app development feel easy."
      />
      <WhatDoWeDo />
      <WhyWorkWithUs />
      <Contact />
      <Map />
    </div>
  );
}
