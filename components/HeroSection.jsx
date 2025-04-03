"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Adjust this path as per your assets

const Hero = () => {
  return (
    <section className="relative flex items-center justify-between w-full h-screen px-8 md:px-16 bg-gradient-to-r from-blue-600 to-indigo-700">

      {/* Top Symbol with margin */}
      <div className="absolute top-0 left-0 w-full flex justify-center mt-8">
        <motion.div
          className="flex items-center justify-center text-white text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <span className="mr-2">⭐</span> {/* This is the symbol */}
          <span className="font-semibold">Exclusive Offer!</span>
        </motion.div>
      </div>

      {/* Left Section - Content */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full h-full text-left space-y-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          The Best Deals on Electronics
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Shop the latest gadgets, from smartphones to headphones. Unlock unbeatable prices and exclusive offers!
        </motion.p>

        <motion.button
          className="bg-yellow-500 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transform transition-all hover:bg-yellow-600 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          Shop Now
        </motion.button>

        {/* Promotional Banner */}
        <motion.div
          className="text-white text-lg mt-8 flex items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <span className="bg-red-500 py-2 px-4 rounded-full text-sm font-semibold">
            Festive Season Sale
          </span>
          <span className="text-gray-200">Up to 50% off on selected items</span>
        </motion.div>
      </div>
      

      {/* Right Section - Featured Product */}
      <div className="relative z-10 flex items-center justify-center md:w-1/2 mt-10 md:mt-0">
        <motion.div
          className="w-full max-w-xs md:max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {/* Featured Product Image */}
          <Image
            src={assets.apple_earphone_image} // Replace with the correct path
            alt="Featured Product"
            width={500}
            height={500}
            className="rounded-xl shadow-xl"
            priority
          />
        </motion.div>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30"></div>

      {/* Floating Circles for Effect */}
      <motion.div
        className="absolute top-[10%] left-1/ w-32 h-32 bg-blue-300 rounded-full opacity-30"
        animate={{
          y: ["0%", "50%", "0%"],
          x: ["0%", "10%", "0%"],
        }}
        transition={{ duration: 6, ease: "easeInOut", loop: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/2 w-40 h-40 bg-indigo-300 rounded-full opacity-30"
        animate={{
          y: ["0%", "-20%", "0%"],
          x: ["0%", "-10%", "0%"],
        }}
        transition={{ duration: 6, ease: "easeInOut", loop: Infinity }}
      ></motion.div>
      
    </section>
    
  );
};

export default Hero;
