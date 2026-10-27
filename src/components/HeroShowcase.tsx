import React, { useState } from 'react';
import {
  Globe,
  GraduationCap,
  FileSpreadsheet,
  Video,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  Monitor,
  Zap,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

export const HeroShowcase: React.FC<{ onSelectService: (service: string) => void }> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'school' | 'excel' | 'tuition'>('web');
  const [cartCount, setCartCount] = useState(2);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [stockLevel, setStockLevel] = useState(148);

  return (
    <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Top OS / Browser bar */}
      <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-3 text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
            preview.lasnetsolutions.com/{activeTab}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-[10px]">
            <Zap className="w-3 h-3 text-emerald-400" />
            Live Demo
          </span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-4 border-b border-slate-800 text-xs font-semibold bg-slate-950/40">
        <button
          onClick={() => setActiveTab('web')}
          className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-all border-b-2 ${
            activeTab === 'web'
              ? 'border-blue-500 text-blue-400 bg-blue-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">Web & Store</span>
          <span className="sm:hidden">Web</span>
        </button>

        <button
          onClick={() => setActiveTab('school')}
          className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-all border-b-2 ${
            activeTab === 'school'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Monitor className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">School App</span>
          <span className="sm:hidden">School</span>
        </button>

        <button
          onClick={() => setActiveTab('excel')}
          className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-all border-b-2 ${
            activeTab === 'excel'
              ? 'border-amber-500 text-amber-400 bg-amber-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">Excel Auto</span>
          <span className="sm:hidden">Excel</span>
        </button>

        <button
          onClick={() => setActiveTab('tuition')}
          className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-all border-b-2 ${
            activeTab === 'tuition'
              ? 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">1-on-1 Tuition</span>
          <span className="sm:hidden">Tuition</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-4 sm:p-6 min-h-[300px] flex flex-col justify-between">
        {activeTab === 'web' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  Commercial Web Store Platform
                </span>
                <h4 className="text-lg font-bold text-white">Modern E-Commerce Experience</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
                  Cart: {cartCount} items
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Product Catalog</span>
                  <p className="text-xs font-bold text-white mt-1">Smart Device Pro</p>
                  <p className="text-xs font-mono text-amber-400 font-bold">$129.00</p>
                </div>
                <button
                  onClick={() => setCartCount(c => c + 1)}
                  className="mt-2.5 py-1 px-2 text-[11px] font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors text-center"
                >
                  + Add to Order
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Mobile Performance</span>
                  <p className="text-xs font-bold text-emerald-400 mt-1">99 / 100 Speed Score</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Under 0.8s load time</p>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-emerald-400 h-full w-[99%]" />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Checkout Security</span>
                  <p className="text-xs font-bold text-white mt-1">SSL & Payment Ready</p>
                  <p className="text-[11px] text-slate-400">Mobile Money & Cards</p>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-2">
                  <CheckCircle2 className="w-3 h-3" /> Fully Integrated
                </span>
              </div>
            </div>

            <div className="p-3 bg-blue-950/40 border border-blue-900/60 rounded-xl flex items-center justify-between text-xs text-blue-200">
              <span>Ready for high-converting sales & custom business portals.</span>
              <button
                onClick={() => onSelectService('Website & Software Development')}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
              >
                Inquire <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'school' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  Campus Automation
                </span>
                <h4 className="text-lg font-bold text-white">School Management System</h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                Term 1 Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase">Student Enrollment</span>
                <p className="text-lg font-mono font-bold text-white mt-1">1,248</p>
                <span className="text-[11px] text-emerald-400">98.2% Active Attendance</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase">Automated Grading</span>
                <p className="text-lg font-mono font-bold text-emerald-400 mt-1">Instant</p>
                <span className="text-[11px] text-slate-300">Continuous Assessment</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Terminal Reports</span>
                  <p className="text-xs font-semibold text-white mt-1">
                    {reportGenerated ? 'Report Generated!' : 'Generate Single-Click PDF'}
                  </p>
                </div>
                <button
                  onClick={() => setReportGenerated(true)}
                  className="mt-2 py-1 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-semibold text-center transition-colors"
                >
                  {reportGenerated ? 'Report Ready (PDF)' : 'Generate Report'}
                </button>
              </div>
            </div>

            <div className="p-3 bg-emerald-950/40 border border-emerald-900/60 rounded-xl flex items-center justify-between text-xs text-emerald-200">
              <span>Eliminate weeks of manual grading and record-keeping.</span>
              <button
                onClick={() => onSelectService('School Management System')}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
              >
                Inquire <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'excel' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Financial & Inventory Automation
                </span>
                <h4 className="text-lg font-bold text-white">Advanced Microsoft Excel Modeling</h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                Dynamic Formula Engine
              </span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs overflow-x-auto">
              <div className="text-slate-400 text-[11px] pb-1 border-b border-slate-800 mb-2 flex justify-between">
                <span>=XLOOKUP(ItemID, InventoryDB, UnitPrice * Qty, 0)</span>
                <span className="text-emerald-400 font-bold">CALCULATED</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-slate-300 text-[11px]">
                <div className="bg-slate-900 p-2 rounded">
                  <span className="text-[10px] text-slate-500 block">Stock Qty</span>
                  <span className="font-bold text-white">{stockLevel}</span>
                </div>
                <div className="bg-slate-900 p-2 rounded">
                  <span className="text-[10px] text-slate-500 block">Unit Cost</span>
                  <span className="font-bold text-white">$45.00</span>
                </div>
                <div className="bg-slate-900 p-2 rounded">
                  <span className="text-[10px] text-slate-500 block">Gross Total</span>
                  <span className="font-bold text-amber-400">${(stockLevel * 45).toLocaleString()}</span>
                </div>
                <div className="bg-slate-900 p-2 rounded">
                  <span className="text-[10px] text-slate-500 block">Status</span>
                  <span className="font-bold text-emerald-400">Optimal</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <button
                onClick={() => setStockLevel(s => s + 10)}
                className="py-1 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs transition-colors"
              >
                Simulate +10 Inbound Stock
              </button>
              <button
                onClick={() => onSelectService('Microsoft Office Professional Services')}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
              >
                Deploy For Your Business <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'tuition' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  Personalized 1-on-1 Mentorship
                </span>
                <h4 className="text-lg font-bold text-white">Online Private Tech Tuition</h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
                Dedicated Tutor
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Upcoming Lesson Module</span>
                <p className="font-bold text-white text-sm">Web Development & React UI</p>
                <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                  <span>📅 Thursday at 6:00 PM</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-semibold">Confirmed</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Mentor Support Channel</span>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 italic">
                  "Great work on yesterday's layout exercise! Review the flexbox recap for our next session."
                </div>
              </div>
            </div>

            <div className="p-3 bg-cyan-950/40 border border-cyan-900/60 rounded-xl flex items-center justify-between text-xs text-cyan-200">
              <span>Learn at your own pace from home with guaranteed personal focus.</span>
              <button
                onClick={() => onSelectService('IT Training & Digital Skills Coaching')}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
              >
                Book 1-on-1 Seat <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Footer info strip inside mock */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Interactive Lasnet Solutions Showcase</span>
          </div>
          <span className="text-slate-500">Fast · Scalable · Custom Built</span>
        </div>
      </div>
    </div>
  );
};
