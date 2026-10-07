import React from 'react';
import { AGENCY_INFO } from '../data/portfolioData';
import { User } from 'firebase/auth';
import {
  FileSpreadsheet,
  ExternalLink,
  MessageSquare,
  HardDrive,
  LogOut,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

interface HeaderProps {
  user: User | null;
  onOpenDriveModal: () => void;
  onGoogleSignIn: () => void;
  onLogout: () => void;
  isLoggingIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onOpenDriveModal,
  onGoogleSignIn,
  onLogout,
  isLoggingIn,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top micro bar for agency credentials */}
      <div className="bg-[#0D47A1] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for New Projects
            </span>
            <span className="hidden sm:inline text-blue-200">•</span>
            <span className="hidden sm:inline text-blue-100">
              📍 Bahawalpur, Punjab, Pakistan
            </span>
            <span className="hidden md:inline text-blue-200">•</span>
            <span className="hidden md:inline text-blue-100">
              ⚡ 24h Express Turnaround
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-blue-200">⭐⭐⭐⭐⭐ 5.0 on Fiverr (150+ reviews)</span>
            <a
              href="https://wa.me/923184861903"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us: 03184861903</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D47A1] to-[#1976D2] flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                Farooq Data Solution
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-[#0D47A1] rounded-full">
                Agency
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              Excel & Lead Cleaning Specialists • Bahawalpur, Punjab, Pakistan
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#services" className="hover:text-[#0D47A1] transition-colors">
            Services
          </a>
          <a href="#before-after" className="hover:text-[#0D47A1] transition-colors flex items-center gap-1">
            Before & After
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          </a>
          <a href="#live-demo" className="hover:text-[#0D47A1] transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Live Cleaner Demo
          </a>
          <a href="#why-choose-me" className="hover:text-[#0D47A1] transition-colors">
            Why Choose Us
          </a>
          <a href="#pricing" className="hover:text-[#0D47A1] transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right CTA cluster */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Google Drive Status Button */}
          {user ? (
            <div className="flex items-center gap-1.5 bg-slate-100 rounded-xl p-1 border border-slate-200">
              <button
                onClick={onOpenDriveModal}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0D47A1] px-2.5 py-1.5 rounded-lg hover:bg-white transition-all"
                title="Open Google Drive Files"
              >
                <HardDrive className="w-3.5 h-3.5 text-emerald-600" />
                <span className="truncate max-w-[100px]">{user.displayName?.split(' ')[0] || 'Drive'}</span>
              </button>
              <button
                onClick={onLogout}
                className="text-slate-400 hover:text-red-600 p-1 rounded-lg hover:bg-white transition-colors"
                title="Disconnect Google Drive"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onGoogleSignIn}
              disabled={isLoggingIn}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0D47A1] border border-slate-200 hover:border-slate-300 bg-white px-3 py-2 rounded-xl transition-all shadow-xs"
              title="Connect Google Drive to export files directly"
            >
              <HardDrive className="w-3.5 h-3.5 text-[#0D47A1]" />
              <span>{isLoggingIn ? 'Connecting...' : 'Connect Drive'}</span>
            </button>
          )}

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/923184861903"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#1e7e34] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-xl transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
            <span>WhatsApp Us</span>
          </a>

          {/* Order on Fiverr Button */}
          <a
            href="https://www.fiverr.com/s/aeeeGqg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1DBF73] hover:bg-[#19a463] text-white px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wide shadow-sm hover:shadow-md transition-all group"
          >
            <span>Hire Me on Fiverr</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="https://www.fiverr.com/s/aeeeGqg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DBF73] text-white px-3 py-1.5 rounded-lg font-bold text-xs"
          >
            Hire on Fiverr
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Services
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Before & After Comparison
            </a>
            <a
              href="#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Live Cleaner Demo
            </a>
            <a
              href="#why-choose-me"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Why Choose Farooq Data Solution
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Pricing & Packages
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {!user ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGoogleSignIn();
                }}
                className="w-full flex items-center justify-center gap-2 border border-slate-300 py-2.5 rounded-xl text-xs font-semibold text-slate-700"
              >
                <HardDrive className="w-4 h-4 text-[#0D47A1]" />
                Connect Google Drive
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDriveModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-blue-50 text-[#0D47A1] py-2.5 rounded-xl text-xs font-bold"
              >
                <HardDrive className="w-4 h-4" />
                Manage Google Drive Files
              </button>
            )}

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp ({AGENCY_INFO.whatsappNumber})
            </a>

            <a
              href={AGENCY_INFO.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#1DBF73] text-white py-2.5 rounded-xl text-xs font-bold"
            >
              Order on Fiverr
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
