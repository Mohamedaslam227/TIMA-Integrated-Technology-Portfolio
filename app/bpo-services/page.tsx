"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Cpu, 
  Users, 
  Workflow, 
  BarChart, 
  Shield, 
  Check 
} from 'lucide-react';
import Footers from '../../components/Footers';

// Service Highlight Component
const ServiceHighlight = ({ icon: Icon, title, description, highlights, active, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-2xl shadow-lg p-6 space-y-4 transform transition-all ${
      active ? `border-${color}-500` : "border-transparent"
    } hover:shadow-xl border-2`}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className={`bg-${color}-50 p-3 rounded-full`}>
        <Icon className={`h-8 w-8 text-${color}-600`} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {active && (
      <ul className="space-y-2 text-gray-700">
        {highlights.map((highlight, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <Check className={`mr-2 text-${color}-500`} size={20} />
            {highlight}
          </motion.li>
        ))}
      </ul>
    )}
  </motion.div>
);

const BpoPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expanding your business beyond geographical boundaries.",
      highlights: [
        "International market penetration",
        "Cross-cultural business solutions",
        "Localized strategic support",
      ],
      color: "blue",
    },
    {
      icon: Cpu,
      title: "Technology Enablement",
      description: "Transforming business processes through innovative tech.",
      highlights: [
        "AI-driven process optimization",
        "Cloud technology integration",
        "Digital transformation strategies",
      ],
      color: "blue",
    },
    {
      icon: Users,
      title: "Talent Management",
      description: "Strategic workforce solutions tailored to your needs.",
      highlights: [
        "Comprehensive talent acquisition",
        "Skill development programs",
        "Performance-driven recruitment",
      ],
      color: "blue",
    },
  ];

  const processMilestones = [
    {
      icon: Workflow,
      title: "Process Analysis",
      description: "Comprehensive evaluation of existing business workflows.",
      color: "blue",
    },
    {
      icon: BarChart,
      title: "Performance Optimization",
      description: "Data-driven improvements and strategic interventions.",
      color:"blue",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of potential risks.",
      color: "blue",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <AnimatePresence>
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Business Process <span className="text-blue-600">Optimization</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses through strategic outsourcing, innovative technology, and exceptional talent management.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(service.title)}
                onMouseLeave={() => setActiveService(null)}
              >
                <ServiceHighlight
                  {...service}
                  active={activeService === service.title}
                />
              </div>
            ))}
          </div>

          {/* Process Milestones */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Strategic Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {processMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveMilestone(milestone.title)}
                  onMouseLeave={() => setActiveMilestone(null)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.2 }}
                  className={`bg-white rounded-2xl shadow-lg p-8 text-center border-2 ${
                    activeMilestone === milestone.title
                      ? `border-${milestone.color}-500`
                      : "border-transparent"
                  }`}
                >
                  <div className={`text-5xl text-${milestone.color}-600 mb-6 flex justify-center`}>
                    <milestone.icon strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatePresence>

      <Footers />
    </div>
  );
};

export default BpoPage;
