import React from 'react';
import { PRICING_PACKAGES, AGENCY_INFO } from '../data/portfolioData';
import { Check, ExternalLink, Zap, Star, MessageSquare } from 'lucide-react';

export const PricingPackages: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0D47A1]/10 text-[#0D47A1] mb-3">
            <span>Transparent Agency Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Order Packages on Fiverr
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Escrow-backed payments, 24-hour turnaround, and 100% satisfaction guarantee.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-white transition-all flex flex-col justify-between p-8 relative ${
                pkg.popular
                  ? 'border-2 border-[#0D47A1] shadow-2xl scale-102 lg:-translate-y-2'
                  : 'border border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0D47A1] text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Package Title & Leads count */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {pkg.delivery}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-6">{pkg.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#0D47A1]">{pkg.price}</span>
                  <span className="text-xs text-slate-500 font-semibold">USD / One-time</span>
                </div>
                <div className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  {pkg.leads}
                </div>

                {/* Feature List */}
                <div className="space-y-3 pt-6 border-t border-slate-100 mb-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Package Inclusions:
                  </p>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-[#0D47A1] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order CTA */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <a
                  href={pkg.fiverrLink || AGENCY_INFO.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm ${
                    pkg.popular
                      ? 'bg-[#1DBF73] hover:bg-[#18a864] text-white shadow-emerald-500/20'
                      : 'bg-[#0D47A1] hover:bg-[#082d68] text-white'
                  }`}
                >
                  <span>Order on Fiverr</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/923184861903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-600" />
                  <span>Call / WhatsApp: 03184861903</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
