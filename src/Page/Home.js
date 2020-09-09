import React from "react";
import "../app.scss";
import HeroSection from "../components/Hero/HeroSection";
import Cards from "../components/Cards/Cards";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
