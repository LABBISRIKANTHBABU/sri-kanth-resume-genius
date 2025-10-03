import React, { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SummarySection } from '@/components/SummarySection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    window.print();
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:kanthbabusri@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917075841474';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/LABBISRIKANTHBABU', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/kanth-babu-sri', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 print:bg-white">
      {/* Print Styles */}
      <style>
        {`
        @media print {
          body { -webkit-print-color-adjust: exact; }
          .no-print { display: none !important; }
          .print-section { page-break-inside: avoid; }
          .bg-gradient-to-br { background: white !important; }
          .text-white { color: black !important; }
          .text-gray-300 { color: #374151 !important; }
          .bg-white\\/10 { background: #f9fafb !important; border: 1px solid #e5e7eb !important; }
          .border-white\\/20 { border-color: #e5e7eb !important; }
        }
        `}
      </style>

      <HeroSection
        scrollY={scrollY}
        onDownloadCV={handleDownloadCV}
        onEmailClick={handleEmailClick}
        onPhoneClick={handlePhoneClick}
        onGithubClick={handleGithubClick}
        onLinkedinClick={handleLinkedinClick}
      />

      <SummarySection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection onEmailClick={handleEmailClick} />

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-white/10 print:py-4 print:bg-gray-100 print:border-gray-300 animate-fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 print:text-gray-600 text-sm">
            © 2024 Sri Kanth Babu. Built with{' '}
            <span className="text-red-400 print:text-red-600">❤</span>{' '}
            using React & Tailwind CSS
          </p>
          <p className="text-gray-400 text-xs mt-2 print:text-gray-500">
            Designed for excellence, crafted with passion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
