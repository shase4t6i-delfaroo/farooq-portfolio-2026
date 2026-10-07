import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/portfolioData';
import {
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  MapPin,
  RefreshCw
} from 'lucide-react';

interface HeroProps {
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToDemo }) => {
  const [cleanedCount, setCleanedCount] = useState(1248);
  const [isScrubbing, setIsScrubbing] = useState(false);

  const handleSimulateClean = () => {
    setIsScrubbing(true);
    setTimeout(() => {
      setCleanedCount(prev => prev + 250);
      setIsScrubbing(false);
    }, 700);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-12 pb-20 border-b border-slate-200">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D47A108_1px,transparent_1px),linear-gradient(to_bottom,#0D47A108_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Glow orb */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#0D47A1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Brief Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top trust badges */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0D47A1]/10 text-[#0D47A1] border border-[#0D47A1]/20">
                <MapPin className="w-3.5 h-3.5 text-[#0D47A1]" />
                Bahawalpur, Punjab, Pakistan
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                <span className="text-amber-500">★★★★★</span>
                5.0 Top Rated on Fiverr
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                We Clean <span className="text-[#0D47A1] underline decoration-blue-300 decoration-wavy decoration-2">1000+ Messy Leads</span> in 24 Hours
              </h1>
              <div className="flex items-center gap-2">
                <span className="h-1 w-10 bg-[#0D47A1] rounded-full inline-block"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
                  Excel & Data Cleaning Expert
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Stop wasting hours manually formatting corrupted spreadsheets. <strong className="text-slate-900 font-semibold">Farooq Data Solution</strong> removes duplicates, verifies bounce-free emails, formats international phone numbers, and turns messy dumps into flawless, CRM-ready lead lists.
            </p>

            {/* Core guarantees row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>24-Hour Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#0D47A1] shrink-0" />
                <span>Fiverr Buyer Protection</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              {/* Primary Button: Hire Me on Fiverr */}
              <a
                href="https://www.fiverr.com/s/aeeeGqg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1DBF73] hover:bg-[#18a864] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <span>Hire Me on Fiverr</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/923184861903"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base px-6 py-4 rounded-xl shadow-md hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us: 03184861903</span>
              </a>

              {/* Try Interactive Demo */}
              <button
                type="button"
                onClick={onScrollToDemo}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm px-5 py-4 rounded-xl shadow-2xs hover:border-[#0D47A1] transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#0D47A1]" />
                <span>Test Live Cleaner</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro social proof */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Active on Fiverr & WhatsApp
              </span>
              <span>•</span>
              <span>Free 50-Row Sample Test</span>
              <span>•</span>
              <span>NDA & Privacy Guaranteed</span>
            </div>

          </div>

          {/* Right Column: High-Trust Interactive Excel Transformation Widget */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200 overflow-hidden">
                
                {/* Excel Window Header */}
                <div className="bg-[#0D47A1] px-4 py-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-300" />
                    <div>
                      <p className="text-xs font-bold font-mono tracking-wide">
                        Farooq_Cleaned_Leads_Master.xlsx
                      </p>
                      <p className="text-[10px] text-blue-200">
                        Worksheet: Cleaned_24h_Delivery
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-emerald-500 text-white rounded">
                    100% Quality
                  </span>
                </div>

                {/* Sub status bar */}
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Cleaned Rows: <strong className="font-mono text-slate-900">{cleanedCount.toLocaleString()}</strong>
                  </span>
                  <button
                    onClick={handleSimulateClean}
                    disabled={isScrubbing}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#0D47A1] hover:underline cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${isScrubbing ? 'animate-spin' : ''}`} />
                    Scrub 250 More
                  </button>
                </div>

                {/* Mini Visual Comparison Table in Hero */}
                <div className="p-4 space-y-3 font-mono-data text-xs">
                  
                  {/* Dirty record preview */}
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 bg-red-100 text-red-700 rounded">
                        Raw Messy Lead (Before)
                      </span>
                      <span className="text-[10px] text-red-600 font-sans">4 Errors Flagged</span>
                    </div>
                    <div className="text-slate-700 space-y-1 font-mono text-[11px]">
                      <div>Name: <span className="bg-red-200/80 px-1 rounded text-red-900">"  jOhN   dOE  "</span></div>
                      <div>Email: <span className="bg-red-200/80 px-1 rounded text-red-900">john@@gmaill..com</span></div>
                      <div>Phone: <span className="bg-red-200/80 px-1 rounded text-red-900">123-456-7890 ext 12</span></div>
                      <div>Duplicate: <span className="text-red-700 font-bold">YES (Row #88)</span></div>
                    </div>
                  </div>

                  {/* Cleaned record preview */}
                  <div className="rounded-xl border border-emerald-300 bg-emerald-50/60 p-3 relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Farooq Standardized (After)
                      </span>
                      <span className="text-[10px] text-emerald-700 font-sans font-semibold">100% Validated</span>
                    </div>
                    <div className="text-slate-800 space-y-1 font-mono text-[11px]">
                      <div>Name: <strong className="text-emerald-900">John Doe</strong></div>
                      <div>Email: <span className="text-emerald-800">john.doe@gmail.com</span> <span className="text-[10px] text-emerald-600">[MX Valid]</span></div>
                      <div>Phone: <span className="text-emerald-800">+1 (123) 456-7890</span></div>
                      <div>Status: <span className="text-emerald-700 font-bold">Deduplicated & Clean</span></div>
                    </div>
                  </div>

                </div>

                {/* Footer metric cards inside widget */}
                <div className="bg-slate-50 p-4 border-t border-slate-200 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-2 rounded-lg border border-slate-200/70">
                    <div className="text-xs text-slate-500">Bounce Rate</div>
                    <div className="text-sm font-bold text-emerald-600">&lt; 1.5%</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200/70">
                    <div className="text-xs text-slate-500">Duplicates</div>
                    <div className="text-sm font-bold text-[#0D47A1]">0 Left</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200/70">
                    <div className="text-xs text-slate-500">Turnaround</div>
                    <div className="text-sm font-bold text-slate-900">24 Hours</div>
                  </div>
                </div>

              </div>

              {/* Floating trust card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-slate-200 p-3 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Excel & CSV Specialist</p>
                  <p className="text-[11px] text-slate-500">Bahawalpur, Punjab, Pakistan</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
