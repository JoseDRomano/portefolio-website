'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Sales Predictor",
    description: "Machine learning model that predicts sales performance using historical data and market trends. Built with Python, TensorFlow, and deployed on AWS.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["Python", "TensorFlow", "AWS", "Data Science"]
  },
  {
    id: 2,
    title: "Smart Document Analyzer",
    description: "NLP system that extracts key insights from documents using transformer models. Processes PDFs, emails, and reports automatically.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    tags: ["NLP", "Transformers", "Python", "FastAPI"]
  },
  {
    id: 3,
    title: "Real-time Fraud Detection",
    description: "Anomaly detection system that identifies fraudulent transactions in real-time using unsupervised learning algorithms and streaming data.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    tags: ["Anomaly Detection", "Streaming", "Kafka", "Python"]
  },
  {
    id: 4,
    title: "Computer Vision Dashboard",
    description: "Interactive dashboard for image classification and object detection. Supports real-time camera feeds and batch processing.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    tags: ["Computer Vision", "OpenCV", "React", "TensorFlow"]
  },
  {
    id: 5,
    title: "Predictive Maintenance System",
    description: "IoT-based system that predicts equipment failures using sensor data and machine learning. Reduces downtime by 40%.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    tags: ["IoT", "Time Series", "Python", "Docker"]
  },
  {
    id: 6,
    title: "Chatbot with RAG",
    description: "Intelligent chatbot using Retrieval-Augmented Generation. Answers questions from company knowledge base with 95% accuracy.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    tags: ["LLM", "RAG", "Vector DB", "LangChain"]
  },
  {
    id: 7,
    title: "Data Pipeline Automation",
    description: "End-to-end data pipeline that processes, cleans, and transforms data from multiple sources. Handles 1M+ records daily.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["ETL", "Apache Airflow", "PostgreSQL", "Python"]
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Create multiple copies for seamless infinite scroll
  const extendedProjects = [...projectsData, ...projectsData, ...projectsData, ...projectsData];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000); // Move every 2 seconds (slower)

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Seamless reset when reaching the end
  useEffect(() => {
    if (currentIndex >= projectsData.length * 3) {
      // Reset to the middle set without animation
      setTimeout(() => {
        setCurrentIndex(projectsData.length);
      }, 500);
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsPaused(true);
    // Resume after 10 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsPaused(true);
    // Resume after 10 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <div className="w-full">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold tracking-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AI and data science projects that showcase my technical expertise
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <HiChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <HiChevronRight size={24} />
        </button>

        <motion.div
          className="flex"
          animate={{
            x: -currentIndex * (400 + 48) // Move based on current index
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          style={{ width: `${extendedProjects.length * (400 + 48)}px` }}
        >
          {extendedProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 mr-12" // Increased spacing to 48px (mr-12)
            >
              <div className="w-96 backdrop-blur-md bg-white/15 rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <figure className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs border border-blue-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                      View Code
                    </button>
                    <button className="flex-1 bg-gray-100/50 hover:bg-gray-200/50 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors duration-200 border border-gray-200/50">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Spacing between carousel and indicators */}
      <div className="h-3"></div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + projectsData.length)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              (currentIndex % projectsData.length) === index
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;