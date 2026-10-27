import React, { useState } from 'react';
import { Star, CheckCircle, PlusCircle, X, Sparkles } from 'lucide-react';
import { testimonialsData as initialTestimonials } from '../data/testimonialsData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    organization: '',
    serviceCategory: 'Website & Software Development',
    rating: 5,
    quote: '',
    outcome: '',
  });
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const added: Testimonial = {
      id: `t-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Client Partner',
      organization: newReview.organization || 'Verified Organization',
      serviceCategory: newReview.serviceCategory,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating: newReview.rating,
      quote: newReview.quote,
      outcome: newReview.outcome || 'Timely delivery and responsive technical support',
      verified: true,
      date: 'Just now',
    };

    setTestimonials([added, ...testimonials]);
    setSubmittedNotice(true);
    setTimeout(() => {
      setSubmittedNotice(false);
      setModalOpen(false);
      setNewReview({
        name: '',
        role: '',
        organization: '',
        serviceCategory: 'Website & Software Development',
        rating: 5,
        quote: '',
        outcome: '',
      });
    }, 1200);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0a1226] border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Client Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              What Our Clients & Students Say
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Read how enterprise businesses, e-commerce stores, and private tuition students measure their success after collaborating with Lasnet Solutions.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="self-start md:self-auto px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md shadow-amber-400/20 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-slate-950" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < t.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-700 text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-blue-300 bg-blue-500/15 border border-blue-500/30 px-2 py-0.5 rounded-full truncate max-w-[130px]">
                    {t.serviceCategory}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Verified Outcome Pill */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                    Measurable Result
                  </span>
                  <span className="text-xs font-bold text-emerald-200">
                    {t.outcome}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {t.name}
                      </h4>
                      {t.verified && (
                        <span title="Verified Client">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      {t.role} · <span className="text-slate-200 font-semibold">{t.organization}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for adding review */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
            <div className="bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-700 text-white relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white font-heading mb-1">
                Share Your Experience with Lasnet Solutions
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Your feedback helps us continuously improve our digital solutions and one-on-one coaching.
              </p>

              {submittedNotice ? (
                <div className="p-6 text-center space-y-2 bg-emerald-950/60 rounded-2xl border border-emerald-800">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Thank You!</h4>
                  <p className="text-xs text-emerald-300">Your review has been added successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="e.g. Abena Mensah"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Role / Designation
                      </label>
                      <input
                        type="text"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        placeholder="e.g. Managing Director"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Organization or Company
                      </label>
                      <input
                        type="text"
                        value={newReview.organization}
                        onChange={(e) => setNewReview({ ...newReview, organization: e.target.value })}
                        placeholder="e.g. Zenith Tech"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Service Category
                      </label>
                      <select
                        value={newReview.serviceCategory}
                        onChange={(e) => setNewReview({ ...newReview, serviceCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white"
                      >
                        <option>Website & Software Development</option>
                        <option>Online 1-on-1 IT Coaching</option>
                        <option>Microsoft Office Professional Services</option>
                        <option>Video Editing & Creative Content Creation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1 focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= newReview.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-700'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-300 ml-2">
                        {newReview.rating} out of 5 stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Feedback / Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.quote}
                      onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                      placeholder="Share your experience working with Lasnet Solutions..."
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Measurable Result (Optional)
                    </label>
                    <input
                      type="text"
                      value={newReview.outcome}
                      onChange={(e) => setNewReview({ ...newReview, outcome: e.target.value })}
                      placeholder="e.g. Launched new site on schedule; 2x sales boost"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-md cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
