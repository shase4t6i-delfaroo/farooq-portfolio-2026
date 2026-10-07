import React from 'react';
import { AGENCY_INFO } from '../data/portfolioData';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="WhatsApp contact button" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Floating tooltip */}
      <a
        href="https://wa.me/923184861903"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 hidden sm:inline-flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-xl border border-slate-700 opacity-95 group-hover:opacity-100 hover:bg-slate-800 transition-all whitespace-nowrap"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Call / WhatsApp: 03184861903</span>
      </a>

      {/* WhatsApp circular button */}
      <a
        href="https://wa.me/923184861903"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Call or WhatsApp Farooq at 03184861903"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300 relative cursor-pointer"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-700 rounded-full border-2 border-white animate-pulse" />
      </a>
    </aside>
  );
};
