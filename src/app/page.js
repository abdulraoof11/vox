import About from "@/components/landing-page/About";
import Aisolution from "@/components/landing-page/Aisolution";
import Card from "@/components/landing-page/Card";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Lecture from "@/components/landing-page/Lecture";
import Plan from "@/components/landing-page/Plan";
import Header from "@/components/landing-page/header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Card />
      <Aisolution />
      <Features />
      <About />
      <Lecture />
      <Plan />
      <Footer />
    </div>
  );
};

export default page;
