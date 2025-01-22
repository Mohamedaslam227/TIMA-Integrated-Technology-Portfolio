"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { WobbleCard } from "./ui/wobble-card";
import { SparklesCore } from "./ui/sparkles";
import { TextAnimate } from "./ui/text-animate";
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
};

const features: Feature[] = [
  {
    title: "Expertise",
    description: "A highly skilled and dynamic team with years of experience across multiple industries.",
    icon: <FaCheckCircle className="text-blue-500 w-8 h-8" />,
    image: "/Experts.svg",
  },
  {
    title: "Innovation",
    description: "Cutting-edge technology solutions that ensure your business stays ahead of the curve.",
    icon: <FaLightbulb className="text-yellow-500 w-8 h-8" />,
    image: "/Innovate.svg",
  },
  {
    title: "Reliability",
    description: "A commitment to delivering on our promises and supporting our clients every step of the way.",
    icon: <FaShieldAlt className="text-green-500 w-8 h-8" />,
    image: "/Performance.svg",
  },
  {
    title: "Growth-Focused",
    description: "From startups to established enterprises, we tailor our services to meet your unique goals and objectives.",
    icon: <FaChartLine className="text-red-500 w-8 h-8" />,
    image: "/Growth Focused.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-[#d1d8fc] to-[#99a4f5] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#b3baf7] to-[#8a95ef] rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TextAnimate
            animation="fadeIn"
            by="word"
            duration={0.6}
            delay={0.2}
            className="text-base font-semibold text-[#050a90] tracking-wide uppercase"
          >
            Why Choose Us?
          </TextAnimate>
          <TextAnimate
            animation="slideUp"
            by="line"
            duration={0.8}
            delay={0.4}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Our Key Differentiators
          </TextAnimate>
        </motion.div>

        <motion.div
          className="mt-10 space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                />
              </div>

              {/* Card */}
              <WobbleCard
                containerClassName="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 relative overflow-hidden w-full md:w-1/2"
                className="rounded-xl p-6"
              >
                {/* Sparkles Effect */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <SparklesCore
                    id={`sparkles-${index}`}
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.2}
                    particleDensity={60}
                    speed={1.2}
                    particleColor="#6A0DAD"
                  />
                </div>

                <div className="relative z-10 flex items-center space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <TextAnimate
                      animation="slideUp"
                      by="word"
                      duration={0.6}
                      delay={0.2}
                      className="text-lg font-bold text-gray-800 dark:text-white"
                    >
                      {feature.title}
                    </TextAnimate>
                    <TextAnimate
                      animation="fadeIn"
                      by="line"
                      duration={0.8}
                      delay={0.4}
                      className="text-gray-600 dark:text-gray-300 mt-2"
                    >
                      {feature.description}
                    </TextAnimate>
                  </div>
                </div>
              </WobbleCard>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
