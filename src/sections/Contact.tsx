import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:batulaustin.work@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-5xl font-black text-[#D4AF37] mb-4">
            Connect With Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] mx-auto mb-6" />
          <p className="text-[#9CA3AF] font-body text-lg">
            Have a question or want to work together? Send me a message.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[#12161E] border border-[#1C1F26] rounded-2xl p-6 md:p-8 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider flex items-center gap-2">
                <User size={14} /> Name
              </label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-[#0A0E14] border border-[#1C1F26] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-body"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs text-[#A0A8B8] uppercase tracking-wider flex items-center gap-2">
                <Mail size={14} /> Email
              </label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-[#0A0E14] border border-[#1C1F26] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-body"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs text-[#A0A8B8] uppercase tracking-wider flex items-center gap-2">
              <MessageSquare size={14} /> Message
            </label>
            <textarea 
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-[#080B12] border border-[#1A2235] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors font-body resize-none"
              placeholder="How can I help you?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#D4AF37]/90 transition-colors font-heading tracking-wide"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
