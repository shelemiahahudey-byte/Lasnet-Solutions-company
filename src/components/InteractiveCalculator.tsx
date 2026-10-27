import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

interface CalculatorProps {
  onApplyEstimate: (service: string, estimatedTier: string, details: string) => void;
}

export const InteractiveCalculator: React.FC<CalculatorProps> = ({ onApplyEstimate }) => {
  const [selectedService, setSelectedService] = useState<'website' | 'school' | 'tuition' | 'office' | 'video'>('website');
  const [projectScale, setProjectScale] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [timeline, setTimeline] = useState<'standard' | 'rush'>('standard');
  const [includeMaintenance, setIncludeMaintenance] = useState(true);

  // Dynamic pricing estimator
  const calculateEstimate = () => {
    let base = 0;
    let label = '';

    if (selectedService === 'website') {
      label = projectScale === 'starter' ? 'Professional Business Landing & Showcase' : projectScale === 'growth' ? 'Dynamic E-Commerce & Customer Portal' : 'Custom Web Application & Multi-User Platform';
      base = projectScale === 'starter' ? 350 : projectScale === 'growth' ? 750 : 1600;
    } else if (selectedService === 'school') {
      label = projectScale === 'starter' ? 'Basic Student Records & Terminal Reports' : projectScale === 'growth' ? 'Complete School Management & Portal' : 'Multi-Campus Institution Management Suite';
      base = projectScale === 'starter' ? 600 : projectScale === 'growth' ? 1200 : 2500;
    } else if (selectedService === 'tuition') {
      label = projectScale === 'starter' ? '4-Week Intensive Private 1-on-1 Tuition' : projectScale === 'growth' ? '8-Week Full-Stack Career Track' : '12-Week Comprehensive Mentorship & Portfolio';
      base = projectScale === 'starter' ? 200 : projectScale === 'growth' ? 380 : 540;
    } else if (selectedService === 'office') {
      label = projectScale === 'starter' ? 'Executive CV & Corporate Document Suite' : projectScale === 'growth' ? 'Advanced Excel Automation & Inventory Dashboard' : 'Full Corporate Tender Decks & Financial Models';
      base = projectScale === 'starter' ? 120 : projectScale === 'growth' ? 300 : 700;
    } else {
      label = projectScale === 'starter' ? 'Starter Video Editing (3-5 Short Clips)' : projectScale === 'growth' ? 'Monthly Brand Video & Social Media Package' : 'Commercial Brand Campaign & Multi-Platform Assets';
      base = projectScale === 'starter' ? 180 : projectScale === 'growth' ? 450 : 950;
    }

    if (timeline === 'rush') base *= 1.25;
    if (includeMaintenance) base += 80;

    return {
      min: Math.round(base * 0.9),
      max: Math.round(base * 1.15),
      label,
    };
  };

  const estimate = calculateEstimate();

  const handleApply = () => {
    const serviceNameMap = {
      website: 'Website & Software Development',
      school: 'School / Business Management System',
      tuition: 'IT Training & Digital Skills Coaching',
      office: 'Microsoft Office Professional Services',
      video: 'Video Editing & Creative Content Creation',
    };

    const details = `Estimated package: ${estimate.label} (${projectScale.toUpperCase()} tier). Estimated range: $${estimate.min} - $${estimate.max}. Timeline preference: ${timeline === 'rush' ? 'Priority Express Delivery' : 'Standard Turnaround'}. Extended Support: ${includeMaintenance ? 'Yes' : 'No'}.`;

    onApplyEstimate(serviceNameMap[selectedService], `$${estimate.min} - $${estimate.max}`, details);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
            Estimate Your Solution & Investment
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Configure your technical scope or coaching needs in real-time. Transparent pricing, flexible milestones, and zero hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Solution Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'website', name: 'Web & E-Commerce' },
                  { id: 'school', name: 'School Portal' },
                  { id: 'tuition', name: '1-on-1 Tuition' },
                  { id: 'office', name: 'MS Office Modeling' },
                  { id: 'video', name: 'Video & Creative' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id as any)}
                    className={`p-3 text-xs font-semibold rounded-xl border text-left transition-all ${
                      selectedService === s.id
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope Scale */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                2. Project Scope & Scale
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'starter', label: 'Starter / Core', sub: 'Essential features' },
                  { id: 'growth', label: 'Growth / Standard', sub: 'Most popular package' },
                  { id: 'enterprise', label: 'Institutional / Custom', sub: 'Comprehensive scope' },
                ].map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setProjectScale(sc.id as any)}
                    className={`p-3 text-xs font-semibold rounded-xl border text-left transition-all ${
                      projectScale === sc.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-xs'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800'
                    }`}
                  >
                    <p className="font-bold text-white leading-tight">{sc.label}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{sc.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Delivery Speed
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTimeline('standard')}
                    className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border ${
                      timeline === 'standard'
                        ? 'bg-slate-800 text-white border-slate-600'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800'
                    }`}
                  >
                    Standard (2-3 wks)
                  </button>
                  <button
                    onClick={() => setTimeline('rush')}
                    className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border ${
                      timeline === 'rush'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800'
                    }`}
                  >
                    Priority Rush (+25%)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Post-Launch Care
                </label>
                <button
                  onClick={() => setIncludeMaintenance(!includeMaintenance)}
                  className={`w-full py-2 px-3 text-xs font-medium rounded-lg border flex items-center justify-between ${
                    includeMaintenance
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800'
                  }`}
                >
                  <span>Extended 60-Day Support</span>
                  <span className="text-[10px]">{includeMaintenance ? '✓ Added' : '+ Add'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 border border-blue-900/60 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Estimated Investment Range
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                  ${estimate.min} – ${estimate.max}
                </span>
                <span className="text-xs text-slate-400">USD (or GHS equivalent)</span>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <p className="font-bold text-white text-sm leading-snug">{estimate.label}</p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Transparent milestone payments (no upfront 100%)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Complimentary project specification call</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp technical channel included</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-400/10 flex items-center justify-center gap-2"
              >
                <span>Apply Estimate to Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/+233204494160?text=${encodeURIComponent(
                  `Hello Lasnet Solutions, I just configured an estimate on your website for ${estimate.label} ($${estimate.min}-$${estimate.max}). Let's discuss!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl transition-colors border border-slate-700 text-center block"
              >
                Discuss This Quote on WhatsApp (+233 20 449 4160)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
