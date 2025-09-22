import { AboutCanvas } from "../components/three-animations";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const skills = [
    "React.js",
    "Node.js", 
    "RESTful APIs",
    "Three.js",
    "TypeScript",
    "PostgreSQL",
    "SQL",
    "CI/CD",
    "Git & GitHub",
    "HTML & CSS",
    "Docker",
    "Asana",
    "Jira",
    "Figma",
    "Slack",
    "Trello",
    "Notion",
    "MS Project",
    "Agile & Scrum",
    "Team Collaboration",
    "Critical Thinking",
    "Adaptability",
    "Leadership",
    "Attention to Detail",
    "Conflict Resolution",
    "Risk Management",
    "Documentation",
    "Google Workspace",
    "Confluence",
    "Miro",
    "Lucidchart",
    "Monday.com",
    "ClickUp",
    "Tableau",
    "Agile Methodologies",
    "Project Management"
  ];

  return (
    <>
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
               Certified in Google Project Management, I bring strong skills in organizing projects, 
               collaborating across teams, and keeping deadlines on track. With experience using tools like Jira, 
               Asana, and MS Project, I’m passionate about turning ideas into results while fostering collaboration and efficiency.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not project managing, you'll find me exploring new technologies, contributing to open-source projects, 
                or experimenting with 3D graphics and animations.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[var(--neon-purple)]">Skills</h3>
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
    <section className="relative">
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/projects" >
        <ChevronDown className="w-8 h-8 text-gray-400" />
        </Link>
      </div>
    </section>

    </>
  );
}
