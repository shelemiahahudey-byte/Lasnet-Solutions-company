import React, { useState } from 'react';
import { Menu, X, MessageSquare, ArrowRight, Calculator } from 'lucide-react';

interface NavbarProps {
  onSelectService: (serviceName: string) => void;
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectService }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#070d1e]/90 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Brand Wordmark (Vibrant Monogram) */}
          <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white flex items-center justify-center font-heading font-extrabold text-base tracking-wider border border-blue-400/30 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span>L</span>
              <span className="text-amber-400">N</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-heading block leading-none">
                LASNET <span className="text-amber-400">SOLUTIONS</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block mt-1">
                Digital Engineering & Training
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#services"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#it-tuition"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              1-on-1 Tuition
            </a>
            <a
              href="#ms-office"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Microsoft Office
            </a>
            <a
              href="#why-choose-us"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Client Outcomes
            </a>
            <a
              href="#estimator"
              className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-400" />
              <span>Estimator</span>
            </a>
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/+233204494160"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/50 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>+233 20 449 4160</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md shadow-amber-400/20 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#070d1e] px-4 pt-3 pb-6 shadow-2xl animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3 pt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Services Overview
            </a>
            <a
              href="#it-tuition"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Online 1-on-1 IT Coaching
            </a>
            <a
              href="#ms-office"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Microsoft Office Professional Services
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-amber-400 hover:bg-slate-800 rounded-lg flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Project Cost Estimator</span>
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Client Outcomes & Reviews
            </a>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="https://wa.me/+233204494160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-700/50 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+233 20 449 4160)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-bold text-slate-950 bg-amber-400 rounded-xl shadow-md"
              >
                Request Project Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
