import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ConfirmationModal } from './components/ConfirmationModal';
import { AdminInquiriesDrawer } from './components/AdminInquiriesDrawer';
import { SubmissionResponse } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Website & Software Development');
  const [prefilledBudget, setPrefilledBudget] = useState<string>('');
  const [prefilledDetails, setPrefilledDetails] = useState<string>('');
  const [inquiriesDrawerOpen, setInquiriesDrawerOpen] = useState<boolean>(false);
  const [submissionResponse, setSubmissionResponse] = useState<SubmissionResponse | null>(null);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (service: string, estimatedTier: string, details: string) => {
    setSelectedService(service);
    setPrefilledBudget(estimatedTier);
    setPrefilledDetails(details);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onSelectService={handleSelectService} />

      <main className="flex-1">
        {/* Hero Section with Interactive Software Preview (Flyer removed) */}
        <Hero
          onSelectService={handleSelectService}
          onExploreServices={handleExploreServices}
        />

        {/* 4 Core Services Showcase */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Scope & Cost Calculator */}
        <div id="estimator">
          <InteractiveCalculator onApplyEstimate={handleApplyEstimate} />
        </div>

        {/* Why Choose Lasnet Solutions */}
        <WhyChooseUs />

        {/* Testimonials Section (Social Proof & Reviews) */}
        <TestimonialsSection />

        {/* Contact & Inquiry Form (Direct to lasnetsolutions@gmail.com) */}
        <ContactSection
          selectedService={selectedService}
          prefilledBudget={prefilledBudget}
          prefilledDetails={prefilledDetails}
          onSubmissionSuccess={(res) => setSubmissionResponse(res)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenInquiries={() => setInquiriesDrawerOpen(true)} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />

      {/* Post-Submission Confirmation Modal */}
      <ConfirmationModal
        response={submissionResponse}
        onClose={() => setSubmissionResponse(null)}
      />

      {/* Admin Inquiry Inbox Drawer for verification */}
      <AdminInquiriesDrawer
        isOpen={inquiriesDrawerOpen}
        onClose={() => setInquiriesDrawerOpen(false)}
      />
    </div>
  );
}
