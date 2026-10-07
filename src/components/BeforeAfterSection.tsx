import React, { useState } from 'react';
import { BEFORE_AFTER_ROWS, MessyCleanRow, AGENCY_INFO } from '../data/portfolioData';
import {
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  Table,
  Columns
} from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'side-by-side' | 'inspect'>('side-by-side');
  const [selectedRowId, setSelectedRowId] = useState<number>(1);

  const activeRow = BEFORE_AFTER_ROWS.find(r => r.id === selectedRowId) || BEFORE_AFTER_ROWS[0];

  return (
    <section id="before-after" className="py-20 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0D47A1]/10 text-[#0D47A1] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Dataset Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Before vs. After: Messy vs Clean Excel Data
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            See the dramatic difference between chaotic raw web scrapes / dirty customer lists and our meticulously formatted, delivery-ready deliverables.
          </p>

          {/* Toggle between views */}
          <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('side-by-side')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'side-by-side'
                  ? 'bg-white text-[#0D47A1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns className="w-4 h-4" />
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setActiveTab('inspect')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'inspect'
                  ? 'bg-white text-[#0D47A1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Row-by-Row Inspector
            </button>
          </div>
        </div>

        {/* View Mode 1: Full Side-by-Side Comparison Grid */}
        {activeTab === 'side-by-side' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Box: Before (Messy Excel) */}
              <div className="border-2 border-red-200 rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="bg-red-500 text-white px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-200" />
                    <div>
                      <h4 className="font-bold text-sm">BEFORE: Raw & Corrupted Data</h4>
                      <p className="text-[11px] text-red-100">Client Dump / Scraped Leads</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase bg-red-700/60 px-2.5 py-1 rounded">
                    High Bounce & Spam Risk
                  </span>
                </div>

                <div className="overflow-x-auto custom-scrollbar flex-1">
                  <table className="w-full text-left font-mono-data text-xs">
                    <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">#</th>
                        <th className="py-2.5 px-3">Lead Name</th>
                        <th className="py-2.5 px-3">Email Address</th>
                        <th className="py-2.5 px-3">Phone</th>
                        <th className="py-2.5 px-3">Issue Detected</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BEFORE_AFTER_ROWS.map((row) => (
                        <tr key={row.id} className="hover:bg-red-50/40 transition-colors">
                          <td className="py-3 px-3 text-slate-400 font-bold">{row.id}</td>
                          <td className="py-3 px-3">
                            <span className="bg-red-100 text-red-900 px-1.5 py-0.5 rounded font-mono text-[11px]">
                              {row.rawName}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-red-700 font-mono text-[11px]">
                            {row.rawEmail}
                          </td>
                          <td className="py-3 px-3 text-slate-600 whitespace-nowrap">
                            {row.rawPhone}
                          </td>
                          <td className="py-3 px-3">
                            <span className="text-[10px] text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded block">
                              {row.rawIssue}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer notes for messy */}
                <div className="bg-red-50/60 p-4 border-t border-red-100 text-xs text-red-800 flex items-center justify-between">
                  <span className="font-medium">⚠️ 5/5 records have formatting errors or duplicate flags</span>
                  <span className="font-bold">Estimated Bounces: ~28%</span>
                </div>
              </div>

              {/* Right Box: After (Farooq Cleaned Data) */}
              <div className="border-2 border-emerald-300 rounded-2xl bg-white shadow-md overflow-hidden flex flex-col">
                <div className="bg-[#0D47A1] text-white px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <h4 className="font-bold text-sm">AFTER: Cleaned & Standardized</h4>
                      <p className="text-[11px] text-blue-200">Farooq Data Solution Master File</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase bg-emerald-500 text-white px-2.5 py-1 rounded">
                    99.9% Deliverable
                  </span>
                </div>

                <div className="overflow-x-auto custom-scrollbar flex-1">
                  <table className="w-full text-left font-mono-data text-xs">
                    <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">#</th>
                        <th className="py-2.5 px-3">Standard Name</th>
                        <th className="py-2.5 px-3">Verified Email</th>
                        <th className="py-2.5 px-3">E.164 Phone</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BEFORE_AFTER_ROWS.map((row) => (
                        <tr key={row.id} className="hover:bg-emerald-50/40 transition-colors">
                          <td className="py-3 px-3 text-emerald-700 font-bold">{row.id}</td>
                          <td className="py-3 px-3 font-semibold text-slate-900">
                            {row.cleanName}
                          </td>
                          <td className="py-3 px-3 text-emerald-800 font-mono text-[11px]">
                            {row.cleanEmail}
                          </td>
                          <td className="py-3 px-3 text-slate-700 whitespace-nowrap">
                            {row.cleanPhone}
                          </td>
                          <td className="py-3 px-3">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${
                              row.cleanStatus === 'Deduplicated'
                                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            }`}>
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              {row.cleanStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer notes for clean */}
                <div className="bg-emerald-50/70 p-4 border-t border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    All records Title-cased, validated, and normalized
                  </span>
                  <span className="font-bold text-[#0D47A1]">CRM Import Ready ✅</span>
                </div>
              </div>

            </div>

            {/* Quick Change Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-2xl font-black text-[#0D47A1]">100%</span>
                <p className="text-xs font-semibold text-slate-600 mt-1">Proper Title Casing</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-2xl font-black text-emerald-600">0</span>
                <p className="text-xs font-semibold text-slate-600 mt-1">Duplicates Remaining</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-2xl font-black text-[#0D47A1]">E.164</span>
                <p className="text-xs font-semibold text-slate-600 mt-1">Standardized Phone Format</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-2xl font-black text-emerald-600">&lt; 1%</span>
                <p className="text-xs font-semibold text-slate-600 mt-1">Expected Bounce Rate</p>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Row Inspector */}
        {activeTab === 'inspect' && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Row selector pills */}
              <div className="flex flex-wrap items-center gap-2 justify-center">
                <span className="text-xs font-bold text-slate-500 mr-2">Select Sample Lead:</span>
                {BEFORE_AFTER_ROWS.map((row) => (
                  <button
                    key={row.id}
                    onClick={() => setSelectedRowId(row.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedRowId === row.id
                        ? 'bg-[#0D47A1] text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    Row #{row.id}: {row.cleanName}
                  </button>
                ))}
              </div>

              {/* Inspector Card */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
                <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Row #{activeRow.id} Transformation Audit
                    </h3>
                    <p className="text-xs text-slate-500">
                      Rule applied: Casing normalization, RFC email validation, formatting
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Status: {activeRow.cleanStatus}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Raw version */}
                  <div className="bg-red-50/60 rounded-xl p-4 border border-red-200 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-red-700 font-sans font-bold text-xs uppercase">
                      <AlertTriangle className="w-4 h-4" />
                      Original Dirty Input
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Full Name:</span>
                      <span className="text-red-800 font-bold bg-red-100 px-1.5 py-0.5 rounded">
                        "{activeRow.rawName}"
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Email:</span>
                      <span className="text-red-700 font-bold">{activeRow.rawEmail}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Phone Number:</span>
                      <span className="text-slate-700">{activeRow.rawPhone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Company:</span>
                      <span className="text-slate-700">{activeRow.rawCompany}</span>
                    </div>
                    <div className="pt-2 border-t border-red-200/60 text-[11px] font-sans text-red-700">
                      <strong>Specific Defect:</strong> {activeRow.rawIssue}
                    </div>
                  </div>

                  {/* Cleaned version */}
                  <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-300 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 font-sans font-bold text-xs uppercase">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Cleaned Delivery Output
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Full Name:</span>
                      <span className="text-slate-900 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">
                        {activeRow.cleanName}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Email (Cleaned & MX checked):</span>
                      <span className="text-emerald-800 font-bold">{activeRow.cleanEmail}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Phone (Standardized):</span>
                      <span className="text-slate-800">{activeRow.cleanPhone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Company Name:</span>
                      <span className="text-slate-800">{activeRow.cleanCompany}</span>
                    </div>
                    <div className="pt-2 border-t border-emerald-200/60 text-[11px] font-sans text-emerald-800">
                      <strong>Result:</strong> Zero bounce risk, ready for CRM import or cold email.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
