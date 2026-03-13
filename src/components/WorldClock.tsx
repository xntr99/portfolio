import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function WorldClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const dateString = time.toLocaleDateString('en-US', {
    timeZone: 'Asia/Manila',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0B101A] border border-[#1A2235] rounded-full shadow-[0_0_15px_rgba(0,212,255,0.15)]">
      <Globe size={14} className="text-[#00D4FF]" />
      <div className="flex flex-col">
        <span className="text-[9px] font-mono text-[#A0A8B8] leading-none mb-0.5 tracking-wider">MANILA, PH (PHT)</span>
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="text-xs font-mono text-[#00D4FF] font-medium">{timeString}</span>
          <span className="text-[9px] font-mono text-[#A0A8B8]">{dateString}</span>
        </div>
      </div>
    </div>
  );
}
