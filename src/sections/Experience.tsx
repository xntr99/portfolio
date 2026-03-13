import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cloud, Server, Network, Building2, X, ArrowRight } from 'lucide-react';

const experiences = [
  {
    id: '1',
    role: 'AI Security Engineer (MLSecOps)',
    company: 'micro1',
    type: 'Freelance',
    location: 'Remote',
    date: 'Mar 2026 - Present',
    current: true,
    icon: Shield,
    bullets: [
      'Active role. AI security and MLSecOps engineering on a freelance basis.'
    ]
  },
  {
    id: '2',
    role: 'Cloud Security Engineer',
    company: 'Microsoft Solutions Partner — Trusted Tech',
    type: 'Full-time',
    location: 'Remote, Irvine CA, USA',
    date: 'Feb 2025 - Present',
    current: true,
    icon: Cloud,
    bullets: [
      'Administered Microsoft 365 and Azure infrastructure supporting 50+ enterprise properties across North America, maintaining identity security, endpoint compliance, and tenant configuration across multi-tenant environments',
      'Implemented Conditional Access policies, MFA enforcement, and Intune compliance controls to strengthen identity security across multi-tenant Microsoft 365 environments',
      'Managed identity lifecycle operations including user provisioning, access governance, and endpoint onboarding across 365 tenants',
      'Performed security alert triage and investigation involving email security threats and identity risk detections within Microsoft 365 security monitoring workflows',
      'Provided infrastructure support for network connectivity, endpoint compliance, and cloud workloads ensuring stability'
    ]
  },
  {
    id: '3',
    role: 'Founder and Technical Director',
    company: 'Silicon Barracks',
    type: 'Self-employed',
    location: 'Angeles City, Philippines',
    date: 'Feb 2022 - Present',
    current: true,
    icon: Building2,
    bullets: [
      'Building a technical collective focused on security, infrastructure, and AI-driven systems.'
    ]
  },
  {
    id: '4',
    role: 'Network Security Engineer',
    company: 'LTVplus LLC',
    type: 'Full-time',
    location: 'Remote, Santa Monica CA, USA',
    date: 'Sept 2024 - Feb 2025',
    current: false,
    icon: Network,
    bullets: [
      'Managed enterprise network and systems infrastructure across 200+ hospitality properties, maintaining connectivity, reliability, and operational uptime',
      'Delivered Tier 2 to 3 infrastructure and remote support, resolving network outages, security anomalies, and system failures',
      'Designed segmented network architectures for guest, staff, and operational environments, improving traffic isolation, reliability, and security posture',
      'Implemented endpoint and email security controls within Microsoft 365 and Azure environments to strengthen identity governance'
    ]
  },
  {
    id: '5',
    role: 'Endpoint Security Engineer Intern',
    company: 'Cloudstaff Philippines',
    type: 'Internship',
    location: 'Onsite, Angeles City, Philippines',
    date: 'Feb 2024 - May 2024',
    current: false,
    icon: Shield,
    bullets: [
      'Supported 2000+ enterprise endpoints using Microsoft 365, Azure AD, and VPN systems',
      'Assisted Tier 2 engineering teams with identity administration, endpoint configuration, and system troubleshooting',
      'Deployed SentinelOne EDR and integrated Sentinel SIEM to strengthen centralized threat detection and endpoint monitoring'
    ]
  },
  {
    id: '6',
    role: 'Systems Administrator',
    company: 'Events and Crafts',
    type: 'Part-time',
    location: 'Onsite, Angeles City, Philippines',
    date: 'Feb 2021 - Jan 2024',
    current: false,
    icon: Server,
    bullets: [
      'Managed internal network systems and IT infrastructure for operational events and office environments',
      'Maintained endpoint systems, network connectivity, and hardware configurations for staff and event operations',
      'Delivered on-site technical support and troubleshooting for production environments'
    ]
  }
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  return (
    <section id="experience" className="min-h-screen relative py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-black text-[#D4AF37] mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961]" />
        </motion.div>

        <div className="relative border-l border-[#D4AF37]/30 ml-4 md:ml-8 space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group cursor-pointer"
                onClick={() => setSelectedExp(exp)}
              >
                {/* Timeline Node */}
                <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)] group-hover:scale-150 transition-transform duration-300" />

                <div className="bg-[#12161E] border border-[#1C1F26] rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300">
                  
                  {/* Icon Box */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-[#9CA3AF] text-sm">
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        {exp.current && (
                          <span className="font-mono text-[10px] px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded">
                            Current
                          </span>
                        )}
                        <span className="font-mono text-xs text-[#9CA3AF]">
                          {exp.date}
                        </span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="font-mono text-[10px] px-2.5 py-1 bg-[#C9A961]/15 text-[#C9A961] rounded">
                        {exp.type}
                      </span>
                      <span className="font-mono text-[10px] px-2.5 py-1 bg-white/5 text-[#9CA3AF] rounded">
                        {exp.location}
                      </span>
                    </div>

                    {/* Hover Indicator */}
                    <div className="mt-4 flex items-center gap-1.5 text-[#D4AF37] font-mono text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Click to view details <ArrowRight size={14} />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExp && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="fixed inset-0 bg-[#0A0E14]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-2xl bg-[#12161E] border border-[#1C1F26] rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 md:p-8 overflow-y-auto">
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-white bg-[#1C1F26] rounded-full z-20 transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="mt-2 mb-8 pr-8">
                    <h3 className="font-heading text-3xl font-bold text-white mb-2">{selectedExp.role}</h3>
                    <div className="font-heading text-xl text-[#D4AF37] mb-4">{selectedExp.company}</div>
                    <div className="font-mono text-sm text-[#9CA3AF] mb-2">{selectedExp.date}</div>
                    <div className="font-mono text-xs text-[#9CA3AF]">{selectedExp.type} &middot; {selectedExp.location}</div>
                  </div>

                  <div className="space-y-4">
                    {selectedExp.bullets.map((bullet, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(201,169,97,0.8)]" />
                        <p className="font-body text-[#D1D5DB] leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
