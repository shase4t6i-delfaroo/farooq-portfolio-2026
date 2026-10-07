import React from 'react';
import { SERVICES, AGENCY_INFO, ServiceItem } from '../data/portfolioData';
import {
  Keyboard,
  CopyX,
  ShieldCheck,
  FileSpreadsheet,
  Sparkles,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Clock,
  ArrowRight
} from 'lucide-react';

const renderIcon = (name: string) => {
  switch (name) {
    case 'Keyboard':
      return <Keyboard className="w-6 h-6 text-[#0D47A1]" />;
    case 'CopyX':
      return <CopyX className="w-6 h-6 text-[#0D47A1]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-[#0D47A1]" />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className="w-6 h-6 text-[#0D47A1]" />;
    case 'Sparkles':
    default:
      return <Sparkles className="w-6 h-6 text-[#0D47A1]" />;
  }
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0D47A1]/10 text-[#0D47A1] mb-3">
            <span>Specialized Agency Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Data Cleaning Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Professional Excel & spreadsheet cleaning tailored for marketing agencies, sales teams, CRM administrators, and e-commerce stores worldwide.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between p-7 hover:shadow-xl hover:-translate-y-1 ${
                index === 0
                  ? 'border-[#0D47A1]/40 ring-1 ring-[#0D47A1]/20 shadow-md relative'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {index === 0 && (
                <span className="absolute -top-3 left-6 bg-[#0D47A1] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                  Most Requested
                </span>
              )}

              <div>
                {/* Icon & Metrics badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-xs">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    {service.metrics}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Included in Every Delivery:
                  </p>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0D47A1] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>24h Turnaround</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href={AGENCY_INFO.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0D47A1] hover:text-[#082d68] hover:underline flex items-center gap-1"
                  >
                    Order Service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}

          {/* 6th Tile: Custom Bespoke Project Card */}
          <div className="bg-gradient-to-br from-[#0D47A1] to-[#0A3880] rounded-2xl text-white p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 text-blue-100 px-2.5 py-0.5 rounded-full inline-block mb-3">
                Custom Scenarios
              </span>
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Have a Complex or Huge Dataset?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-6">
                From 50,000+ row database scrubs to custom Python automation, PDF scraping, and HubSpot/Salesforce schema mapping.
              </p>
              <div className="space-y-2 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free sample audit (send 50 rows)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Custom bulk quotation in 15 minutes</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 flex flex-col sm:flex-row gap-2">
              <a
                href="https://wa.me/923184861903"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us: 03184861903</span>
              </a>
              <a
                href={AGENCY_INFO.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white hover:bg-slate-100 text-[#0D47A1] py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                Fiverr Message
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
