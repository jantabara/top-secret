import Head from "next/head";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Portfolio from "../components/Portfolio";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eight Digit Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Portfolio />
      <Slider slides={SliderData} />
      <Instagram />
      <Contact />
    </div>
  );
}
