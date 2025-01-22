import React from 'react';
import { BentoGrid, BentoCard } from './ui/bento-grid';
import Bpo from './Bpo';
import CloudServices from './CloudServices';
import SoftwareServices from './SoftwareServices';
import TechIconCloud from './TechIconCloud';
import { AuroraBackground } from './ui/aurora-background';
import { CodeIcon, CloudIcon, LayersIcon, GraduationCapIcon } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="relative">
      {/* Aurora Background */}
      <AuroraBackground className="absolute inset-0 -z-10 w-full h-full" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto p-6 space-y-16">
        {/* Dashboard Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Your Services Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our comprehensive offerings designed to accelerate your business.
          </p>
        </div>

        {/* Grid Layout */}
        <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(300px,auto)] gap-6">
          {/* BPO Component */}
          <BentoCard
            name="Business Process Outsourcing"
            className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-1 overflow-visible shadow-lg"
            background={
              <div className="h-[400px] w-full relative rounded-lg overflow-hidden flex items-center justify-center">
                <Bpo
                  className="absolute inset-0 scale-95 transform"
                  containerStyle={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            }
            Icon={LayersIcon}
            description="Streamline your business operations with our comprehensive BPO services."
            href="/bpo"
            cta="Learn about our BPO services"
          />

          {/* Certification Courses */}
          <BentoCard
            name="Certification Courses"
            className="col-span-1 sm:col-span-1 lg:col-span-2 row-span-1"
            background={
              <div className="h-[400px] w-full relative">
                <TechIconCloud
                  className="absolute inset-0"
                  containerStyle={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            }
            Icon={GraduationCapIcon}
            description="Discover courses to enhance your skills and achieve certifications."
            href="/certification-courses"
            cta="Browse courses"
          />

          {/* Cloud Services */}
          <BentoCard
            name="Cloud Consulting"
            className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1"
            background={
              <div className="h-[400px] w-full relative">
                <CloudServices
                  className="absolute inset-0 scale-90 transform"
                  containerStyle={{
                    height: '100%',
                    border: 'none',
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="CLOUD&#10;SERVICES"
                />
              </div>
            }
            Icon={CloudIcon}
            description="Expert guidance for your cloud transformation journey."
            href="/cloud-services"
            cta="Explore cloud solutions"
          />

          {/* Software Services */}
          <BentoCard
            name="Software Development"
            className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1"
            background={
              <div className="h-[400px] w-full relative">
                <SoftwareServices
                  className="absolute inset-0 scale-95 transform"
                  containerStyle={{
                    height: '100%',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            }
            Icon={CodeIcon}
            description="Custom software solutions tailored to your business needs."
            href="/software-services"
            cta="Discover our development services"
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default Dashboard;
