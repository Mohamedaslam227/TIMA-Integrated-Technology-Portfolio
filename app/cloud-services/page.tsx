"use client";

import React from 'react';
import { TextAnimate } from '../../components/ui/text-animate';
import { WobbleCard } from '../../components/ui/wobble-card';
import { SparklesCore } from '../../components/ui/sparkles';
import Footers from '../../components/Footers';
import { 
  ServerIcon, 
  DatabaseIcon, 
  ShieldIcon, 
  ScaleIcon, 
  NetworkIcon,
  ActivityIcon,
  CloudLightningIcon,
  BarChartIcon
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CloudServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <WobbleCard 
    containerClassName="w-full md:max-w-[350px] h-[350px] bg-gray-900"
  >
    <div className="flex flex-col justify-between h-full">
      <div className="text-white">
        <Icon className="w-14 h-14 mb-6 text-blue-400" strokeWidth={1.5} />
        <h3 className="text-2xl font-bold mb-4 text-blue-300">{title}</h3>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </div>
  </WobbleCard>
);

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: ServerIcon,
      title: "Cloud Infrastructure",
      description: "Robust and scalable cloud infrastructure solutions tailored to your business needs, ensuring optimal performance and reliability."
    },
    {
      icon: DatabaseIcon,
      title: "Data Management",
      description: "Advanced data storage, processing, and management strategies with cutting-edge security and intelligent analytics capabilities."
    },
    {
      icon: ShieldIcon,
      title: "Security Services",
      description: "Comprehensive cloud security solutions including threat detection, encryption, access management, and continuous monitoring."
    },
    {
      icon: ScaleIcon,
      title: "Scalability Consulting",
      description: "Expert guidance on dynamic cloud scaling, ensuring your infrastructure grows seamlessly with your business demands."
    }
  ];

  const additionalFeatures = [
    {
      icon: NetworkIcon,
      title: "Multi-Cloud Integration",
      description: "Seamless connectivity and management across multiple cloud platforms for maximum flexibility."
    },
    {
      icon: CloudLightningIcon,
      title: "Rapid Deployment",
      description: "Accelerated cloud migration and deployment strategies to minimize downtime and maximize efficiency."
    },
    {
      icon: ActivityIcon,
      title: "Performance Optimization",
      description: "Continuous performance monitoring and optimization to ensure peak cloud infrastructure performance."
    },
    {
      icon: BarChartIcon,
      title: "Cost Management",
      description: "Advanced cost optimization strategies to maximize your cloud investment and reduce unnecessary expenses."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Sparkle Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="cloud-services-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          particleColor="#4299e1"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TextAnimate 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            animation="blurInUp"
          >
            Cloud Services Transformation
          </TextAnimate>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revolutionizing digital landscapes through innovative, intelligent, and integrated cloud solutions.
          </p>
        </motion.div>

        {/* Core Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Core Cloud Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
              >
                <CloudServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Cloud Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                className="bg-gray-900 p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all"
              >
                <div className="text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-blue-300 mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cloud Partners Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Cloud Partners
          </h2>
          <div className="flex justify-center items-center space-x-8 opacity-70 hover:opacity-100 transition-opacity">
            <Image 
              src="/AWS.svg" 
              alt="AWS" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image 
              src="/AZURE.svg" 
              alt="Azure" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image 
              src="/GCP.svg" 
              alt="Google Cloud" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <TextAnimate 
            className="text-3xl font-bold text-white mb-6"
            animation="slideUp"
          >
            Transform Your Cloud Strategy Today
          </TextAnimate>
          <button className="px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
            Schedule Consultation
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <Footers />
    </div>
  );
};

export default CloudServicesPage;