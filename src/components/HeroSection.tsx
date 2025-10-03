import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollY: number;
  onDownloadCV: () => void;
  onEmailClick: () => void;
  onPhoneClick: () => void;
  onGithubClick: () => void;
  onLinkedinClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  scrollY,
  onDownloadCV,
  onEmailClick,
  onPhoneClick,
  onGithubClick,
  onLinkedinClick
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden print:min-h-0 print:py-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 print:bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 print:hidden"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float print:hidden"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-400 print:hidden"></div>
      </div>
      
      <div 
        className="relative z-10 text-center px-6 transform transition-all duration-1000 print:transform-none animate-fade-in-up"
        style={{ transform: scrollY > 0 ? `translateY(${scrollY * 0.05}px)` : 'translateY(0)' }}
      >
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow print:hidden"></div>
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300 print:w-32 print:h-32 print:border-gray-300">
              <img 
                src="/lovable-uploads/289c729e-4a7d-41a8-96f4-2f9d9864b4d2.png" 
                alt="Sri Kanth Babu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-green-500 rounded-full border-2 border-white text-xs font-semibold text-white animate-pulse print:hidden">
            Available for Work
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-fade-in text-shadow-lg print:text-4xl print:text-black print:mb-2">
          Sri Kanth Babu
        </h1>
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-light mb-2 print:text-xl print:text-gray-700 print:mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in animation-delay-200">
              AI Content Developer
            </span>
            <span className="text-white/80 mx-2 print:text-gray-600">•</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in animation-delay-400">
              Full Stack Developer
            </span>
          </h2>
        </div>
        
        {/* Education */}
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-600 print:text-base print:text-gray-600 print:mb-4">
          <span className="font-semibold text-white print:text-black">B.Tech Student</span> at G Pullareddy Engineering College
          <span className="text-white/60 mx-2 print:text-gray-500">|</span>
          <span className="text-blue-300 print:text-blue-600">Expected 2026</span>
        </p>
        
        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in animation-delay-600 print:gap-2 print:mb-4">
          <Button 
            onClick={onEmailClick}
            variant="outline" 
            className="glass-hover text-white hover:scale-105 print:bg-white print:border-gray-300 print:text-black print:hover:bg-gray-50 group"
          >
            <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            kanthbabusri@gmail.com
          </Button>
          <Button 
            onClick={onPhoneClick}
            variant="outline" 
            className="glass-hover text-white hover:scale-105 print:bg-white print:border-gray-300 print:text-black print:hover:bg-gray-50 group"
          >
            <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            +91 7075841474
          </Button>
          <Button 
            variant="outline" 
            className="glass-hover text-white print:bg-white print:border-gray-300 print:text-black"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Kurnool, AP
          </Button>
        </div>
        
        {/* Social & Action Buttons */}
        <div className="flex justify-center gap-4 animate-fade-in animation-delay-600 print:gap-2">
          <Button 
            onClick={onGithubClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-glow print:bg-gray-800 print:text-white group"
          >
            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            GitHub
            <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            onClick={onLinkedinClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-glow print:bg-blue-600 print:text-white group"
          >
            <Linkedin className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            LinkedIn
            <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            onClick={onDownloadCV}
            variant="outline" 
            className="glass-hover text-white hover:scale-105 no-print print:hidden group"
          >
            <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
            Download CV
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce print:hidden">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};