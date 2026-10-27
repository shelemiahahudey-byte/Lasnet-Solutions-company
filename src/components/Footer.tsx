import React from 'react';
import {
  Mail,
  MessageSquare,
  ArrowUp,
  Inbox,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenInquiries: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiries }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050b18] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-900 border border-blue-400/40 flex items-center justify-center font-heading font-extrabold text-sm text-white shadow-md shadow-blue-600/30">
                <span>L</span>
                <span className="text-amber-400">N</span>
              </div>
              <span className="text-xl font-extrabold font-heading tracking-tight text-white">
                LASNET <span className="text-amber-400">SOLUTIONS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Your trusted partner for digital solutions. We turn ideas into powerful digital solutions for individuals, businesses, schools, and organizations worldwide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full-Stack Development · 1-on-1 Tuition · Office Modeling · Media</span>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Website & Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  School & Business Management Systems
                </a>
              </li>
              <li>
                <a href="#it-tuition" className="hover:text-amber-400 transition-colors">
                  Online One-on-One IT Tuition
                </a>
              </li>
              <li>
                <a href="#ms-office" className="hover:text-amber-400 transition-colors">
                  Microsoft Office Professional Services
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-blue-400 transition-colors">
                  Interactive Cost Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="https://wa.me/+233204494160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp: +233 20 449 4160</span>
              </a>

              <a
                href="mailto:lasnetsolutions@gmail.com"
                className="flex items-center gap-2 text-amber-400 hover:underline transition-colors font-semibold"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>lasnetsolutions@gmail.com</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={onOpenInquiries}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                >
                  <Inbox className="w-3.5 h-3.5 text-blue-400" />
                  <span>Admin Inquiry Inbox</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slogan Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span className="font-extrabold text-white">LASNET SOLUTIONS</span>
            <span className="mx-2 text-slate-700">|</span>
            <span className="text-amber-400 font-semibold tracking-wide">
              BUILDING DIGITAL SOLUTIONS FOR A SMARTER FUTURE. 🚀
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Lasnet Solutions. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
