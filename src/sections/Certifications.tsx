import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as SimpleIcons from 'simple-icons';
import { X, ExternalLink, GraduationCap, Award } from 'lucide-react';

const getIconPath = (slug: string) => {
  const icon = (SimpleIcons as any)[`si${slug.charAt(0).toUpperCase() + slug.slice(1)}`];
  return icon ? icon.path : null;
};

const certifications = [
  { id: '1', name: 'CompTIA CySA+', issuer: 'CompTIA', category: 'Security', icon: 'comptia', verifyLink: '#' },
  { id: '2', name: 'CompTIA Security+', issuer: 'CompTIA', category: 'Security', icon: 'comptia', verifyLink: '#' },
  { id: '3', name: 'CompTIA CSAP', issuer: 'CompTIA', category: 'Security', icon: 'comptia', verifyLink: '#' },
  { id: '4', name: 'CCNP ENCOR', issuer: 'Cisco', category: 'Network', icon: 'cisco', verifyLink: '#' },
  { id: '5', name: 'CCNA', issuer: 'Cisco', category: 'Network', icon: 'cisco', verifyLink: '#' },
  { id: '6', name: 'Fortinet NSE3 FCA', issuer: 'Fortinet', category: 'Security', icon: 'fortinet', verifyLink: '#' },
  { id: '7', name: 'Google Cybersecurity Professional', issuer: 'Google', category: 'Security', icon: 'google', verifyLink: '#' },
  { id: '8', name: 'Microsoft Cybersecurity Analyst', issuer: 'Microsoft', category: 'Security', icon: 'microsoft', verifyLink: '#' },
  { id: '9', name: 'SecOps CNSP', issuer: 'SecOps Group', category: 'Security', icon: 'security', verifyLink: '#' },
  { id: '10', name: 'SecOps C-AI/MLPen', issuer: 'SecOps Group', category: 'AI', icon: 'security', verifyLink: '#' },
  { id: '11', name: 'NASA OS101', issuer: 'NASA', category: 'Cloud', icon: 'nasa', verifyLink: '#' },
  { id: '12', name: 'AWS Solutions Architect', issuer: 'Amazon AWS', category: 'Cloud', icon: 'amazonwebservices', verifyLink: '#' },
  { id: '13', name: 'Google AI Professional', issuer: 'Google', category: 'AI', icon: 'google', verifyLink: '#' },
  { id: '14', name: 'Google IT Support Professional', issuer: 'Google', category: 'ITSM', icon: 'google', verifyLink: '#' },
  { id: '15', name: 'Cisco OffSec Ethical Hacker', issuer: 'Cisco', category: 'Security', icon: 'cisco', verifyLink: '#' },
  { id: '16', name: 'Qualys CS-EDR', issuer: 'Qualys', category: 'Security', icon: 'qualys', verifyLink: '#' },
  { id: '17', name: 'Qualys VMDR', issuer: 'Qualys', category: 'Security', icon: 'qualys', verifyLink: '#' },
  { id: '18', name: 'JNCIA-SEC', issuer: 'Juniper Networks', category: 'Network', icon: 'junipernetworks', verifyLink: '#' },
  { id: '19', name: 'Palo Alto PMcNA', issuer: 'Palo Alto Networks', category: 'Network', icon: 'paloaltonetworks', verifyLink: '#' },
  { id: '20', name: 'Palo Alto PMvNA', issuer: 'Palo Alto Networks', category: 'Network', icon: 'paloaltonetworks', verifyLink: '#' },
  { id: '21', name: 'ITIL v4 Foundation', issuer: 'Axelos', category: 'ITSM', icon: 'itil', verifyLink: '#' },
  { id: '22', name: 'CCEP', issuer: 'Various', category: 'GRC', icon: 'security', verifyLink: '#' },
  { id: '23', name: 'CPPS', issuer: 'Various', category: 'GRC', icon: 'security', verifyLink: '#' },
  { id: '24', name: 'CSCSO', issuer: 'Various', category: 'Security', icon: 'security', verifyLink: '#' },
  { id: '25', name: 'CTIGA', issuer: 'Various', category: 'GRC', icon: 'security', verifyLink: '#' },
  { id: '26', name: 'CRPO', issuer: 'Various', category: 'GRC', icon: 'security', verifyLink: '#' }
];

const education = [
  {
    id: '1',
    degree: 'MSc Cybersecurity',
    school: 'Holy Angel University',
    date: 'Expected Nov 2026',
    location: 'Angeles City, Philippines',
    highlight: 'Candidate with High Distinction',
    details: 'Pursuing advanced studies in cybersecurity, focusing on threat intelligence, incident response, and secure architecture design.'
  },
  {
    id: '2',
    degree: 'BSIT Major in Network Administration',
    school: 'Holy Angel University',
    date: 'Graduated May 2024',
    location: 'Angeles City, Philippines',
    highlight: 'Summa Cum Laude · JDN Scholar · DICT Scholar',
    details: 'Esports Varsity Team Captain. Specialized in network infrastructure, routing protocols, and enterprise security.'
  },
  {
    id: '3',
    degree: 'Postgraduate in Cybersecurity GRC',
    school: 'Inegben Academy',
    date: 'Expected July 2026',
    location: 'Remote, Lagos, Nigeria',
    highlight: 'Full Scholar',
    details: 'Focusing on Governance, Risk, and Compliance frameworks including NIST CSF, ISO 27001, and regulatory compliance.'
  },
  {
    id: '4',
    degree: 'Humanities and Social Sciences',
    school: 'Hillcrest Heights Institute',
    date: 'Graduated March 2020',
    location: 'Philippines',
    highlight: 'Class Valedictorian',
    details: 'SSG President, Soccer Nationals Athlete Varsity Captain. Developed strong communication and critical thinking skills.'
  }
];

const affiliations = [
  { org: 'DataCamp and Data Engineering Philippines', role: 'Full Scholar', date: '2026 to Present' },
  { org: 'Philippine Institute of Cybersecurity Professionals (PICSPro)', role: 'Member', date: '2025 to Present' },
  { org: 'Philippine Computer Society (PCS)', role: 'Member', date: '2025 to Present' }
];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [expandedEdu, setExpandedEdu] = useState<string | null>(null);

  const categories = ['All', 'Security', 'Network', 'Cloud', 'AI', 'GRC', 'ITSM'];

  const filteredCerts = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="min-h-screen relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-black text-[#00D4FF] mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D4FF] to-[#6366F1]" />
        </motion.div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="font-display text-4xl font-bold text-white mb-12 flex items-center gap-4">
              <GraduationCap className="text-[#00D4FF]" size={40} />
              Education
            </h3>
            <div className="relative border-l border-[#00D4FF]/30 ml-4 space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 group cursor-pointer"
                  onMouseEnter={() => setExpandedEdu(edu.id)}
                  onMouseLeave={() => setExpandedEdu(null)}
                >
                  <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.8)] group-hover:scale-150 transition-transform duration-300" />
                  
                  <div className="bg-[#0B101A] border border-[#1A2235] rounded-xl p-6 hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-300">
                    <span className="font-mono text-sm text-[#00D4FF] mb-2 block">{edu.date}</span>
                    <h4 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{edu.degree}</h4>
                    <p className="font-body text-lg text-[#A0A8B8] mb-2">{edu.school}</p>
                    <p className="font-mono text-sm text-[#6366F1] font-semibold mb-2">{edu.highlight}</p>
                    
                    <AnimatePresence>
                      {expandedEdu === edu.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-[#1A2235]">
                            <p className="font-mono text-xs text-[#A0A8B8] mb-2">{edu.location}</p>
                            <p className="font-body text-white leading-relaxed">{edu.details}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Affiliations */}
          <div>
            <h3 className="font-display text-4xl font-bold text-white mb-12 flex items-center gap-4">
              <Award className="text-[#6366F1]" size={40} />
              Professional Affiliations
            </h3>
            <div className="space-y-6">
              {affiliations.map((affil, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0B101A] border border-[#1A2235] rounded-xl p-6 border-l-4 border-l-[#6366F1] hover:border-[#6366F1]/50 hover:bg-[#6366F1]/5 transition-all duration-300"
                >
                  <h4 className="font-heading text-xl font-bold text-white mb-2">{affil.org}</h4>
                  <div className="flex justify-between items-center font-mono text-sm text-[#A0A8B8]">
                    <span className="text-[#6366F1]">{affil.role}</span>
                    <span>{affil.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-sm px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#00D4FF] text-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.5)]' 
                  : 'bg-[#0B101A] border border-[#1A2235] text-[#A0A8B8] hover:text-white hover:border-[#00D4FF]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredCerts.map((cert) => {
              const svgPath = getIconPath(cert.icon);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-[#0B101A] border border-[#1A2235] rounded-xl p-6 flex flex-col items-center text-center cursor-pointer group hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center text-[#A0A8B8] group-hover:text-[#00D4FF] transition-colors">
                    {svgPath ? (
                      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d={svgPath} />
                      </svg>
                    ) : (
                      <Award size={48} strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {cert.name}
                  </h3>
                  <p className="font-body text-sm text-[#A0A8B8] mb-4">{cert.issuer}</p>
                  <span className="font-mono text-xs px-3 py-1 bg-[#1A2235] border border-[#2A3245] rounded-full text-[#00D4FF] mt-auto">
                    {cert.category}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cert Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-[#080B12]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0B101A] border border-[#1A2235] rounded-2xl p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 text-[#A0A8B8] hover:text-white bg-[#1A2235] rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center text-[#00D4FF]">
                {getIconPath(selectedCert.icon) ? (
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d={getIconPath(selectedCert.icon)} />
                  </svg>
                ) : (
                  <Award size={64} strokeWidth={1.5} />
                )}
              </div>

              <h3 className="font-heading text-3xl font-bold text-white mb-4">
                {selectedCert.name}
              </h3>
              
              <div className="font-body text-xl text-[#A0A8B8] mb-8">
                Issued by <span className="text-white font-medium">{selectedCert.issuer}</span>
              </div>

              <a 
                href={selectedCert.verifyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-black font-heading font-bold uppercase tracking-wider rounded-lg hover:bg-[#00D4FF]/90 transition-colors"
              >
                Verify Credential <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
