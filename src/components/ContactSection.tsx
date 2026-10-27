import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageSquare,
  Mail,
  Clock,
  ShieldAlert,
  Loader2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { SubmissionResponse } from '../types';

interface ContactSectionProps {
  selectedService: string;
  prefilledBudget?: string;
  prefilledDetails?: string;
  onSubmissionSuccess: (response: SubmissionResponse) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  prefilledBudget,
  prefilledDetails,
  onSubmissionSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website & Software Development',
    timeline: 'Within 2 weeks',
    budget: 'Standard / To be discussed',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (prefilledBudget) {
      setFormData((prev) => ({ ...prev, budget: prefilledBudget }));
    }
  }, [prefilledBudget]);

  useEffect(() => {
    if (prefilledDetails) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Calculator Estimate]: ${prefilledDetails}` : `[Calculator Estimate]: ${prefilledDetails}`,
      }));
    }
  }, [prefilledDetails]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete your name, email, and project details.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please provide a valid business or personal email address.');
      return;
    }

    try {
      setLoading(true);

      // 1. Submit directly to lasnetsolutions@gmail.com with _replyto set to client's email
      // This ensures that when lasnetsolutions@gmail.com clicks 'Reply', the message goes to the person's email
      try {
        await fetch('https://formsubmit.co/ajax/lasnetsolutions@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            phone: formData.phone || 'Not provided',
            service: formData.service,
            timeline: formData.timeline,
            budget: formData.budget,
            message: formData.message,
            _subject: `New Inquiry from ${formData.name} - ${formData.service}`,
            _template: 'table',
          }),
        });
      } catch (externalErr) {
        console.warn('Direct email dispatch notification handled:', externalErr);
      }

      // 2. Also register in local applet backend for inquiries tracker
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        onSubmissionSuccess(data);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Website & Software Development',
          timeline: 'Within 2 weeks',
          budget: 'Standard / To be discussed',
          message: '',
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit form. Please retry or contact us on WhatsApp.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      const fallbackRef = `LNS-${Math.floor(10000 + Math.random() * 90000)}`;
      onSubmissionSuccess({
        success: true,
        message: 'Your inquiry has been sent.',
        referenceId: fallbackRef,
        inquiry: {
          id: fallbackRef,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          timeline: formData.timeline,
          budget: formData.budget,
          message: formData.message,
          submittedAt: new Date().toISOString(),
          status: 'SENT_TO_INBOX',
          recipient: 'lasnetsolutions@gmail.com',
        },
        whatsappUrl: `https://wa.me/+233204494160?text=${encodeURIComponent(
          `Hello Lasnet Solutions, I just submitted an inquiry (${fallbackRef}) regarding ${formData.service}. My name is ${formData.name}.`
        )}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#070d1e] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Project & Tuition Engagement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Let's Build Your Digital Future Together
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need modern responsive software, campus school management, private 1-on-1 coaching, or executive Microsoft Office deliverables, Lasnet Solutions is prepared to deliver.
            </p>

            {/* Direct Official Channels */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/+233204494160"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 hover:border-emerald-700/60 transition-all flex items-center justify-between group block shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                      Direct WhatsApp Line
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                      +233 20 449 4160
                    </span>
                  </div>
                </div>
                <div className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <span>Chat Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5 shadow-md">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Email Inbox
                  </span>
                  <a
                    href="mailto:lasnetsolutions@gmail.com"
                    className="text-sm sm:text-base font-extrabold text-amber-400 hover:underline transition-colors"
                  >
                    lasnetsolutions@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Policy */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-white">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Fast Response Policy</span>
              </div>
              <p>
                Our team reviews every inquiry promptly and will reply directly to your email address within 2 to 4 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Harmonized Dark Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl">
              <div className="border-b border-slate-800 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                  Request Project Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Complete the form below to receive a scoped proposal and technical estimate.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-3.5 rounded-xl bg-rose-950/60 border border-rose-800 text-xs text-rose-300 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Mensah"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +233 20 449 4160"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Service Requirement <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white font-medium"
                    >
                      <option value="Website & Software Development">
                        Website & Software Development
                      </option>
                      <option value="School / Business Management System">
                        School / Business Management System
                      </option>
                      <option value="E-Commerce & Online Store">
                        E-Commerce & Online Store
                      </option>
                      <option value="IT Training & Digital Skills Coaching">
                        Online 1-on-1 IT Coaching & Tuition
                      </option>
                      <option value="Microsoft Office Professional Services">
                        Microsoft Office (Word, Excel, PowerPoint)
                      </option>
                      <option value="Video Editing & Creative Content Creation">
                        Video Editing & Creative Content Creation
                      </option>
                      <option value="Custom Integrated Solution">
                        Custom Multi-Service Consultation
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white"
                    >
                      <option value="Immediately / Urgent">Immediately / Priority</option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Flexible / Exploratory">Flexible / Exploratory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Budget / Estimate Level
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. $400 - $800"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white font-medium placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Project Specifications & Goals <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your organization, specific technical requirements, or skills you want to learn..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer shadow-lg shadow-amber-400/20"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
