import React from 'react';
import { Award, DollarSign, Monitor, HeartHandshake, Headphones, Target, ShieldCheck, Zap, ArrowRight, MessageSquare } from 'lucide-react';
import { whyChooseUsReasons } from '../data/servicesData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string, idx: number) => {
    const iconColors = [
      'bg-amber-500/10 text-amber-600 border-amber-200',
      'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      'bg-blue-500/10 text-blue-600 border-blue-200',
      'bg-rose-500/10 text-rose-600 border-rose-200',
      'bg-indigo-500/10 text-indigo-600 border-indigo-200',
      'bg-cyan-500/10 text-cyan-600 border-cyan-200',
    ];

    const currentStyle = iconColors[idx % iconColors.length];

    const renderIcon = () => {
      switch (iconName) {
        case 'Award':
          return <Award className="w-5 h-5" />;
        case 'DollarSign':
          return <DollarSign className="w-5 h-5" />;
        case 'Monitor':
          return <Monitor className="w-5 h-5" />;
        case 'HeartHandshake':
          return <HeartHandshake className="w-5 h-5" />;
        case 'Headphones':
          return <Headphones className="w-5 h-5" />;
        case 'Target':
          return <Target className="w-5 h-5" />;
        default:
          return <ShieldCheck className="w-5 h-5" />;
      }
    };

    return (
      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 shadow-xs ${currentStyle}`}>
        {renderIcon()}
      </div>
    );
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic ambient color glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Engineering Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
            Why Choose Lasnet Solutions?
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            We bridge the gap between creative design, disciplined software engineering, and practical technical coaching to solve genuine operational challenges.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsReasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-500 transition-all group backdrop-blur-sm hover:-translate-y-1 duration-200"
            >
              {getIcon(reason.icon, idx)}
              <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-amber-300 transition-colors">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* High Impact Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-800 to-amber-950/50 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold text-white font-heading">
              Have questions or ready to launch your project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our technical lead on WhatsApp or send a message to our inbox.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/+233204494160"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-400/20 whitespace-nowrap flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>WhatsApp +233 20 449 4160</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
