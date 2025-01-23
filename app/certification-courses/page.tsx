"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { 
  GraduationCapIcon, 
  ArrowRightIcon, 
  MailIcon, 
  BookOpenIcon, 
  UserCircle2 
} from 'lucide-react';
import Footers from "../../components/Footers";
// Validation Schema
const EnrollmentSchema = z.object({
  email: z.string().email('Invalid email address'),
  studyLevel: z.string().min(2, 'Please provide your current study area')
});

// Types
type Course = {
  id: string;
  title: string;
  description: string;
  learningOutcomes: string[];
  prerequisites: string[];
  careerOpportunities: string[];
};

type UserData = {
  email: string;
  studyLevel: string;
};

// Detailed Courses Data
const COURSES: Course[] = [
  {
    id: 'cloud-cert',
    title: 'Cloud Computing Professional',
    description: 'Comprehensive certification covering advanced cloud technologies and infrastructure design.',
    learningOutcomes: [
      'Master cloud infrastructure architecture',
      'Develop scalable cloud solutions',
      'Implement advanced security protocols',
      'Design multi-cloud integration strategies'
    ],
    prerequisites: [
      'Basic understanding of computer networks',
      'Familiarity with Linux/Windows systems',
      'Basic programming knowledge'
    ],
    careerOpportunities: [
      'Cloud Solutions Architect',
      'Cloud Security Specialist',
      'Enterprise Cloud Consultant',
      'Cloud Migration Engineer'
    ]
  },
  {
    id: 'fullstack-cert',
    title: 'Full Stack Web Development',
    description: 'Comprehensive program covering end-to-end web development with modern technologies and frameworks.',
    learningOutcomes: [
      'Build responsive web applications',
      'Create robust backend systems',
      'Implement state management',
      'Develop RESTful APIs',
      'Master frontend and backend technologies'
    ],
    prerequisites: [
      'Basic HTML/CSS knowledge',
      'Understanding of JavaScript fundamentals',
      'Logical problem-solving skills'
    ],
    careerOpportunities: [
      'Full Stack Developer',
      'Web Application Engineer',
      'Software Development Consultant',
      'Frontend/Backend Specialist'
    ]
  },
  {
    id: 'ai-ml-cert',
    title: 'AI and Machine Learning',
    description: 'Advanced certification exploring artificial intelligence, machine learning algorithms, and practical applications.',
    learningOutcomes: [
      'Develop machine learning models',
      'Implement neural network architectures',
      'Apply deep learning techniques',
      'Create intelligent data-driven solutions',
      'Understand AI ethics and responsible development'
    ],
    prerequisites: [
      'Strong mathematical foundation',
      'Python programming experience',
      'Basic statistics knowledge'
    ],
    careerOpportunities: [
      'Machine Learning Engineer',
      'AI Research Scientist',
      'Data Science Specialist',
      'AI Product Manager'
    ]
  }
];

// Email Collection Component
type EmailCollectionProps = {
  onSubmit: (userData: UserData) => void;
};

const EmailCollection: React.FC<EmailCollectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [studyLevel, setStudyLevel] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      EnrollmentSchema.parse({ email, studyLevel });
      onSubmit({ email, studyLevel });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4"
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <GraduationCapIcon className="mx-auto h-16 w-16 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Certification Courses
          </h2>
          <p className="text-gray-500 mt-2">
            Begin your learning journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Current Study Area
            </label>
            <input
              type="text"
              value={studyLevel}
              onChange={(e) => setStudyLevel(e.target.value)}
              placeholder="e.g., Computer Science, Engineering"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Continue <ArrowRightIcon className="ml-2" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

// Courses Display Component
type CoursesDisplayProps = {
  user: UserData;
  onBack: () => void;
};

const CoursesDisplay: React.FC<CoursesDisplayProps> = ({ user, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center mb-8 space-x-4">
          <button 
            onClick={onBack} 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            ← Back
          </button>
          <div className="flex items-center space-x-2">
            <UserCircle2 className="h-8 w-8 text-blue-600" />
            <span className="text-gray-700">{user.email}</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Available Certification Courses
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpenIcon className="h-10 w-10 text-blue-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    {course.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2 text-gray-700">Learning Outcomes</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {course.learningOutcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center">
                          <span className="mr-2 text-blue-500">▸</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2 text-gray-700">Prerequisites</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {course.prerequisites.map((prereq) => (
                        <li key={prereq} className="flex items-center">
                          <span className="mr-2 text-blue-500">▸</span>
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2 text-gray-700">Career Opportunities</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {course.careerOpportunities.map((opportunity) => (
                        <li key={opportunity} className="flex items-center">
                          <span className="mr-2 text-blue-500">▸</span>
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function CertificationCoursesPage() {
  const [stage, setStage] = useState<'email-collection' | 'courses'>('email-collection');
  const [user, setUser] = useState<UserData | null>(null);

  const handleEmailSubmit = (userData: UserData) => {
    setUser(userData);
    setStage('courses');
  };

  return (
    <>
      {stage === 'email-collection' && (
        <EmailCollection onSubmit={handleEmailSubmit} />
      )}
      {stage === 'courses' && user && (
        <CoursesDisplay 
          user={user} 
          onBack={() => setStage('email-collection')} 
        />
        
      )}
      <Footers/>
    </>
  );
}