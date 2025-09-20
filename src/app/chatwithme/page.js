'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Threads from '@/Backgrounds/Threads/Threads';

export default function ChatbotPage() {
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
        {/* Your chatbot content will go here */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Chatbot</h1>
          {/* Add your chatbot components here */}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}