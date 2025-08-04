import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-gradient cursor-pointer">EA</div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`transition-colors duration-300 ${
                    isActiveRoute(item.href)
                      ? "text-[var(--neon-blue)]"
                      : "text-white hover:text-[var(--neon-blue)]"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
          
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`transition-colors duration-300 ${
                      isActiveRoute(item.href)
                        ? "text-[var(--neon-blue)]"
                        : "text-white hover:text-[var(--neon-blue)]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
