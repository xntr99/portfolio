import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-[#1C1F26] bg-[#0A0E14] z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-2xl text-white mb-2">Austin BC</span>
          <span className="font-mono text-xs text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/batulaustin" target="_blank" rel="noreferrer" className="text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://batulmonarchy.github.io" target="_blank" rel="noreferrer" className="text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:batulaustin.work@gmail.com" className="text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
            <Mail size={24} />
          </a>
        </div>

      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-[#12161E] border border-[#1C1F26] rounded-full text-[#9CA3AF] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300 z-50 group"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
}
