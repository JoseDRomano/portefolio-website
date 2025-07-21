'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import Threads from '@/Backgrounds/Threads/Threads';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background Layer */}
      <div className="fixed top-20 left-0 right-0 bottom-0 -z-50">
        <Threads
          amplitude={1.25}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>
      <Hero />
      
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>

    </main>

  );
}
