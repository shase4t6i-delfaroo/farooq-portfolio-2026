import React, { useState } from 'react';
import { SAMPLE_DIRTY_DATA, AGENCY_INFO } from '../data/portfolioData';
import {
  Sparkles,
  Download,
  HardDrive,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Play,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { User } from 'firebase/auth';

interface CleanedRecord {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  status: 'Clean' | 'Corrected' | 'Deduplicated';
  notes: string;
}

interface LiveCleanerDemoProps {
  user: User | null;
  onSaveToDriveRequest: (fileName: string, csvContent: string) => void;
  onGoogleSignIn: () => void;
}

export const LiveCleanerDemo: React.FC<LiveCleanerDemoProps> = ({
  user,
  onSaveToDriveRequest,
  onGoogleSignIn,
}) => {
  const [inputText, setInputText] = useState(SAMPLE_DIRTY_DATA);
  const [cleanedRecords, setCleanedRecords] = useState<CleanedRecord[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stats, setStats] = useState<{
    originalCount: number;
    cleanedCount: number;
    duplicatesRemoved: number;
    syntaxFixed: number;
  } | null>(null);

  // Cleaner logic running real transformation algorithms
  const runCleaner = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const lines = inputText.trim().split('\n');
      if (lines.length <= 1) {
        setIsProcessing(false);
        return;
      }

      // Skip header if present
      const hasHeader = lines[0].toLowerCase().includes('name') || lines[0].toLowerCase().includes('email');
      const dataLines = hasHeader ? lines.slice(1) : lines;

      const seenEmails = new Set<string>();
      const results: CleanedRecord[] = [];
      let dupsCount = 0;
      let fixCount = 0;

      dataLines.forEach((line, index) => {
        if (!line.trim()) return;
        const parts = line.split(',').map(p => p.trim());
        let rawName = parts[0] || 'Unknown';
        let rawEmail = parts[1] || '';
        let rawPhone = parts[2] || '';
        let rawCompany = parts[3] || 'N/A';
        let rawCity = parts[4] || 'N/A';

        let hadErrors = false;

        // 1. Clean Name: Title Casing and collapse extra spaces
        const cleanName = rawName
          .toLowerCase()
          .replace(/\s+/g, ' ')
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        if (cleanName !== rawName) hadErrors = true;

        // 2. Clean Email: remove duplicate @, spaces, common typos
        let cleanEmail = rawEmail
          .toLowerCase()
          .replace(/\s+/g, '')
          .replace(/@@+/g, '@')
          .replace(/#+/g, '@')
          .replace(/\.\.+/g, '.')
          .replace(/@gmial\./, '@gmail.')
          .replace(/@outlok\./, '@outlook.');
        if (cleanEmail !== rawEmail) hadErrors = true;

        // Check for duplicates
        const emailKey = cleanEmail.toLowerCase();
        if (seenEmails.has(emailKey) && emailKey !== '') {
          dupsCount++;
          // Skip or flag duplicate
          return;
        }
        if (emailKey) seenEmails.add(emailKey);

        // 3. Clean Phone
        let cleanPhone = rawPhone.replace(/[^\d+]/g, '');
        if (cleanPhone.length === 10) {
          cleanPhone = `+1 (${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(3, 6)}-${cleanPhone.slice(6)}`;
          hadErrors = true;
        } else if (cleanPhone.length === 11 && cleanPhone.startsWith('1')) {
          cleanPhone = `+1 (${cleanPhone.slice(1, 4)}) ${cleanPhone.slice(4, 7)}-${cleanPhone.slice(7)}`;
          hadErrors = true;
        } else if (rawPhone.trim() === '') {
          cleanPhone = 'Not Provided';
        } else {
          cleanPhone = rawPhone.trim();
        }

        // 4. Clean Company: Title case
        const cleanCompany = rawCompany
          .toLowerCase()
          .replace(/\s+/g, ' ')
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

        // 5. Clean City
        const cleanCity = rawCity
          .toLowerCase()
          .replace(/\s+/g, ' ')
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

        if (hadErrors) fixCount++;

        results.push({
          id: index + 1,
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          company: cleanCompany,
          city: cleanCity,
          status: hadErrors ? 'Corrected' : 'Clean',
          notes: hadErrors ? 'Casing & formatting normalized' : 'Pristine format'
        });
      });

      setCleanedRecords(results);
      setStats({
        originalCount: dataLines.length,
        cleanedCount: results.length,
        duplicatesRemoved: dupsCount,
        syntaxFixed: fixCount
      });
      setIsProcessing(false);
    }, 500);
  };

  // Convert cleaned records to CSV string
  const generateCleanedCsv = (): string => {
    const headers = 'Full Name,Email,Phone,Company,City,Cleaning Status\n';
    const rows = cleanedRecords
      .map(r => `"${r.name}","${r.email}","${r.phone}","${r.company}","${r.city}","${r.status}"`)
      .join('\n');
    return headers + rows;
  };

  // Download locally
  const handleDownloadCsv = () => {
    const csv = generateCleanedCsv();
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Farooq_Data_Solution_Cleaned_Sample.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Save to Google Drive
  const handleSaveToDrive = () => {
    if (!user) {
      onGoogleSignIn();
      return;
    }
    const csv = generateCleanedCsv();
    const timestamp = new Date().toISOString().slice(0, 10);
    onSaveToDriveRequest(`Farooq_Cleaned_Leads_${timestamp}.csv`, csv);
  };

  return (
    <section id="live-demo" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0D47A1]/10 text-[#0D47A1] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Try Our Live Data Cleaning Engine
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Paste your own messy leads or run our pre-loaded dirty sample. Experience our regex de-duplication, syntax cleaning, and Google Drive export.
          </p>
        </div>

        {/* Cleaner interactive workbench */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top toolbar */}
          <div className="bg-[#0D47A1] text-white p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <div>
                <h4 className="font-bold text-sm">Lead Sanitizer & Deduplication Console</h4>
                <p className="text-[11px] text-blue-200">Farooq Data Solution Rule Engine v2.4</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setInputText(SAMPLE_DIRTY_DATA)}
                className="text-xs bg-white/10 hover:bg-white/20 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Sample
              </button>
              <button
                type="button"
                onClick={runCleaner}
                disabled={isProcessing}
                className="text-xs bg-[#1DBF73] hover:bg-[#18a864] text-white font-extrabold px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{isProcessing ? 'Scrubbing...' : 'Run Cleaner'}</span>
              </button>
            </div>
          </div>

          {/* Workbench Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* Input Column */}
            <div className="lg:col-span-5 p-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Messy Input (CSV / Comma-Separated)
                  </label>
                  <span className="text-[11px] text-slate-400">Editable</span>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={9}
                  className="w-full font-mono-data text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0D47A1] focus:bg-white outline-none resize-none leading-relaxed text-slate-800"
                  placeholder="Paste messy CSV data here..."
                />
              </div>

              {/* Tips */}
              <div className="bg-blue-50/70 p-3.5 rounded-xl border border-blue-100 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-[#0D47A1] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  What this demo cleans:
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
                  <li>Removes ragged whitespaces & enforces Title Case</li>
                  <li>Eliminates duplicate email leads automatically</li>
                  <li>Repairs typo domains like <code>gmial..com</code> and double <code>@@</code></li>
                  <li>Formats phone numbers into clean international format</li>
                </ul>
              </div>
            </div>

            {/* Output Column */}
            <div className="lg:col-span-7 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Cleaned Results
                  </h4>
                  {cleanedRecords.length > 0 && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {cleanedRecords.length} Clean Records Ready
                    </span>
                  )}
                </div>

                {cleanedRecords.length === 0 ? (
                  <div className="h-64 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center p-6 bg-slate-50/50">
                    <Sparkles className="w-10 h-10 text-slate-300 mb-2" />
                    <p className="text-sm font-bold text-slate-700">No Cleaned Data Yet</p>
                    <p className="text-xs text-slate-500 max-w-sm mt-1">
                      Click the green <strong>"Run Cleaner"</strong> button above to scrub the dirty sample data!
                    </p>
                    <button
                      onClick={runCleaner}
                      className="mt-4 px-4 py-2 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#082d68] rounded-xl transition-all shadow-xs cursor-pointer"
                    >
                      Clean Sample Data Now
                    </button>
                  </div>
                ) : (
                  <div className="overflow-x-auto custom-scrollbar border border-slate-200 rounded-xl max-h-64">
                    <table className="w-full text-left font-mono-data text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider text-[10px] sticky top-0 border-b border-slate-200">
                        <tr>
                          <th className="py-2 px-3">#</th>
                          <th className="py-2 px-3">Name</th>
                          <th className="py-2 px-3">Email</th>
                          <th className="py-2 px-3">Phone</th>
                          <th className="py-2 px-3">Company</th>
                          <th className="py-2 px-3">City</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {cleanedRecords.map((rec) => (
                          <tr key={rec.id} className="hover:bg-blue-50/30">
                            <td className="py-2 px-3 text-slate-400 font-bold">{rec.id}</td>
                            <td className="py-2 px-3 font-semibold text-slate-900">{rec.name}</td>
                            <td className="py-2 px-3 text-emerald-700">{rec.email}</td>
                            <td className="py-2 px-3 text-slate-600 whitespace-nowrap">{rec.phone}</td>
                            <td className="py-2 px-3 text-slate-700">{rec.company}</td>
                            <td className="py-2 px-3 text-slate-600">{rec.city}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Action buttons if results available */}
              {cleanedRecords.length > 0 && (
                <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  {stats && (
                    <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                      <span>Input: <strong>{stats.originalCount}</strong></span>
                      <span>•</span>
                      <span>Duplicates Dropped: <strong className="text-amber-600">{stats.duplicatesRemoved}</strong></span>
                      <span>•</span>
                      <span>Fields Fixed: <strong className="text-emerald-600">{stats.syntaxFixed}</strong></span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    {/* Download CSV */}
                    <button
                      type="button"
                      onClick={handleDownloadCsv}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-500" />
                      Download CSV
                    </button>

                    {/* Google Drive Save button */}
                    <button
                      type="button"
                      onClick={handleSaveToDrive}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0D47A1] hover:bg-[#082d68] rounded-xl transition-all shadow-xs cursor-pointer"
                      title={user ? 'Save directly to your Google Drive' : 'Sign in to save to Google Drive'}
                    >
                      <HardDrive className="w-3.5 h-3.5" />
                      {user ? 'Save to Google Drive' : 'Connect Drive to Save'}
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Bottom Banner */}
          <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700">
            <span className="font-semibold text-slate-800">
              Need 1,000+ to 50,000+ real records cleaned with customized CRM validation rules?
            </span>
            <a
              href={AGENCY_INFO.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0D47A1] hover:underline flex items-center gap-1"
            >
              Order Full Dataset Cleaning on Fiverr
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
