'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import Threads from '@/Backgrounds/Threads/Threads';
import Footer from "@/components/footer";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import PersonalInfoSection from "@/components/PersonalInfoSection/PersonalInfoSection";
import Projects from "@/components/projects";
import Dock from "@/components/Dock/Dock";
import Navbar from "@/components/navbar";
import Chatbot from "@/components/Chatbot/Chatbot";
import {
  HiOutlineCalendarDays, HiOutlineFolderOpen
} from "react-icons/hi2";
import {
  HiOutlineUser, HiOutlineBriefcase
} from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const items = [
  { icon: <HiOutlineUser size={18} />, label: 'About me', onClick: () => alert('Profile!') },
  { 
    icon: <HiOutlineBriefcase size={18} />, 
    label: 'Experience', 
    onClick: () => router.push('/experience')
  },
  { icon: <HiOutlineFolderOpen size={18} />, label: 'Projects', onClick: () => alert('Archive!') },
  { icon: <HiOutlineCalendarDays size={18} />, label: 'Book a call!', onClick: () => alert('Settings!') },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 px-4">
        <Navbar />
      </div>
      
      {/* <div className="fixed inset-0 -z-50">
        <Threads
          amplitude={1.25}
          distance={0}
          enableMouseInteraction={false}
        />
      </div> */}

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Spacing */}
      <div className="h-12"></div>

      {/* Skills Section */}
      <SkillsSection />

      {/* Spacing */}
      <div className="h-12"></div>

      {/* Personal Info Section */}
      <PersonalInfoSection />

      {/* Spacing */}
      <div className="h-12"></div>

      {/* Projects Section */}
      <section className="py-12 px-4 w-full flex justify-center">
        <div className="max-w-5xl w-full">
          <Projects />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Chatbot */}
      <Chatbot />
    </main>
  );
}