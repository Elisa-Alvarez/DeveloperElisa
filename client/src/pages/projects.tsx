import { Button } from "../components/ui/button";
import { ProjectCanvas } from "../components/three-animations";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and Stripe payment integration. Features include product catalog, shopping cart, user authentication, and admin dashboard.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      colors: { bg: "from-blue-500 to-purple-600", tag: "blue" },
      geometry: "box",
      geometryColor: "#60A5FA"
    },
    {
      title: "3D Data Visualization",
      description: "Interactive 3D data visualization dashboard using Three.js and D3.js. Transforms complex datasets into immersive visual experiences with real-time updates.",
      tags: ["Three.js", "D3.js", "WebGL", "Socket.io"],
      colors: { bg: "from-green-500 to-blue-600", tag: "green" },
      geometry: "octahedron",
      geometryColor: "#34D399"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses using OpenAI API. Features include message history, user authentication, and customizable AI personas.",
      tags: ["Next.js", "OpenAI", "Socket.io", "Redis"],
      colors: { bg: "from-purple-500 to-pink-600", tag: "purple" },
      geometry: "tetrahedron",
      geometryColor: "#B347D9"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard for mobile applications with real-time metrics, user behavior tracking, and customizable reporting features.",
      tags: ["React", "Firebase", "Chart.js", "Express"],
      colors: { bg: "from-yellow-500 to-red-600", tag: "yellow" },
      geometry: "cone",
      geometryColor: "#FBBF24"
    },
    {
      title: "DeFi Trading Platform",
      description: "Decentralized trading platform built on Ethereum with smart contracts for automated trading, liquidity pools, and yield farming capabilities.",
      tags: ["Solidity", "Web3.js", "MetaMask", "Hardhat"],
      colors: { bg: "from-indigo-500 to-purple-600", tag: "indigo" },
      geometry: "dodecahedron",
      geometryColor: "#8B5CF6"
    },
    {
      title: "IoT Monitoring System",
      description: "Real-time IoT device monitoring system with sensor data visualization, alert notifications, and predictive maintenance capabilities.",
      tags: ["Node.js", "MQTT", "InfluxDB", "Grafana"],
      colors: { bg: "from-teal-500 to-green-600", tag: "teal" },
      geometry: "cylinder",
      geometryColor: "#14B8A6"
    }
  ];

  const getTagColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500 bg-opacity-20 text-blue-300",
      green: "bg-green-500 bg-opacity-20 text-green-300",
      purple: "bg-purple-500 bg-opacity-20 text-purple-300",
      yellow: "bg-yellow-500 bg-opacity-20 text-yellow-300",
      indigo: "bg-indigo-500 bg-opacity-20 text-indigo-300",
      teal: "bg-teal-500 bg-opacity-20 text-teal-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
    <section className="py-20 px-6 bg-gray-800 mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of professional and personal projects demonstrating my skills across the full stack development and project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.colors.bg} relative overflow-hidden`}>
                <ProjectCanvas type={project.geometry} color={project.geometryColor} />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-gray-900 text-white hover:bg-gray-800"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--neon-blue)]">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs ${getTagColor(project.colors.tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            className="bg-[var(--neon-blue)] text-gray-900 px-8 py-4 font-semibold hover:bg-opacity-80 transition-all duration-300"
            onClick={() => window.open("https://github.com/Elisa-Alvarez", "_blank")}
          >
            View All Projects on GitHub
            <Github className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
    <section className="relative">
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/contact">
        <ChevronDown className="w-8 h-8 text-gray-400" />
        </Link>
      </div>
    </section>
    </>
  );
}
