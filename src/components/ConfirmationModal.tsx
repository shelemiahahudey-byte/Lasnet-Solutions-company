import React, { useState } from 'react';
import {
  CheckCircle2,
  X,
  MessageSquare,
  Mail,
  Copy,
  Check,
  Clock
} from 'lucide-react';
import { SubmissionResponse } from '../types';

interface ConfirmationModalProps {
  response: SubmissionResponse | null;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ response, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!response) return null;

  const { referenceId, inquiry, whatsappUrl } = response;

  const handleCopyReference = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = `mailto:lasnetsolutions@gmail.com?subject=${encodeURIComponent(
    `Inquiry Confirmation: ${referenceId} - ${inquiry.service}`
  )}&body=${encodeURIComponent(
    `Hello Lasnet Solutions,\n\nI have submitted a project inquiry.\n\nTracking ID: ${referenceId}\nName: ${inquiry.name}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone}\nService: ${inquiry.service}\nTimeline: ${inquiry.timeline}\nBudget: ${inquiry.budget}\n\nProject details:\n${inquiry.message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-slate-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-700 my-8 text-white">
        {/* Header */}
        <div className="bg-slate-950 p-6 text-white text-center relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          </div>

          <h3 className="text-xl font-bold font-heading text-white">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            We will reply directly to <span className="text-amber-400 font-mono font-medium">{inquiry.email}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Reference ID Pill */}
          <div className="flex items-center justify-between p-3.5 bg-slate-950 rounded-2xl border border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Official Reference ID
              </span>
              <span className="text-base font-mono font-bold text-amber-400">
                {referenceId}
              </span>
            </div>
            <button
              onClick={handleCopyReference}
              className="px-3 py-1.5 text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy ID</span>
                </>
              )}
            </button>
          </div>

          {/* Details Summary */}
          <div className="space-y-2 text-xs border border-slate-800 rounded-2xl p-4 bg-slate-950/60">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pb-1.5 border-b border-slate-800">
              Inquiry Summary
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Name:</span>
              <span className="font-semibold text-white">{inquiry.name}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Email:</span>
              <span className="font-semibold text-white">{inquiry.email}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Service:</span>
              <span className="font-semibold text-blue-400">{inquiry.service}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-slate-400">Timeline:</span>
              <span className="font-semibold text-white">{inquiry.timeline}</span>
            </div>
          </div>

          {/* Turnaround notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/40 text-xs text-blue-200">
            <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p>
              Our team will review your specifications and reply directly to <span className="font-semibold text-white">{inquiry.email}</span> within <span className="font-bold text-amber-400">2 to 4 business hours</span>.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2 text-center shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fast-Track on WhatsApp (+233 20 449 4160)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={mailtoUrl}
                className="py-2.5 px-3 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 text-center"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Open in Email</span>
              </a>

              <button
                onClick={onClose}
                className="py-2.5 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors text-center cursor-pointer shadow-xs"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
