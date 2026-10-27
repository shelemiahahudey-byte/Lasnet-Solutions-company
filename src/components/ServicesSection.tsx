import React, { useState } from 'react';
import {
  Globe,
  GraduationCap,
  FileSpreadsheet,
  Video,
  Check,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  const getServiceBadgeStyle = (category: string) => {
    switch (category) {
      case 'web-software':
        return {
          pill: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
          accent: 'text-blue-400',
          iconBg: 'bg-blue-600 text-white shadow-blue-500/20 shadow-lg',
          border: 'hover:border-blue-500/60',
          checkBg: 'text-blue-400',
        };
      case 'it-training':
        return {
          pill: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          accent: 'text-emerald-400',
          iconBg: 'bg-emerald-600 text-white shadow-emerald-500/20 shadow-lg',
          border: 'hover:border-emerald-500/60',
          checkBg: 'text-emerald-400',
        };
      case 'ms-office':
        return {
          pill: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          accent: 'text-amber-400',
          iconBg: 'bg-amber-600 text-white shadow-amber-500/20 shadow-lg',
          border: 'hover:border-amber-500/60',
          checkBg: 'text-amber-400',
        };
      case 'creative-video':
        return {
          pill: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
          accent: 'text-indigo-400',
          iconBg: 'bg-indigo-600 text-white shadow-indigo-500/20 shadow-lg',
          border: 'hover:border-indigo-500/60',
          checkBg: 'text-indigo-400',
        };
      default:
        return {
          pill: 'bg-slate-800 text-slate-300 border-slate-700',
          accent: 'text-blue-400',
          iconBg: 'bg-slate-800 text-white',
          border: 'hover:border-slate-600',
          checkBg: 'text-blue-400',
        };
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0a1226] border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
            Our Current Services & Solutions
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Engineered to deliver high performance, operational speed, and practical skills. Click any capability to customize your project requirements.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl w-fit">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services (4)
            </button>
            <button
              onClick={() => setActiveCategory('web-software')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'web-software'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-blue-300'
              }`}
            >
              Web & Software
            </button>
            <button
              onClick={() => setActiveCategory('it-training')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'it-training'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'text-slate-400 hover:text-emerald-300'
              }`}
            >
              1-on-1 Tuition
            </button>
            <button
              onClick={() => setActiveCategory('ms-office')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'ms-office'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              Microsoft Office
            </button>
            <button
              onClick={() => setActiveCategory('creative-video')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'creative-video'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : 'text-slate-400 hover:text-indigo-300'
              }`}
            >
              Video & Creative
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {filteredServices.map((service, idx) => {
            const styles = getServiceBadgeStyle(service.category);
            return (
              <div
                key={service.id}
                id={
                  service.id === 'it-training'
                    ? 'it-tuition'
                    : service.id === 'ms-office'
                    ? 'ms-office'
                    : service.id === 'creative-video'
                    ? 'creative-video'
                    : undefined
                }
                className={`bg-slate-900/90 rounded-3xl border border-slate-800 shadow-xl overflow-hidden transition-all duration-300 ${styles.border}`}
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Pillar Identity & Value Proposition */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${styles.iconBg}`}>
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                            Pillar 0{idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <div className={`text-xs sm:text-sm font-bold ${styles.accent} bg-slate-950/70 p-3 rounded-xl border border-slate-800`}>
                        "{service.tagline}"
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Standards Highlights */}
                      <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                          Key Performance Indicators:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {service.highlights.map((h, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 font-semibold"
                            >
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${styles.checkBg}`} />
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3">
                        <button
                          onClick={() => onSelectService(service.title)}
                          className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <span>Inquire About {service.title}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Deliverables Checklist */}
                    <div className="lg:col-span-7 bg-slate-950/60 rounded-2xl p-6 sm:p-7 border border-slate-800">
                      {service.subCategories ? (
                        /* Microsoft Office Word, Excel, PowerPoint Suite */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                            <span className="font-bold text-white uppercase tracking-wide">
                              Dedicated Office Tool Suites
                            </span>
                            <span className="text-amber-400 font-mono font-bold bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                              Word · Excel · PowerPoint
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                            {service.subCategories.map((sub, sIdx) => {
                              const isWord = sub.name.includes('Word');
                              const isExcel = sub.name.includes('Excel');
                              const badgeBg = isWord
                                ? 'bg-blue-600'
                                : isExcel
                                ? 'bg-emerald-600'
                                : 'bg-orange-600';

                              return (
                                <div
                                  key={sIdx}
                                  className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-sm flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-slate-800">
                                      <div className={`w-6 h-6 rounded-lg ${badgeBg} text-white font-extrabold text-xs flex items-center justify-center font-mono shadow-xs`}>
                                        {isWord ? 'W' : isExcel ? 'X' : 'P'}
                                      </div>
                                      <h4 className="font-bold text-xs sm:text-sm text-white">
                                        {sub.name}
                                      </h4>
                                    </div>
                                    <ul className="space-y-2 text-xs text-slate-300">
                                      {sub.items.map((item, iIdx) => (
                                        <li key={iIdx} className="flex items-start gap-1.5 leading-snug">
                                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        /* Regular Capabilities List */
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs">
                            <span className="font-bold text-white uppercase tracking-wide">
                              Engineering & Service Deliverables
                            </span>
                            <span className="text-slate-400 font-mono font-medium">
                              {service.features.length} Specializations
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm"
                              >
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${styles.pill}`}>
                                  <Check className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* 1-on-1 tuition model highlight */}
                          {service.id === 'it-training' && (
                            <div className="mt-5 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div>
                                <p className="text-xs font-extrabold text-emerald-300 flex items-center gap-1.5">
                                  <Sparkles className="w-4 h-4 text-emerald-400" />
                                  <span>Dedicated Online 1-on-1 Tuition Model</span>
                                </p>
                                <p className="text-[11px] text-emerald-200/80 mt-0.5">
                                  Learn comfortably from home · Flexible evening and weekend hours · 100% individual mentor focus
                                </p>
                              </div>
                              <button
                                onClick={() => onSelectService('IT Training & Digital Skills Coaching')}
                                className="px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors shadow-sm whitespace-nowrap self-start sm:self-auto cursor-pointer"
                              >
                                Reserve 1-on-1 Spot
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
