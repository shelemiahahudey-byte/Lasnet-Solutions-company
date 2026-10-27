import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Mail, Phone, Clock, CheckCircle2, ExternalLink } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  budget: string;
  message: string;
  submittedAt: string;
  status: string;
  recipient: string;
}

interface AdminInquiriesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminInquiriesDrawer: React.FC<AdminInquiriesDrawerProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (data.success && data.inquiries) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="bg-[#070d1e] w-full max-w-xl h-full shadow-2xl flex flex-col border-l border-slate-800 animate-in slide-in-from-right duration-200 text-white">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950 text-white">
          <div>
            <h3 className="font-bold text-base font-heading">
              Inquiry Inbox (lasnetsolutions@gmail.com)
            </h3>
            <p className="text-xs text-slate-400">
              Dispatched form submissions and automated notifications
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="p-3 bg-blue-950/40 border border-blue-900/60 rounded-xl text-xs text-blue-200 flex items-center justify-between">
            <span>Destination: <strong className="text-amber-400">lasnetsolutions@gmail.com</strong></span>
            <span className="font-bold bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded text-[11px] border border-blue-700/50">
              {inquiries.length} Inquiries Logged
            </span>
          </div>

          {loading ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-amber-400" />
              Loading inquiries...
            </div>
          ) : inquiries.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              No inquiries yet. Submit the contact form to see submissions appear here!
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 shadow-md space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-slate-950 text-amber-400 border border-slate-800 px-2 py-0.5 rounded">
                      {inq.id}
                    </span>
                    <span className="text-xs font-bold text-white">{inq.name}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Delivered
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300 truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{inq.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 truncate">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{inq.phone}</span>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-[11px] font-semibold text-slate-400 block">Service:</span>
                  <span className="font-bold text-blue-400">{inq.service}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                  {inq.message}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  <span>{new Date(inq.submittedAt).toLocaleString()}</span>
                  <a
                    href={`https://wa.me/+233204494160?text=${encodeURIComponent(
                      `Hello ${inq.name}, this is Lasnet Solutions regarding your inquiry (${inq.id}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Reply on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
