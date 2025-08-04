import { AboutCanvas } from "@/components/three-animations";

export default function About() {
  const skills = [
    "React.js",
    "Node.js", 
    "Three.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker"
  ];

  return (
    <section className="py-20 px-6 mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that bridge the gap between design and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="canvas-container h-96 rounded-2xl glass-effect">
              <AboutCanvas />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--neon-blue)]">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a full-stack engineer with a passion for building modern, animated web applications using cutting-edge technologies. 
                With expertise in React, Node.js, Three.js, and more, I create digital experiences that are both functional and visually stunning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or experimenting with 3D graphics and animations.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[var(--neon-purple)]">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[var(--neon-green)] rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
