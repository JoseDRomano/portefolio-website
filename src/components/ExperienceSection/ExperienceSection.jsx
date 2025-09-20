'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experienceData = [
  {
    type: 'experience',
    title: 'Data & AI Trainee',
    company: 'Unipartner',
    location: 'Lisbon, Portugal',
    duration: 'Nov 2023 - Mar 2024',
    description: 'Developed machine learning models for data analysis and business intelligence solutions.',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
    icon: <HiBriefcase className="text-blue-600" />
  },
  {
    type: 'experience',
    title: 'Backend Developer',
    company: 'Polarising',
    location: 'Remote',
    duration: 'Jul 2023 - Aug 2023',
    description: 'Built scalable backend systems and APIs for web applications.',
    skills: ['Node.js', 'Python', 'REST APIs', 'Database Design'],
    icon: <HiBriefcase className="text-blue-600" />
  },
  {
    type: 'education',
    title: "Master's in Computer Engineering",
    company: 'NOVA SST',
    location: 'Lisbon, Portugal',
    duration: 'Oct 2023 - Nov 2025',
    description: 'Major in Artificial Intelligence. Focus on advanced ML algorithms and data science.',
    skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'Research'],
    icon: <HiAcademicCap className="text-red-600" />
  },
  {
    type: 'education',
    title: "Bachelor's in Computer Science",
    company: 'NOVA SST',
    location: 'Lisbon, Portugal',
    duration: 'Oct 2020 - Jul 2023',
    description: 'Comprehensive computer science foundation with focus on software engineering.',
    skills: ['Software Engineering', 'Algorithms', 'Data Structures', 'Programming'],
    icon: <HiAcademicCap className="text-red-600" />
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 px-4 w-full flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-8">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in AI, data science, and software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-red-500 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16 w-full">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="backdrop-blur-md bg-white/15 rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      {item.icon}
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.type === 'experience' 
                          ? 'bg-blue-100/50 text-blue-700 border border-blue-200/50' 
                          : 'bg-red-100/50 text-red-700 border border-red-200/50'
                      }`}>
                        {item.type === 'experience' ? 'Experience' : 'Education'}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <h4 className="text-xl font-semibold text-gray-700 mb-3">{item.company}</h4>

                    {/* Location & Duration */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <HiLocationMarker size={16} />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiCalendar size={16} />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100/50 text-gray-700 rounded-full text-sm border border-gray-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                      item.type === 'experience' ? 'bg-blue-500' : 'bg-red-500'
                    }`}
                  />
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
