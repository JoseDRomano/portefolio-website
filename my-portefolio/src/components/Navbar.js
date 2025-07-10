import ShinyButton from '@/components/ShinyButton';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-base-300">
      <div className="flex-1">
        <a
          href="#"
          className="btn btn-ghost text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
        >
          José Romano
        </a>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="flex gap-8">
          <ShinyButton 
            text="About Me" 
            href="#sobre"
            disabled={false} 
            speed={4} 
          />
          
          <ShinyButton 
            text="Projects" 
            href="#projetos"
            disabled={false} 
            speed={4} 
          />
          
          <ShinyButton 
            text="Contacts" 
            href="#contacto"
            disabled={false} 
            speed={4} 
          />
        </div>
      </div>

      <div className="flex-1"></div>
    </div>
  )
}