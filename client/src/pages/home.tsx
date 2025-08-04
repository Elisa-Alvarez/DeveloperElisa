import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";
import { HeroCanvas } from "../components/three-animations";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient">Elisa</span><br />
            <span className="text-white">Alvarez</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer crafting immersive digital experiences with cutting-edge technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button className="bg-[var(--neon-blue)] text-gray-900 px-8 py-4 font-semibold hover:bg-opacity-80 transition-all duration-300 animate-pulse-glow">
                View My Work
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-[var(--neon-purple)] text-[var(--neon-purple)] px-8 py-4 font-semibold hover:bg-[var(--neon-purple)] hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/about">
        <ChevronDown className="w-8 h-8 text-gray-400" />
        </Link>
      </div>
    </section>
  );
}
