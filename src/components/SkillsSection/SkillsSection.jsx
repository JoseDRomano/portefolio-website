'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  'Programming Languages': [
    { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Java', level: 75, color: 'from-orange-400 to-orange-600' },
    { name: 'C++', level: 70, color: 'from-blue-500 to-blue-700' }
  ],
  'AI & Machine Learning': [
    { name: 'TensorFlow', level: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'PyTorch', level: 85, color: 'from-red-400 to-red-600' },
    { name: 'Scikit-learn', level: 90, color: 'from-orange-500 to-orange-700' },
    { name: 'Pandas', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'NumPy', level: 90, color: 'from-blue-500 to-blue-700' }
  ],
  'Data & Analytics': [
    { name: 'SQL', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Data Visualization', level: 85, color: 'from-purple-400 to-purple-600' },
    { name: 'Statistical Analysis', level: 88, color: 'from-green-400 to-green-600' },
    { name: 'Big Data', level: 75, color: 'from-indigo-400 to-indigo-600' }
  ],
  'Tools & Technologies': [
    { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', level: 75, color: 'from-orange-500 to-orange-700' },
    { name: 'Linux', level: 85, color: 'from-gray-400 to-gray-600' },
    { name: 'Jupyter', level: 95, color: 'from-orange-400 to-orange-600' }
  ]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 px-4 w-full flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to transform data into decisions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/15 rounded-2xl shadow-lg border border-white/20 p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category}</h3>
              
              <div className="space-y-4">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-sm`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="backdrop-blur-md bg-white/15 rounded-2xl shadow-lg border border-white/20 p-8">
            <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Problem Solving', 'Team Leadership', 'Project Management', 
                'Research & Development', 'Technical Writing', 'Mentoring',
                'Agile Methodologies', 'Data Pipeline Design', 'Model Deployment'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gray-100/50 text-gray-700 rounded-full text-sm border border-gray-200/50 hover:bg-gray-200/50 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
