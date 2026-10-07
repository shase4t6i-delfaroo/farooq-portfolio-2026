import React from 'react';
import { WHY_CHOOSE_ME, AGENCY_INFO } from '../data/portfolioData';
import {
  Zap,
  CheckCircle2,
  BadgePercent,
  Award,
  Shield,
  Clock,
  HeartHandshake,
  CheckCheck,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const renderIcon = (name: string) => {
  switch (name) {
    case 'Zap':
      return <Zap className="w-7 h-7 text-amber-500" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="w-7 h-7 text-emerald-600" />;
    case 'BadgePercent':
      return <BadgePercent className="w-7 h-7 text-[#0D47A1]" />;
    case 'Award':
    default:
      return <Award className="w-7 h-7 text-indigo-600" />;
  }
};

export const WhyChooseMeSection: React.FC = () => {
  return (
    <section id="why-choose-me" className="py-20 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0D47A1]/10 text-[#0D47A1] mb-3">
            <span>Client Satisfaction Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Farooq Data Solution?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Trusted by lead generation specialists, digital marketers, and enterprise sales teams worldwide for rapid, accurate data hygiene.
          </p>
        </div>

        {/* 4 Pillars Grid: Fast, Accurate, Affordable, 2+ Years Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ME.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:border-[#0D47A1]/30 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <span className="text-xs font-bold text-[#0D47A1] flex items-center gap-1.5">
                  <CheckCheck className="w-4 h-4 text-emerald-600" />
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Trust Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-[#0D47A1] to-blue-800 rounded-2xl text-white p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-blue-100">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Client Confidence Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Not sure about data quality? Send 50 rows for a free test clean.
              </h3>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                We will scrub your sample rows at zero cost so you can inspect our formatting, duplicate removal, and validation before placing your full order.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={AGENCY_INFO.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1DBF73] hover:bg-[#18a864] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all text-center"
              >
                <span>Hire on Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/923184861903"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-[#0D47A1] font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us: 03184861903</span>
              </a>
            </div>

          </div>
        </div>

        {/* Agency stats row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
            <div className="text-3xl font-extrabold text-[#0D47A1]">{AGENCY_INFO.leadsCleanedCount}</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Leads Cleaned & Formatted</div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
            <div className="text-3xl font-extrabold text-[#0D47A1]">{AGENCY_INFO.accuracyRate}</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Data Accuracy Rate</div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
            <div className="text-3xl font-extrabold text-[#0D47A1]">{AGENCY_INFO.experience}</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Specialized Experience</div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
            <div className="text-3xl font-extrabold text-emerald-600">5.0 ★</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Top Rated Fiverr Score</div>
          </div>
        </div>

      </div>
    </section>
  );
};
