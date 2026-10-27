import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Sparkles, Code2, Users, Rocket } from 'lucide-react';
import { HeroShowcase } from './HeroShowcase';

interface HeroProps {
  onSelectService: (service: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-[#070d1e] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Dynamic ambient color glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Value Proposition & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Building Digital Solutions For A Smarter Future</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] text-white">
              We Turn Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300">
                Powerful Digital Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We empower individuals, businesses, schools, and organizations to leverage technology effectively to grow, communicate, and achieve more. Fast, scalable software, personalized 1-on-1 tuition, and executive document solutions.
            </p>

            {/* Core Value Pillars with Vibrant Icons */}
            <div className="grid grid-cols-3 gap-3 pt-1 pb-1">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-blue-900/40 hover:border-blue-700/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2">
                  <Rocket className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Smart Solutions</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">Modern web & software</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-900/40 hover:border-amber-700/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Business Growth</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">E-commerce & platforms</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-900/40 hover:border-emerald-700/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Digital Skills</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">1-on-1 private tuition</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://wa.me/+233204494160"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600/90 hover:bg-emerald-600 rounded-xl border border-emerald-500/50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp (+233 20 449 4160)</span>
              </a>

              <button
                onClick={onExploreServices}
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-xl border border-slate-700/70 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Response SLA */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Direct review within 2-4 hours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                lasnetsolutions@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Online & on-site engagements
              </span>
            </div>
          </div>

          {/* Right Column: Live Interactive Solutions Preview (Replaces the flyer) */}
          <div className="lg:col-span-6">
            <HeroShowcase onSelectService={onSelectService} />
          </div>
        </div>
      </div>
    </section>
  );
};
