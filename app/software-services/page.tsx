"use client";

import React from 'react';
import { Meteors } from '../../components/ui/meteors';
import { WobbleCard } from '../../components/ui/wobble-card';
import { TextAnimate } from '../../components/ui/text-animate';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footers from '../../components/Footers';  // Import the footer component

import { FaRocket, FaCode, FaCloudDownloadAlt } from 'react-icons/fa';

const ServiceSection = ({ 
  title, 
  description, 
  technologies, 
  features, 
  bgColor, 
  textColor,
  icon: Icon
}: {
  title: string;
  description: string;
  technologies: { name: string; icon: string }[];
  features: string[];
  bgColor: string;
  textColor: string;
  icon: React.ElementType;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`min-h-screen flex items-center relative overflow-hidden ${bgColor}`}
  >
    <div className="absolute inset-0 z-0">
      <Meteors number={40} />
    </div>
    
    <div className="max-w-6xl mx-auto relative z-10 px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <Icon className={`text-6xl ${textColor}`} />
            <TextAnimate 
              as="h2" 
              className={`text-5xl font-bold ${textColor}`}
              animation="slideUp"
            >
              {title}
            </TextAnimate>
          </div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5 
                }}
                className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm p-4 rounded-xl 
                           hover:scale-[1.02] hover:shadow-lg transition-all duration-300 
                           border border-transparent hover:border-blue-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-blue-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-lg text-gray-800">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <WobbleCard 
              key={index}
              containerClassName="bg-white/30 backdrop-blur-sm p-6 rounded-2xl 
                                 shadow-lg hover:shadow-xl transition-shadow duration-300 
                                 group relative overflow-hidden"
            >
              <div className="flex flex-col items-center relative z-10">
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  width={120} 
                  height={120} 
                  className="mb-4 transition-transform duration-300 
                             group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="text-lg font-semibold text-gray-800 
                                 transition-colors duration-300 
                                 group-hover:text-blue-600">
                  {tech.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              z-0"></div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const SoftwareServicesPage: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Crafting responsive, high-performance web applications with cutting-edge technologies that bring your digital vision to life.",
      technologies: [
        { name: "Next.js", icon: "/NEXT JS.svg" },
        { name: "React", icon: "/REACT.svg" },
        { name: "TypeScript", icon: "/TS.svg" },
        { name: "Tailwind", icon: "/TAILWIND CSS.svg" }
      ],
      features: [
        "Responsive & Adaptive Design",
        "SEO Optimized Architectures",
        "High-Performance Web Solutions",
        "Scalable Frontend Development"
      ],
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      icon: FaCode
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications that deliver seamless user experiences with native-like performance.",
      technologies: [
        { name: "Flutter", icon: "/FLUTTER.svg" },
        { name: "React Native", icon: "/REACT.svg" },
        { name: "Dart", icon: "/DART.svg" },
        { name: "Firebase", icon: "/FIREBASE.svg" }
      ],
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "Intuitive UI/UX Design",
        "Rapid Deployment Strategies"
      ],
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      icon: FaRocket
    },
    {
      title: "Cloud Engineering",
      description: "Implementing robust cloud solutions and DevOps strategies to enhance scalability, security, and operational efficiency.",
      technologies: [
        { name: "AWS", icon: "/AWS.svg" },
        { name: "Azure", icon: "/AZURE.svg" },
        { name: "Docker", icon: "/docker.svg" },
        { name: "Kubernetes", icon: "/kubernetes.svg" }
      ],
      features: [
        "Scalable Cloud Architectures",
        "Continuous Integration",
        "Infrastructure as Code",
        "Enhanced Security Protocols"
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900",
      icon: FaCloudDownloadAlt
    }
  ];

  return (
    <div className="bg-white relative">
      <div className="text-center py-24 bg-gradient-to-b from-white to-blue-50">
        <TextAnimate 
          as="h1" 
          className="text-6xl font-bold text-gray-900 mb-6"
          animation="blurInUp"
        >
          Software Development Services
        </TextAnimate>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-6">
          Transforming complex challenges into innovative, scalable software solutions that drive technological excellence.
        </p>
      </div>

      <div>
        {services.map((service, index) => (
          <ServiceSection 
            key={index}
            {...service}
          />
        ))}
      </div>

      <Footers />
    </div>
  );
};

export default SoftwareServicesPage;