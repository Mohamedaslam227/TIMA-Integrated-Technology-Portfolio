"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { 
  GraduationCapIcon, 
  BriefcaseIcon,
  ArrowRightIcon, 
  MailIcon, 
  BookOpenIcon,
  CheckCircleIcon,
  UserIcon,
  CalendarIcon,
  AwardIcon,
  CodeIcon,
  CloudIcon,
  ServerIcon,
  UserCircle2,
  ArrowDownIcon,
  PhoneIcon,
  ClockIcon,
  HeartIcon
} from 'lucide-react';
import Footers from "../../components/Footers";

// Validation Schema
const EnrollmentSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Please provide your name'),
  phone: z.string().min(10, 'Please provide a valid phone number')
});

// Types
type CourseCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  courses: Course[];
};

type Course = {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  features: string[];
  certification: string;
};

type UserData = {
  email: string;
  name: string;
  phone: string;
};

// Course Categories Data
const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: <CloudIcon className="h-8 w-8" />,
    description: 'Master cloud platforms and technologies to design, deploy and manage cloud infrastructure',
    courses: [
      {
        id: 'aws-cert',
        title: 'AWS Certified Solutions Architect',
        duration: '12 Weeks',
        level: 'Intermediate to Advanced',
        description: 'Comprehensive certification covering AWS architecture, services, and best practices for cloud solutions.',
        features: [
          'Hands-on labs with real AWS environments',
          'Preparation for AWS certification exams',
          'Design patterns for scalable architectures',
          'Security best practices in AWS'
        ],
        certification: 'AWS Certified Solutions Architect - Associate & Professional'
      },
      {
        id: 'azure-cert',
        title: 'Microsoft Azure Administrator',
        duration: '10 Weeks',
        level: 'Intermediate',
        description: 'Learn to implement, monitor, and maintain Microsoft Azure solutions including major services related to compute, storage, network, and security.',
        features: [
          'Azure virtual machines and networks',
          'Azure Active Directory management',
          'Implementing security solutions',
          'Managing Azure subscriptions'
        ],
        certification: 'Microsoft Certified: Azure Administrator Associate'
      },
      {
        id: 'gcp-cert',
        title: 'Google Cloud Engineer',
        duration: '10 Weeks',
        level: 'Intermediate',
        description: 'Master Google Cloud Platform services for deploying applications, monitoring operations, and managing enterprise solutions.',
        features: [
          'Google Compute Engine and Kubernetes',
          'Cloud Storage and Database solutions',
          'Networking in GCP',
          'Security and identity management'
        ],
        certification: 'Google Cloud Certified - Professional Cloud Engineer'
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: <CodeIcon className="h-8 w-8" />,
    description: 'Build strong programming foundations with industry-standard languages and practices',
    courses: [
      {
        id: 'python-cert',
        title: 'Python Programming',
        duration: '8 Weeks',
        level: 'Beginner to Intermediate',
        description: 'Comprehensive Python programming course covering fundamentals through advanced concepts like OOP, data structures, and web development.',
        features: [
          'Python syntax and programming concepts',
          'Object-oriented programming principles',
          'Data structures and algorithms',
          'Web development with Django/Flask'
        ],
        certification: 'Certified Python Developer'
      },
      {
        id: 'java-cert',
        title: 'Java Development',
        duration: '10 Weeks',
        level: 'Beginner to Intermediate',
        description: 'Master Java programming with emphasis on enterprise application development, Spring framework, and microservices.',
        features: [
          'Core Java and object-oriented concepts',
          'Spring Boot for microservices',
          'Database connectivity with JDBC/JPA',
          'Testing and deployment strategies'
        ],
        certification: 'Certified Java Developer'
      },
      {
        id: 'cpp-cert',
        title: 'C/C++ Programming',
        duration: '12 Weeks',
        level: 'Intermediate',
        description: 'Dive deep into C and C++ programming for system-level development, game engines, and high-performance applications.',
        features: [
          'Memory management and pointers',
          'Object-oriented programming in C++',
          'STL and modern C++ features',
          'Performance optimization techniques'
        ],
        certification: 'Professional C/C++ Developer'
      }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    icon: <ServerIcon className="h-8 w-8" />,
    description: 'Complete end-to-end web development training covering frontend, backend, and deployment',
    courses: [
      {
        id: 'mern-cert',
        title: 'MERN Stack Development',
        duration: '16 Weeks',
        level: 'Intermediate',
        description: 'Comprehensive training on MongoDB, Express.js, React, and Node.js for building modern web applications.',
        features: [
          'Frontend development with React',
          'Server-side development with Node.js',
          'Database design with MongoDB',
          'Full stack application deployment'
        ],
        certification: 'Certified MERN Stack Developer'
      },
      {
        id: 'java-fullstack',
        title: 'Java Full Stack',
        duration: '16 Weeks',
        level: 'Intermediate to Advanced',
        description: 'Master enterprise application development with Spring Boot, Hibernate, and modern frontend frameworks.',
        features: [
          'Spring Boot and Spring Cloud',
          'Hibernate ORM and JPA',
          'Frontend with Angular/React',
          'Microservices architecture'
        ],
        certification: 'Professional Java Full Stack Developer'
      },
      {
        id: 'dotnet-fullstack',
        title: '.NET Full Stack Development',
        duration: '14 Weeks',
        level: 'Intermediate',
        description: 'End-to-end development with .NET Core, C#, SQL Server, and modern frontend technologies.',
        features: [
          'ASP.NET Core MVC and Web API',
          'Entity Framework Core',
          'Frontend with Blazor/Angular',
          'Azure deployment and DevOps'
        ],
        certification: 'Microsoft Certified: .NET Full Stack Developer'
      }
    ]
  }
];

// Testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "AWS Certified Solutions Architect",
    image: "/api/placeholder/80/80",
    quote: "The placement support was exceptional. Within a month of completing my AWS certification, I had multiple job offers from top tech companies."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    image: "/api/placeholder/80/80",
    quote: "The mock interviews and resume building workshops gave me the confidence I needed to ace my interviews. Now I'm working at my dream company!"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Python Developer",
    image: "/api/placeholder/80/80",
    quote: "The hands-on projects and real-world scenarios helped me build a portfolio that impressed employers. The career guidance was invaluable."
  }
];

// Stats data
const STATS = [
  { id: 1, value: "95%", label: "Placement Rate" },
  { id: 2, value: "700+", label: "Companies Hiring" },
  { id: 3, value: "15,000+", label: "Students Certified" },
  { id: 4, value: "40%", label: "Salary Increase" }
];

// Hero Section
const HeroSection = () => {
  const enrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToEnroll = () => {
    enrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/30" />
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        {/* Company Logo and Name */}
        <div className="flex items-center justify-center md:justify-start mb-12">
          <img 
            src="Tima Logo.png" 
            alt="TIMA Integrated Technologies Logo" 
            className="h-16 md:h-20 mr-4"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">TIMA Integrated Technologies</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Together We Raise Together We Thrive </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
                Industry-Recognized Certifications
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Accelerate Your <span className="text-blue-600 dark:text-blue-400">Tech Career</span> With Expert Certification
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Our certification programs combine hands-on training, placement assistance, and interview preparation to help you land your dream tech job.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToEnroll}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  Enroll Now <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <a 
                  href="#courses" 
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                >
                  Explore Courses <ArrowDownIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-6">
                {STATS.map(stat => (
                  <div key={stat.id} className="bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-1 p-1">
                <div className="aspect-square bg-blue-100 dark:bg-blue-900/30 rounded-tl-xl overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center p-4">
                    <CloudIcon className="h-20 w-20 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="aspect-square bg-purple-100 dark:bg-purple-900/30 rounded-tr-xl overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center p-4">
                    <CodeIcon className="h-20 w-20 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="aspect-square bg-green-100 dark:bg-green-900/30 rounded-bl-xl overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center p-4">
                    <ServerIcon className="h-20 w-20 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="aspect-square bg-indigo-100 dark:bg-indigo-900/30 rounded-br-xl overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center p-4">
                    <GraduationCapIcon className="h-20 w-20 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/80 to-transparent dark:from-gray-800/80 backdrop-blur-sm">
                <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg max-w-md m-4">
                  <div className="flex items-center mb-4">
                    <AwardIcon className="h-10 w-10 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certification Benefits</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Industry-recognized qualifications</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {['Expert instructors', 'Hands-on projects', 'Job placement assistance', 'Interview preparation'].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Benefits Section
const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Our Certification Programs?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive training programs designed to prepare you for industry demands and career success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <GraduationCapIcon className="h-8 w-8 text-blue-600" />,
              title: "Industry-Recognized Certifications",
              description: "Our programs are aligned with the latest industry standards and recognized by leading tech companies worldwide."
            },
            {
              icon: <UserIcon className="h-8 w-8 text-blue-600" />,
              title: "Expert Instructors",
              description: "Learn from seasoned professionals with extensive experience in their respective fields and technologies."
            },
            {
              icon: <CalendarIcon className="h-8 w-8 text-blue-600" />,
              title: "Flexible Learning Schedule",
              description: "Choose from weekend, weekday, and evening batches to fit certification training around your existing commitments."
            },
            {
              icon: <BriefcaseIcon className="h-8 w-8 text-blue-600" />,
              title: "Placement Assistance",
              description: "Get access to our extensive network of hiring partners and dedicated placement support throughout your job search."
            },
            {
              icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
              title: "Hands-on Learning",
              description: "Apply concepts through practical projects that mirror real-world industry scenarios and build your portfolio."
            },
            {
              icon: <AwardIcon className="h-8 w-8 text-blue-600" />,
              title: "Certification Exam Prep",
              description: "Dedicated sessions focused on exam strategies, practice tests, and comprehensive review materials."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-lg w-fit mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Placement Support Section
const PlacementSupportSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Placement & Career Support
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our dedicated placement team works with you from the beginning of your certification journey until you secure your desired role. We maintain strong relationships with leading tech companies to provide exclusive job opportunities for our students.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Resume Building Workshops",
                  description: "Expert guidance on creating impactful tech resumes that highlight your certifications and projects"
                },
                {
                  title: "Placement Drives & Job Fairs",
                  description: "Regular recruitment events with partner companies looking specifically for certified candidates"
                },
                {
                  title: "Career Counseling",
                  description: "One-on-one sessions to define your career path and identify suitable roles based on your skills"
                },
                {
                  title: "Alumni Network Access",
                  description: "Connect with our successful graduates working in top companies for mentorship and referrals"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <div className="p-6 bg-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Placement Success Stories</h3>
                <p className="text-blue-100">Our certified students now work at top tech companies</p>
              </div>
              
              <div className="p-6 space-y-6">
                {TESTIMONIALS.map(testimonial => (
                  <div key={testimonial.id} className="flex">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2 italic">"{testimonial.quote}"</p>
                      <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800 flex flex-wrap justify-around">
                {["Amazon", "Microsoft", "Google", "IBM", "Oracle"].map((company, index) => (
                  <div key={index} className="px-4 py-2 m-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded font-medium text-sm shadow-sm">
                    {company}
                  </div>
                ))}
                <div className="px-4 py-2 m-1 bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 rounded font-medium text-sm shadow-sm">
                  +100 more
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Interview Support Section
const InterviewSupportSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interview Preparation & Support
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our comprehensive interview preparation program ensures you're ready to impress potential employers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <UserIcon className="h-8 w-8 text-white" />,
              title: "Mock Interviews",
              description: "Practice with industry professionals who provide real-time feedback on your performance"
            },
            {
              icon: <BookOpenIcon className="h-8 w-8 text-white" />,
              title: "Technical Training",
              description: "Deep dive into common technical questions and problem-solving exercises for your domain"
            },
            {
              icon: <PhoneIcon className="h-8 w-8 text-white" />,
              title: "HR Interview Prep",
              description: "Master behavioral questions and learn to effectively communicate your skills and experience"
            },
            {
              icon: <ClockIcon className="h-8 w-8 text-white" />,
              title: "On-demand Support",
              description: "Get personalized guidance and additional practice sessions before important interviews"
            }
          ].map((support, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-blue-600 dark:bg-blue-800 text-white p-8 rounded-xl shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 dark:bg-blue-700 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="bg-blue-700 dark:bg-blue-900 p-3 rounded-lg w-fit mb-4 relative z-10">
                {support.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">
                {support.title}
              </h3>
              <p className="text-blue-100 relative z-10">
                {support.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interview Success Program
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our structured interview preparation program has helped thousands of students land their dream tech roles at top companies.
              </p>
              <div className="space-y-4">
                {[
                  "Weekly mock interview sessions with personalized feedback",
                  "Company-specific interview preparation",
                  "Salary negotiation techniques and guidance",
                  "Access to our extensive question bank and study materials"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Interview Success Rate</h4>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                    92% Success
                  </span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { company: "Cloud Certifications", rate: 94 },
                    { company: "Programming Courses", rate: 88 },
                    { company: "Full Stack Development", rate: 91 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item.company}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item.rate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${item.rate}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-start">
                    <HeartIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      "The interview preparation was exceptional. I received offers from 3 companies after completing my certification!" 
                      <span className="block mt-1 font-medium text-gray-900 dark:text-white">— Alex P., Full Stack Developer</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Courses Section
const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState(COURSE_CATEGORIES[0].id);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  return (
    <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Certification Courses
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of industry-relevant certification programs designed to accelerate your tech career
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {COURSE_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>
        
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md">
            {COURSE_CATEGORIES.filter(c => c.id === activeCategory).map(category => (
              <div key={category.id}>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map(course => (
                    <motion.div
                      key={course.id}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-600"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h4>
                          <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                            {course.level}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {course.description}
                        </p>
                        
                        <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                        
                        <div className="mb-6">
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</div>
                          <ul className="space-y-1">
                            {course.features.slice(0, 2).map((feature, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1 mt-0.5" />
                                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            <AwardIcon className="h-3 w-3 inline mr-1" />
                            {course.certification}
                          </div>
                          <button
                            onClick={() => setSelectedCourse(course)}
                            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300"
                          >
                            Course Details →
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-blue-600 text-white p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">{selectedCourse.title}</h3>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="text-white hover:text-blue-200"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    <CalendarIcon className="h-4 w-4 inline mr-1" />
                    {selectedCourse.duration}
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    {selectedCourse.level}
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    <AwardIcon className="h-4 w-4 inline mr-1" />
                    Certification
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  {selectedCourse.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedCourse.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Certification</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedCourse.certification}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex-1">
                    Enroll Now
                  </button>
                  <button className="px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex-1">
                    Download Syllabus
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Enrollment Form
const EnrollmentForm = ({ onSubmit }: { onSubmit: (userData: UserData) => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: 'cloud'
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      EnrollmentSchema.parse({ 
        email: formData.email, 
        name: formData.name, 
        phone: formData.phone 
      });
      onSubmit({ 
        email: formData.email, 
        name: formData.name, 
        phone: formData.phone 
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <section id="enroll" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center rounded-2xl overflow-hidden shadow-xl">
          <div className="lg:w-1/2 bg-blue-600 dark:bg-blue-800 text-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Certification Journey Today
            </h2>
            <p className="text-blue-100 mb-8">
              Fill out the form to receive detailed information about our certification programs, upcoming batches, and special offers.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-700 dark:bg-blue-900 p-2 rounded-lg mr-4 mt-1">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Personalized Learning Path</h3>
                  <p className="text-blue-100 text-sm">
                    Our counselors will help you choose the right certification based on your career goals
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-700 dark:bg-blue-900 p-2 rounded-lg mr-4 mt-1">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Flexible Payment Options</h3>
                  <p className="text-blue-100 text-sm">
                    Installment plans and scholarship opportunities available for eligible candidates
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-700 dark:bg-blue-900 p-2 rounded-lg mr-4 mt-1">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Job Guarantee Program</h3>
                  <p className="text-blue-100 text-sm">
                    Ask about our special program that guarantees job placement after certification
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white dark:bg-gray-800 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Request Information
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your contact number"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Course Interest
                </label>
                <select
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="cloud">Cloud Computing (AWS/Azure/GCP)</option>
                  <option value="programming">Programming (C/C++/Java/Python)</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
              >
                Get Course Information <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function CertificationCoursesPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const enrollRef = useRef<HTMLDivElement>(null);

  const handleEnrollmentSubmit = (userData: UserData) => {
    setUser(userData);
    setShowThankYou(true);
    // In a real application, you would send this data to your backend
    console.log("Enrollment data:", userData);
  };

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <PlacementSupportSection />
      <InterviewSupportSection />
      <CoursesSection />
      
      <div ref={enrollRef}>
        {!showThankYou ? (
          <EnrollmentForm onSubmit={handleEnrollmentSubmit} />
        ) : (
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl max-w-2xl mx-auto"
              >
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Thank You, {user?.name}!
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  We've received your information and will contact you shortly at {user?.email} with details about our certification programs.
                </p>
                <button
                  onClick={() => setShowThankYou(false)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Return to Courses
                </button>
              </motion.div>
            </div>
          </section>
        )}
      </div>
      
      <Footers />
    </>
  );
}