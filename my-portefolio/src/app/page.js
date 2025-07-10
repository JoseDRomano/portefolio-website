import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Threads from '@/components/Threads';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background layer */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  )
}