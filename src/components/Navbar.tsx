import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Home, Briefcase, Code, Award, GraduationCap, Mail, Shield } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import WorldClock from './WorldClock';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Skills', href: '#skills', icon: Award },
  { name: 'Certs & Education', href: '#certifications', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] origin-left z-50"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0A0E14]/80 backdrop-blur-md border-b border-[#1C1F26]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300">
              <Shield size={18} className="text-[#D4AF37]" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-300">
              Austin BC
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={twMerge(
                    "font-heading text-sm uppercase tracking-wider transition-all duration-300 relative py-2",
                    isActive ? "text-[#D4AF37]" : "text-[#9CA3AF] hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <div className="pl-4 border-l border-[#1C1F26]">
              <WorldClock />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="lg:hidden overflow-hidden bg-[#0A0E14]/95 backdrop-blur-xl border-b border-[#1C1F26]"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            <div className="pb-4 mb-2 border-b border-[#1C1F26] flex justify-center">
              <WorldClock />
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={twMerge(
                    "font-heading text-lg flex items-center gap-3 py-2 transition-colors",
                    isActive ? "text-[#D4AF37]" : "text-[#9CA3AF]"
                  )}
                >
                  <Icon size={20} className={isActive ? "text-[#D4AF37]" : "opacity-70"} />
                  {link.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      </nav>
    </>
  );
}
