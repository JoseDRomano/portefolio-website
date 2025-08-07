'use client';

import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Threads from '@/Backgrounds/Threads/Threads';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 px-4">
        <Navbar />
      </div>
      
      <div className="fixed inset-0 -z-50">
        <Threads
          amplitude={1.25}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      <div className="w-full pt-28 flex-grow">
        <Experience />
      </div>
      
      <Footer />
    </main>
  );
}