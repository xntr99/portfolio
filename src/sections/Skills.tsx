import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as SimpleIcons from 'simple-icons';
import { Shield, Lock, Network, Server, Cloud, Cpu, Code, Wrench, Database, Terminal } from 'lucide-react';

// Helper to get SimpleIcon SVG path
const getIconPath = (slug: string) => {
  const icon = (SimpleIcons as any)[`si${slug.charAt(0).toUpperCase() + slug.slice(1)}`];
  return icon ? icon.path : null;
};

const skillCategories = [
  {
    title: 'Security and GRC',
    icon: Shield,
    skills: [
      { name: 'Firewall Configuration', icon: Shield, desc: 'Configuring and managing network firewalls for traffic filtering.' },
      { name: 'Active Directory Security', icon: Lock, desc: 'Securing AD environments against credential theft and privilege escalation.' },
      { name: 'Access Controls', icon: Lock, desc: 'Implementing RBAC, ABAC, and zero-trust access models.' },
      { name: 'Encryption', icon: Lock, desc: 'Data at rest and in transit encryption protocols and key management.' },
      { name: 'SIEM', icon: Shield, desc: 'Security Information and Event Management for log aggregation and analysis.' },
      { name: 'SOAR', icon: Shield, desc: 'Security Orchestration, Automation, and Response for incident handling.' },
      { name: 'IPS', icon: Shield, desc: 'Intrusion Prevention Systems for real-time threat blocking.' },
      { name: 'EDR', icon: Shield, desc: 'Endpoint Detection and Response for host-level threat visibility.' },
      { name: 'Email Security', icon: Shield, desc: 'Protecting email gateways against phishing, malware, and spam.' },
      { name: 'Threat Intelligence', icon: Shield, desc: 'Gathering and analyzing data about potential cyber threats.' },
      { name: 'Incident Response', icon: Shield, desc: 'Methodical approach to managing and resolving security breaches.' },
      { name: 'Penetration Testing', icon: Shield, desc: 'Simulated cyberattacks to identify exploitable vulnerabilities.' },
      { name: 'Vulnerability Assessment', icon: Shield, desc: 'Systematic review of security weaknesses in an information system.' },
      { name: 'Malware Analysis', icon: Shield, desc: 'Dissecting malicious software to understand its behavior and origin.' },
      { name: 'Packet Analysis', icon: Network, desc: 'Capturing and analyzing network traffic for troubleshooting and security.' },
      { name: 'Wireshark', icon: 'wireshark', desc: 'Network protocol analyzer for deep inspection of data traffic.' },
      { name: 'Telemetry Monitoring', icon: Server, desc: 'Collecting and analyzing system metrics for performance and security.' },
      { name: 'Risk Management', icon: Shield, desc: 'Identifying, evaluating, and mitigating risks to IT assets.' },
      { name: 'Business Compliance', icon: Shield, desc: 'Ensuring IT operations adhere to legal and regulatory standards.' },
      { name: 'OSINT', icon: Shield, desc: 'Open-Source Intelligence gathering for threat profiling.' },
      { name: 'NIST Framework', icon: Shield, desc: 'Adherence to the National Institute of Standards and Technology guidelines.' },
      { name: 'ISO 27001', icon: Shield, desc: 'International standard for information security management systems.' },
      { name: 'MITRE ATT&CK', icon: Shield, desc: 'Knowledge base of adversary tactics and techniques based on real-world observations.' }
    ]
  },
  {
    title: 'Cloud and Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'Azure', icon: 'microsoftazure', desc: 'Microsoft cloud computing platform and services.' },
      { name: 'AWS', icon: 'amazonwebservices', desc: 'Amazon Web Services cloud computing platform.' },
      { name: 'Google Cloud Platform', icon: 'googlecloud', desc: 'Suite of cloud computing services by Google.' },
      { name: 'Microsoft 365', icon: 'microsoft365', desc: 'Cloud-based productivity suite and identity management.' },
      { name: 'Exchange', icon: 'microsoftexchange', desc: 'Email and calendaring server developed by Microsoft.' },
      { name: 'SharePoint', icon: 'microsoftsharepoint', desc: 'Web-based collaborative platform integrated with Microsoft Office.' },
      { name: 'Windows Server', icon: 'windows', desc: 'Group of operating systems designed by Microsoft that supports enterprise-level management.' },
      { name: 'Linux Systems', icon: 'linux', desc: 'Open-source Unix-like operating systems.' },
      { name: 'Hypervisors', icon: Server, desc: 'Software that creates and runs virtual machines.' },
      { name: 'Infrastructure Deployment', icon: Server, desc: 'Provisioning and configuring IT infrastructure components.' },
      { name: 'Cloud Migration', icon: Cloud, desc: 'Moving digital assets, services, databases, and applications to the cloud.' },
      { name: 'Backup and Recovery', icon: Database, desc: 'Creating copies of data to protect against data loss.' },
      { name: 'Veeam', icon: 'veeam', desc: 'Backup, disaster recovery and intelligent data management software.' },
      { name: 'EC2', icon: 'amazonec2', desc: 'Amazon Elastic Compute Cloud for scalable computing capacity.' },
      { name: 'S3', icon: 'amazons3', desc: 'Amazon Simple Storage Service for object storage.' },
      { name: 'RDS', icon: 'amazonrds', desc: 'Amazon Relational Database Service.' },
      { name: 'VPC', icon: Cloud, desc: 'Virtual Private Cloud for isolated cloud resources.' },
      { name: 'Elastic Stack', icon: 'elastic', desc: 'Group of open source products for search, analysis, and visualization.' }
    ]
  },
  {
    title: 'Networking',
    icon: Network,
    skills: [
      { name: 'Subnetting', icon: Network, desc: 'Dividing a network into two or more networks.' },
      { name: 'Routing', icon: Network, desc: 'Selecting a path for traffic in a network or between or across multiple networks.' },
      { name: 'Switching', icon: Network, desc: 'Connecting devices together on a computer network.' },
      { name: 'Network Architecture Design', icon: Network, desc: 'Designing the layout and structure of a computer network.' },
      { name: 'Cisco Infrastructure', icon: 'cisco', desc: 'Networking hardware, software, and telecommunications equipment.' },
      { name: 'Meraki', icon: 'cisco', desc: 'Cloud-managed IT solutions from Cisco.' },
      { name: 'VLAN', icon: Network, desc: 'Virtual Local Area Network for broadcast domain segmentation.' },
      { name: 'LACP', icon: Network, desc: 'Link Aggregation Control Protocol for bundling multiple physical ports.' },
      { name: 'OSPF', icon: Network, desc: 'Open Shortest Path First routing protocol.' },
      { name: 'EIGRP', icon: Network, desc: 'Enhanced Interior Gateway Routing Protocol.' },
      { name: 'ACL', icon: Shield, desc: 'Access Control Lists for network traffic filtering.' },
      { name: 'NAT/PAT', icon: Network, desc: 'Network Address Translation and Port Address Translation.' },
      { name: 'STP', icon: Network, desc: 'Spanning Tree Protocol to prevent loop in network topology.' },
      { name: 'EtherChannel', icon: Network, desc: 'Port link aggregation technology.' },
      { name: 'HSRP', icon: Network, desc: 'Hot Standby Router Protocol for default gateway redundancy.' },
      { name: 'DHCP', icon: Network, desc: 'Dynamic Host Configuration Protocol for IP address assignment.' },
      { name: 'VPN', icon: Lock, desc: 'Virtual Private Network for secure remote access.' },
      { name: 'VoIP', icon: Network, desc: 'Voice over Internet Protocol for voice communications.' },
      { name: 'Load Balancing', icon: Network, desc: 'Distributing network traffic across multiple servers.' }
    ]
  },
  {
    title: 'AI Utilization and Automation',
    icon: Cpu,
    skills: [
      { name: 'AI Agents', icon: Cpu, desc: 'Autonomous systems that perceive their environment and take actions.' },
      { name: 'Workflow Automation', icon: Cpu, desc: 'Automating complex business processes and IT tasks.' },
      { name: 'Prompt Engineering', icon: Code, desc: 'Designing and optimizing prompts for large language models.' },
      { name: 'n8n', icon: 'n8n', desc: 'Fair-code workflow automation tool.' },
      { name: 'Zapier', icon: 'zapier', desc: 'Web-based service that allows end users to integrate the web applications they use.' },
      { name: 'OpenAI', icon: 'openai', desc: 'AI research and deployment company.' },
      { name: 'GPT', icon: 'openai', desc: 'Generative Pre-trained Transformer models.' },
      { name: 'Claude', icon: 'anthropic', desc: 'AI assistant created by Anthropic.' },
      { name: 'Gemini', icon: 'google', desc: 'Multimodal AI model developed by Google.' },
      { name: 'Llama', icon: 'meta', desc: 'Large language model developed by Meta.' },
      { name: 'Copilot', icon: 'github', desc: 'AI pair programmer.' },
      { name: 'Perplexity', icon: 'perplexity', desc: 'AI-powered search engine.' },
      { name: 'Cursor', icon: Code, desc: 'AI-first code editor.' },
      { name: 'Replit', icon: 'replit', desc: 'Online collaborative IDE.' },
      { name: 'Antigravity', icon: Code, desc: 'AI coding harness.' },
      { name: 'Loveable', icon: Code, desc: 'AI development tool.' },
      { name: 'AI-assisted Development', icon: Code, desc: 'Using AI tools to accelerate software development.' },
      { name: 'APIs', icon: Code, desc: 'Application Programming Interfaces for software integration.' },
      { name: 'Webhooks', icon: Code, desc: 'User-defined HTTP callbacks.' }
    ]
  },
  {
    title: 'Enterprise Systems and Support Tools',
    icon: Wrench,
    skills: [
      { name: 'Splashtop', icon: Wrench, desc: 'Remote desktop software.' },
      { name: 'Datto RMM', icon: Wrench, desc: 'Remote monitoring and management platform.' },
      { name: 'N-Central', icon: Wrench, desc: 'IT service management software.' },
      { name: 'ConnectWise', icon: Wrench, desc: 'Business management software for IT solution providers.' },
      { name: 'TeamViewer', icon: 'teamviewer', desc: 'Remote control, desktop sharing, and file transfer software.' },
      { name: 'AnyDesk', icon: 'anydesk', desc: 'Remote desktop application.' },
      { name: 'LogMeIn', icon: Wrench, desc: 'Remote access and systems management software.' },
      { name: 'ServiceNow', icon: Wrench, desc: 'Cloud computing platform to help companies manage digital workflows.' },
      { name: 'Zendesk', icon: 'zendesk', desc: 'Customer service software and support ticketing system.' },
      { name: 'Jira', icon: 'jira', desc: 'Issue tracking and agile project management tool.' },
      { name: 'AutoTask', icon: Wrench, desc: 'Professional Services Automation software.' },
      { name: 'ConnectWise Manage', icon: Wrench, desc: 'Business management platform.' },
      { name: 'NinjaRMM', icon: Wrench, desc: 'Remote monitoring and management software.' },
      { name: 'IT Glue', icon: Wrench, desc: 'IT documentation software.' },
      { name: 'CLI Diagnostics', icon: Code, desc: 'Using command-line interfaces for system troubleshooting.' },
      { name: 'Group Policy Management', icon: Server, desc: 'Managing Windows Server Group Policy Objects.' },
      { name: 'Hardware and Software Troubleshooting', icon: Wrench, desc: 'Diagnosing and resolving IT issues.' },
      { name: 'System Diagnostics Tools', icon: Wrench, desc: 'Tools for analyzing system performance and health.' }
    ]
  },
  {
    title: 'Software Development',
    icon: Terminal,
    skills: [
      { name: 'PowerShell', icon: 'powershell', desc: 'Task automation and configuration management framework.' },
      { name: 'Python', icon: 'python', desc: 'High-level, general-purpose programming language.' },
      { name: 'Java', icon: 'java', desc: 'High-level, class-based, object-oriented programming language.' },
      { name: 'JavaScript', icon: 'javascript', desc: 'High-level, often just-in-time compiled language.' },
      { name: 'TypeScript', icon: 'typescript', desc: 'Strict syntactical superset of JavaScript.' },
      { name: 'SQL', icon: Database, desc: 'Domain-specific language used in programming and managing relational databases.' },
      { name: 'PHP', icon: 'php', desc: 'General-purpose scripting language geared toward web development.' },
      { name: 'HTML', icon: 'html5', desc: 'Standard markup language for documents designed to be displayed in a web browser.' },
      { name: 'CSS', icon: 'css3', desc: 'Style sheet language used for describing the presentation of a document written in HTML.' },
      { name: 'Dart', icon: 'dart', desc: 'Client-optimized language for fast apps on any platform.' },
      { name: 'Flutter', icon: 'flutter', desc: 'Open-source UI software development kit created by Google.' },
      { name: '.NET', icon: 'dotnet', desc: 'Free, cross-platform, open source developer platform.' },
      { name: 'React', icon: 'react', desc: 'Free and open-source front-end JavaScript library for building user interfaces.' },
      { name: 'Git', icon: 'git', desc: 'Distributed version control system.' }
    ]
  }
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-black text-[#D4AF37] mb-4">
            Core Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961]" />
        </motion.div>

        <div className="space-y-6">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            const isHovered = hoveredCategory === category.title;

            return (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-[#12161E] border border-[#1C1F26] rounded-xl transition-colors duration-300 hover:border-[#D4AF37]/40"
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="px-6 py-5 flex items-center gap-4 cursor-pointer">
                  <div className="p-2 rounded-lg bg-[#1C1F26]/50 text-[#D4AF37]">
                    <CategoryIcon size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-visible"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#1C1F26]/50">
                        <div className="flex flex-wrap gap-3">
                          {category.skills.map((skill, skillIndex) => {
                            const isSimpleIcon = typeof skill.icon === 'string';
                            const IconComponent = !isSimpleIcon ? skill.icon : null;
                            const svgPath = isSimpleIcon ? getIconPath(skill.icon as string) : null;

                            return (
                              <div key={skill.name} className="relative group">
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: skillIndex * 0.02 }}
                                  className="bg-[#16191F] border border-[#1C1F26] rounded-lg px-4 py-2.5 flex items-center gap-3 cursor-pointer hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300"
                                  onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                                  onMouseEnter={() => setActiveSkill(skill.name)}
                                  onMouseLeave={() => setActiveSkill(null)}
                                >
                                  {/* Icon */}
                                  <div className="w-5 h-5 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#D4AF37] transition-colors">
                                    {isSimpleIcon && svgPath ? (
                                      <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d={svgPath} />
                                      </svg>
                                    ) : IconComponent ? (
                                      <IconComponent size={18} />
                                    ) : (
                                      <div className="w-2 h-2 rounded-full bg-current" />
                                    )}
                                  </div>
                                  
                                  {/* Label */}
                                  <span className="font-mono text-sm text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                                    {skill.name}
                                  </span>
                                </motion.div>

                                {/* Popover */}
                                <AnimatePresence>
                                  {activeSkill === skill.name && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                      transition={{ duration: 0.15 }}
                                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[250px] sm:max-w-[300px] z-[100] pointer-events-none"
                                    >
                                      <div className="bg-[#1C1F26] border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-lg p-3 text-center relative">
                                        <p className="font-body text-sm text-[#D1D5DB] leading-tight">
                                          {skill.desc}
                                        </p>
                                        {/* Triangle pointer */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-[#1C1F26] border-t-8 border-x-transparent border-x-8 border-b-0" />
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
