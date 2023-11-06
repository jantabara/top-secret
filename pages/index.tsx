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
        <meta name="description" content="Eight Digit Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="EIGHT DIGIT CLUB."
        message="Propojujeme nápady se skutečností."
      />
      <WhatDoWeDo />
      <WhyWorkWithUs />
      <Contact />
      <Map />
    </div>
  );
}
