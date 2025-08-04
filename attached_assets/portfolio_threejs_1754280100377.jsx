import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="text-center py-10 text-3xl md:text-5xl font-bold">
        The Future of Your Portfolio is Here
      </header>

      <div className="grid md:grid-cols-3 gap-4 p-4">
        <Section
          title="About Me"
          description="Full-stack engineer with a passion for building modern, animated web applications using cutting-edge technologies."
          animation={<ParticleSphere />}
        />

        <Section
          title="Projects"
          description="Collection of professional and personal projects, demonstrating skills in React, Node.js, three.js, and more."
          animation={<ParticleCloud />}
        />

        <Section
          title="Contact"
          description="Get in touch or explore my other integrations, such as GitHub, LinkedIn, and other platforms."
          animation={<RadiatingLines />}
        />
      </div>
    </div>
  );
}

function Section({ title, description, animation }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 flex flex-col justify-between shadow-xl">
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4 text-sm text-gray-300">{description}</p>
      </div>
      <div className="flex-1 flex items-center justify-center mb-4">{animation}</div>
      <Button className="w-full">Read More</Button>
    </div>
  );
}

// Placeholder 3D components (replace with real three.js scenes)
function ParticleSphere() {
  return (
    <Canvas className="h-40">
      <ambientLight />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

function ParticleCloud() {
  return (
    <Canvas className="h-40">
      <ambientLight />
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="lightgreen" wireframe />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

function RadiatingLines() {
  return (
    <Canvas className="h-40">
      <ambientLight />
      <mesh>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshBasicMaterial color="gold" wireframe />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
