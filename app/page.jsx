'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Features from "@/components/FeatureSection";
import TechBundle from "@/components/TechBundle";
import Poll from "@/components/PollVoting";
import Testimonials from "@/components/Testimonials";
import FutureTech from "@/components/FutureTech";

const Home = () => {
  return (
    <>
      <Navbar/>
        <Hero/>
        <Features/>
        <TechBundle/>
        <Testimonials/>
        <FutureTech/>
        {/* <Poll/> */}
        {/* <HomeProducts /> */}
      <div className="px-6 md:px-16 lg:px-32">
        {/* <HeaderSlider /> */}
        {/* <FeaturedProduct /> */}
        {/* <Banner /> */}
        {/* <NewsLetter /> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
