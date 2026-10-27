import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070d1e]/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 flex items-center gap-2 shadow-2xl">
      <a
        href="https://wa.me/+233204494160"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap border border-emerald-700/50"
      >
        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
        <span>WhatsApp</span>
      </a>

      <a
        href="#contact"
        className="flex-1 py-2.5 px-3 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shadow-md shadow-amber-400/20"
      >
        <Send className="w-3.5 h-3.5 text-slate-950" />
        <span>Request Quote</span>
      </a>
    </div>
  );
};
