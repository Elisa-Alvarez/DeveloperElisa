import { useEffect, useRef } from "react";

// CSS-based animated components for now (will upgrade to Three.js later)

// Particle System for Hero Section
export function ParticleSystem() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[var(--neon-blue)] rounded-full animate-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// Wireframe Sphere for About Section
export function WireframeSphere() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 border-2 border-[var(--neon-purple)] rounded-full animate-rotate-slow opacity-80">
        <div className="w-full h-full border-2 border-[var(--neon-purple)] rounded-full animate-pulse transform rotate-45">
          <div className="w-full h-full border-2 border-[var(--neon-purple)] rounded-full animate-bounce transform rotate-90" />
        </div>
      </div>
    </div>
  );
}

// Animated Torus for Contact Section
export function AnimatedTorus() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-[var(--neon-yellow)] rounded-full animate-rotate-slow opacity-80" />
        <div className="absolute inset-4 w-16 h-16 border-4 border-[var(--neon-yellow)] rounded-full animate-pulse" />
        <div className="absolute inset-8 w-8 h-8 border-2 border-[var(--neon-yellow)] rounded-full animate-bounce" />
      </div>
    </div>
  );
}

// Project Geometry Components
export function ProjectGeometry({ type, color }: { type: string; color: string }) {
  const getShape = () => {
    const shapeClasses = "w-20 h-20 border-2 animate-rotate-slow opacity-80";
    switch (type) {
      case "box":
        return <div className={`${shapeClasses} border-[${color}]`} />;
      case "octahedron":
        return <div className={`${shapeClasses} border-[${color}] transform rotate-45`} />;
      case "tetrahedron":
        return <div className={`${shapeClasses} border-[${color}] rounded-lg transform rotate-12`} />;
      case "cone":
        return <div className={`${shapeClasses} border-[${color}] rounded-full`} />;
      case "dodecahedron":
        return <div className={`${shapeClasses} border-[${color}] rounded-xl transform rotate-45`} />;
      case "cylinder":
        return <div className={`w-16 h-24 border-2 border-[${color}] rounded-full animate-rotate-slow opacity-80`} />;
      default:
        return <div className={`${shapeClasses} border-[${color}]`} />;
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {getShape()}
    </div>
  );
}

// Canvas Wrapper Components
export function HeroCanvas() {
  return (
    <div className="w-full h-full relative">
      <ParticleSystem />
    </div>
  );
}

export function AboutCanvas() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
      <WireframeSphere />
    </div>
  );
}

export function ContactCanvas() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
      <AnimatedTorus />
    </div>
  );
}

export function ProjectCanvas({ type, color }: { type: string; color: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
      <ProjectGeometry type={type} color={color} />
    </div>
  );
}
