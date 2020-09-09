import React from "react";
import "../app.scss";
import HeroSection from "../components/Hero/HeroSection";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;
