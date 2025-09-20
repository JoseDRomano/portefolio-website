'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiLocationMarker, 
  HiHeart, 
  HiMusicNote, 
  HiBookOpen, 
  HiGlobe,
  HiCode,
  HiLightningBolt
} from 'react-icons/hi';

const personalData = {
  location: {
    city: 'Lisbon, Portugal',
    country: 'Portugal',
    timezone: 'WET (UTC+0)'
  },
  hobbies: [
    { name: 'Coding Projects', icon: <HiCode className="text-blue-600" />, description: 'Building AI solutions and exploring new technologies' },
    { name: 'Music Production', icon: <HiMusicNote className="text-purple-600" />, description: 'Creating electronic music and sound design' },
    { name: 'Reading', icon: <HiBookOpen className="text-green-600" />, description: 'Tech books, AI research papers, and sci-fi novels' },
    { name: 'Gaming', icon: <HiLightningBolt className="text-yellow-600" />, description: 'Strategy games and indie titles' }
  ],
  music: {
    genres: ['Electronic', 'Ambient', 'Techno', 'Synthwave', 'Jazz'],
    artists: ['Aphex Twin', 'Boards of Canada', 'Tycho', 'Nils Frahm', 'Ólafur Arnalds'],
    description: 'I love creating ambient electronic music and exploring sound design. Music helps me think and inspires my creative coding projects.'
  },
  interests: [
    'Artificial Intelligence Research',
    'Data Visualization',
    'Open Source Projects',
    'Tech Startups',
    'Sustainable Technology',
    'Digital Art',
    'Photography',
    'Coffee Culture'
  ]
};

const PersonalInfoSection = () => {
  return (
    <section id="personal" className="py-12 px-4 w-full flex justify-center">
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond the code - my passions, interests, and personal side
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location & Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/15 rounded-2xl shadow-lg border border-white/20 p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HiLocationMarker className="text-blue-600" />
              Location & Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiGlobe className="text-gray-600" size={20} />
                <div>
                  <p className="font-semibold">{personalData.location.city}</p>
                  <p className="text-sm text-gray-600">{personalData.location.country}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <HiLightningBolt className="text-gray-600" size={20} />
                <div>
                  <p className="font-semibold">Timezone</p>
                  <p className="text-sm text-gray-600">{personalData.location.timezone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Music Taste */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/15 rounded-2xl shadow-lg border border-white/20 p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HiMusicNote className="text-purple-600" />
              Music & Sound
            </h3>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {personalData.music.description}
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Favorite Genres:</h4>
                <div className="flex flex-wrap gap-2">
                  {personalData.music.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100/50 text-purple-700 rounded-full text-sm border border-purple-200/50"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Favorite Artists:</h4>
                <div className="flex flex-wrap gap-2">
                  {personalData.music.artists.map((artist, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100/50 text-gray-700 rounded-full text-sm border border-gray-200/50"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 backdrop-blur-md bg-white/15 rounded-2xl shadow-lg border border-white/20 p-6"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HiHeart className="text-red-600" />
            Hobbies & Interests
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {personalData.hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-white/10 rounded-xl border border-white/20"
              >
                <div className="text-2xl">{hobby.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{hobby.name}</h4>
                  <p className="text-sm text-gray-600">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Interests */}
          <div>
            <h4 className="font-semibold mb-4">Other Interests:</h4>
            <div className="flex flex-wrap gap-2">
              {personalData.interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-gray-100/50 text-gray-700 rounded-full text-sm border border-gray-200/50 hover:bg-gray-200/50 transition-colors duration-200"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
