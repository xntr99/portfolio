import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { Github, Linkedin, Mail, GraduationCap, Trophy, Shield, BookOpen, Network, Cloud, Cpu } from 'lucide-react';

export default function Hero() {
  const [activeAchievement, setActiveAchievement] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-32 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          className="flex flex-col items-start w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Top Row: Image + Titles + Buttons */}
          <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-6 xl:gap-8 mb-8 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <motion.div variants={itemVariants} className="shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-[#1A2235] shadow-[0_0_30px_rgba(0,212,255,0.3)] relative group">
                  <img 
                    src="/austin.jpg" 
                    alt="Austin BC" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 border-2 border-[#00D4FF]/0 group-hover:border-[#00D4FF]/50 rounded-2xl transition-colors duration-500" />
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="font-mono text-xs tracking-widest text-[#A0A8B8] uppercase">
                    Available for Opportunities
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-3">
                  <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] leading-[0.9] tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] drop-shadow-[0_0_15px_rgba(0,212,255,0.4)] flex items-center gap-4">
                    <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 shadow-[0_0_25px_rgba(0,212,255,0.4)]">
                      <Shield className="text-[#00D4FF] w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    Austin BC
                  </h1>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="font-body text-lg sm:text-xl text-[#A0A8B8]"
                >
                  Security Engineer • Cloud • Infrastructure • Automation
                </motion.h2>
              </div>
            </div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col items-end gap-3 xl:pb-2">
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/in/batulaustin" target="_blank" rel="noreferrer" className="p-2.5 rounded-md bg-[#0B101A] border border-[#1A2235] text-[#A0A8B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://batulmonarchy.github.io" target="_blank" rel="noreferrer" className="p-2.5 rounded-md bg-[#0B101A] border border-[#1A2235] text-[#A0A8B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all">
                  <Github size={18} />
                </a>
                <a href="mailto:batulaustin.work@gmail.com" className="p-2.5 rounded-md bg-[#0B101A] border border-[#1A2235] text-[#A0A8B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all">
                  <Mail size={18} />
                </a>
              </div>
              <a 
                href="#experience" 
                className="px-5 py-2.5 bg-[#00D4FF] text-[#080B12] font-medium rounded-md hover:bg-white transition-colors text-sm w-[140px] text-center"
              >
                View My Work
              </a>
              <a 
                href="#projects" 
                className="px-5 py-2.5 bg-[#0B101A] border border-[#1A2235] text-[#00D4FF] font-medium rounded-md hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-colors text-sm w-[140px] text-center"
              >
                See Projects
              </a>
            </motion.div>
          </div>

          {/* Roles */}
          <motion.div variants={itemVariants} className="flex flex-row flex-wrap items-center gap-3 mb-10 w-full">
            <div className="px-4 py-1.5 rounded-full bg-[#0B101A] border border-[#1A2235] shadow-[0_0_15px_rgba(0,212,255,0.25)] font-mono text-xs text-[#A0A8B8] whitespace-nowrap">
              <span className="text-white font-medium">AI Security Engineer</span> • micro1
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#0B101A] border border-[#1A2235] shadow-[0_0_15px_rgba(0,212,255,0.25)] font-mono text-xs text-[#A0A8B8] whitespace-nowrap">
              <span className="text-white font-medium">Cloud Security Engineer</span> • Trusted Tech
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#0B101A] border border-[#1A2235] shadow-[0_0_15px_rgba(0,212,255,0.25)] font-mono text-xs text-[#A0A8B8] whitespace-nowrap">
              <span className="text-white font-medium">Founder</span> • Silicon Barracks
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div variants={itemVariants} className="w-full mb-10">
            <div className="bg-[#151A28] border border-[#1A2235] rounded-xl overflow-hidden shadow-2xl relative">
              {/* Terminal Header */}
              <div className="bg-[#1E2536] px-4 py-2.5 flex items-center gap-2 border-b border-[#1A2235]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 text-center font-mono text-sm text-[#A0A8B8] opacity-80">
                  austin@security-engineer:~
                </div>
              </div>
              {/* Terminal Body */}
              <div className="p-6 font-mono text-base leading-relaxed space-y-4 relative">
                <p className="text-[#D1D5DB]">
                  I am a Security Engineer working at the intersection of cloud infrastructure, identity security, and automation, with a growing focus on AI security and MLSecOps. I have supported enterprise clients across the US, Canada, Europe, and Australia, working across managed services, cloud platforms, and critical infrastructure environments.
                </p>
                <p className="text-[#D1D5DB]">
                  I am currently pursuing an MSc in Cybersecurity and a Postgraduate in GRC while holding 26+ industry certifications. Despite a deeply technical path, my roots are in the humanities. I believe the best engineers are also clear thinkers and strong communicators.
                </p>
                <p className="text-[#10B981] font-medium">
                  Open to roles in Security Engineering, Cloud Security, AI Security, and Infrastructure globally<motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="inline-block w-2 h-4 bg-[#10B981] ml-1 align-middle translate-y-[-1px]"
                  />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 w-full">
            <div className="flex flex-col items-center text-center">
              <span className="font-display text-5xl font-black text-white">
                <CountUp end={5} duration={2.5} />+
              </span>
              <span className="font-body text-sm text-[#A0A8B8] mt-2">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-display text-5xl font-black text-white">
                <CountUp end={4} duration={2.5} />+
              </span>
              <span className="font-body text-sm text-[#A0A8B8] mt-2">Countries Served</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-display text-5xl font-black text-white">
                <CountUp end={20} duration={2.5} />+
              </span>
              <span className="font-body text-sm text-[#A0A8B8] mt-2">Certifications</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-display text-5xl font-black text-white">
                <CountUp end={10} duration={2.5} />
              </span>
              <span className="font-body text-sm text-[#A0A8B8] mt-2">Projects Done</span>
            </div>
          </motion.div>

          {/* Notable Achievements Grid */}
          <motion.div variants={itemVariants} className="w-full mb-10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#A0A8B8] mb-4">Notable Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: GraduationCap, title: 'Summa Cum Laude', sub: 'BSIT, Holy Angel University', desc: 'Graduated with highest honors, demonstrating exceptional academic performance and dedication to the IT field.' },
                { icon: Trophy, title: 'Class Valedictorian', sub: 'Hillcrest Heights Institute', desc: 'Ranked 1st in the graduating class, delivering the valedictory address and leading the student body.' },
                { icon: GraduationCap, title: 'MSc Cybersecurity Candidate', sub: 'Holy Angel University', desc: 'Currently advancing expertise in network defense, cryptography, and enterprise security management.' },
                { icon: Shield, title: 'CompTIA CySA+, Security+, CSAP', sub: '', desc: 'Certified in cybersecurity analytics, foundational security principles, and advanced security practices.' },
                { icon: Network, title: 'CCNP ENCOR, CCNA', sub: '', desc: 'Cisco certified in enterprise network core technologies, routing, switching, and network fundamentals.' },
                { icon: Cloud, title: 'AWS Solutions Architect', sub: '', desc: 'Certified in designing distributed systems and deploying highly secure, scalable applications on AWS.' },
                { icon: Cpu, title: 'SecOps C-AI/MLPen', sub: '', desc: 'Specialized certification in AI/ML penetration testing, securing machine learning models and operations.' },
                { icon: BookOpen, title: '10 Published Security Labs', sub: '', desc: 'Authored and published hands-on security labs for practical cybersecurity training and community contribution.' },
              ].map((item, i) => {
                const isActive = activeAchievement === item.title;
                return (
                  <motion.div 
                    layout
                    key={i} 
                    onMouseEnter={() => setActiveAchievement(item.title)}
                    onMouseLeave={() => setActiveAchievement(null)}
                    className={`p-4 rounded-xl bg-[#0B101A] border ${isActive ? 'border-[#00D4FF]' : 'border-[#1A2235]'} flex flex-col gap-3 hover:border-[#00D4FF]/50 transition-colors cursor-pointer relative overflow-hidden`}
                  >
                    <motion.div layout className="flex items-start gap-3">
                      <item.icon className="text-[#00D4FF] shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                      <div className="flex flex-col gap-1.5">
                        <div className="text-white font-medium text-sm leading-snug">{item.title}</div>
                        {item.sub && <div className="text-[#A0A8B8] text-xs leading-snug">{item.sub}</div>}
                      </div>
                    </motion.div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-[#A0A8B8] text-xs leading-relaxed pt-2 border-t border-[#1A2235]"
                        >
                          {item.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>



        </motion.div>
      </div>
    </section>
  );
}
