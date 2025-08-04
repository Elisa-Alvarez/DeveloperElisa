import { Github, Linkedin, X, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Elisa-Alvarez", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/developer-elisa", label: "LinkedIn" },
    { icon: X, href: "https://x.com/DeveloperElisa", label: "X" },
    { icon: Mail, href: "mailto:elisaalvarez211@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold text-gradient mb-2">Elisa Alvarez</div>
            <p className="text-gray-300">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors duration-300"
                  aria-label={link.label}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Devleoper Elisa Alvarez. All rights reserved. Built with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
