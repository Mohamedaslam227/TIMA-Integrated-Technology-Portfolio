"use client";
import React from "react";
import { TextAnimate } from "./ui/text-animate";
import MagicButton from "./ui/MagicButton";
import { BackgroundBeams } from "./ui/background-beams";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  const handleScrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#f9f4f1] via-[#e9e4da] to-[#d7d2cc] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <BackgroundBeams className="z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-br from-[#d1d8fc] to-[#99a4f5] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[25rem] lg:h-[25rem] bg-gradient-to-br from-[#b3baf7] to-[#8a95ef] rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start mb-6">
            <Image
              src="/Tima Logo.png"
              alt="Company Logo"
              width={180}
              height={180}
              className="animate-shimmer"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#050a90] leading-snug relative">
            <TextAnimate
              animation="fadeIn"
              by="word"
              duration={0.5}
              delay={0.2}
              className="inline-block"
            >
              TIMA Integrated Technology
            </TextAnimate>
          </h1>

          {/* Subtext */}
          <TextAnimate
            animation="fadeIn"
            by="line"
            duration={0.5}
            delay={0.2}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#050a90] leading-relaxed"
          >
            Together we innovate, empower, and deliver exceptional technology
            solutions tailored to your growth and success.
          </TextAnimate>

          {/* Call-to-Action */}
          <div className="mt-4 md:mt-6">
          <MagicButton
        tittle={"Get in Touch"}
        icon={<FaPhone />}
        position={"left"}
        otherClasses="gap-2"
        onClick={handleScrollToFooter} // Pass the onClick handler here
      />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 relative">
          {/* Illustration */}
          <Image
            src="/Solution.svg"
            alt="Hero Illustration"
            width={700}
            height={700}
            className="w-64 sm:w-80 md:w-[28rem] lg:w-[36rem] transform hover:scale-105 transition duration-500 ease-in-out"
          />

          {/* Decorative Circle */}
          <div className="absolute -z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-r from-[#99a4f5] to-[#6d7ce8] rounded-full blur-3xl opacity-50"></div>

          {/* Tagline Overlay */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 right-0 sm:right-4 md:right-8 lg:right-12 bg-gradient-to-br from-[#050a90] to-[#4a6fff] px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-lg">
          <TextAnimate
        animation="slideLeft"
  by="word"
  duration={0.5}
  delay={0.2}
  className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold italic"
>
  &quot;Together We Raise, Together We Thrive.&quot;
</TextAnimate>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
