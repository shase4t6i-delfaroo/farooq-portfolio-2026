import React from 'react';
import { AGENCY_INFO } from '../data/portfolioData';
import {
  FileSpreadsheet,
  ExternalLink,
  MessageSquare,
  Facebook,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUp,
  Phone
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Row */}
        <div className="bg-[#0D47A1] rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              ⚡ Instant Response • Under 15 Minutes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Ready to Clean Your Dirty Excel Leads?
            </h3>
            <p className="text-sm text-blue-100 mt-1 max-w-xl">
              Place an order on Fiverr for full buyer protection or contact us directly on WhatsApp for custom bulk pricing.
            </p>
            <p className="text-xs font-bold text-emerald-300 mt-2 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>Call / WhatsApp: 03184861903</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.fiverr.com/s/aeeeGqg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DBF73] hover:bg-[#18a864] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wide flex items-center gap-2 transition-all shadow-md"
            >
              <span>Hire Me on Fiverr</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/923184861903"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wide flex items-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us: 03184861903</span>
            </a>

            <a
              href="https://www.facebook.com/share/18tXiL6gDe/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:bg-[#1565C0] text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wide flex items-center gap-2 transition-all shadow-md"
              title="Visit our Facebook Page"
            >
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>

        {/* 4 Columns Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D47A1] flex items-center justify-center text-white shadow-md">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl text-white">
                {AGENCY_INFO.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier Excel & Data Cleaning agency founded by Farooq Raza in Bahawalpur, Punjab, Pakistan. We transform messy, corrupted, duplicate-ridden datasets into spotless CRM-ready records.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                24/7 Response
              </span>
              <span>•</span>
              <span>100% NDA Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cleaning Services
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  Before vs After Diff
                </a>
              </li>
              <li>
                <a href="#live-demo" className="hover:text-white transition-colors">
                  Live Cleaner Demo
                </a>
              </li>
              <li>
                <a href="#why-choose-me" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Fiverr Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Required External Links: Facebook, Fiverr, WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Official Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.fiverr.com/s/aeeeGqg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Hire Me on Fiverr Gig
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/18tXiL6gDe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook Page (Farooq Data Solution)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923184861903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Call / WhatsApp: 03184861903</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {AGENCY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Agency Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Agency Location & Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0D47A1] shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.fullLocation}</span>
              </p>
              <a
                href="https://wa.me/923184861903"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:underline font-bold"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>Call / WhatsApp: 03184861903</span>
              </a>
              <a
                href="https://www.facebook.com/share/18tXiL6gDe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:underline font-bold"
              >
                <Facebook className="w-3.5 h-3.5 shrink-0" />
                <span>Facebook: Farooq Data Solution</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>PKT (UTC+5) • Fast Global Turnaround</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Trusted by 150+ Global Clients</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {AGENCY_INFO.name}. All rights reserved. Registered Data Cleaning Agency in Bahawalpur, Punjab, Pakistan.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
