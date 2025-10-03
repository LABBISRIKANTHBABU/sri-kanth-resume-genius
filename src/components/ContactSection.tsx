import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  onEmailClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onEmailClick }) => {
  return (
    <section className="section-padding bg-gradient-to-br from-black/30 to-purple-900/30 print:py-8 print:bg-white print-section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-5xl font-bold text-white mb-4 print:text-2xl print:text-black print:mb-6">
            Get In Touch
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full print:hidden"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg print:text-gray-600">
            Let's collaborate on your next project. I'm always open to discussing new opportunities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12 print:gap-3 print:mb-6">
            {/* Email Card */}
            <Card className="glass-hover card-hover group print:bg-white print:border-gray-300 print:hover:scale-100 animate-fade-in">
              <CardContent className="p-6 text-center print:p-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 print:w-12 print:h-12 print:mb-2 print:bg-blue-100">
                  <Mail className="w-8 h-8 text-white print:w-6 print:h-6 print:text-blue-600" />
                </div>
                <h4 className="text-white font-semibold mb-2 print:text-black print:text-sm">Email</h4>
                <p className="text-gray-300 text-sm break-all print:text-gray-600 print:text-xs">
                  kanthbabusri@gmail.com
                </p>
              </CardContent>
            </Card>
            
            {/* Phone Card */}
            <Card className="glass-hover card-hover group print:bg-white print:border-gray-300 print:hover:scale-100 animate-fade-in animation-delay-200">
              <CardContent className="p-6 text-center print:p-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 print:w-12 print:h-12 print:mb-2 print:bg-purple-100">
                  <Phone className="w-8 h-8 text-white print:w-6 print:h-6 print:text-purple-600" />
                </div>
                <h4 className="text-white font-semibold mb-2 print:text-black print:text-sm">Phone</h4>
                <p className="text-gray-300 text-sm print:text-gray-600 print:text-xs">
                  +91 7075841474
                </p>
              </CardContent>
            </Card>
            
            {/* Location Card */}
            <Card className="glass-hover card-hover group print:bg-white print:border-gray-300 print:hover:scale-100 animate-fade-in animation-delay-400">
              <CardContent className="p-6 text-center print:p-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 print:w-12 print:h-12 print:mb-2 print:bg-pink-100">
                  <MapPin className="w-8 h-8 text-white print:w-6 print:h-6 print:text-pink-600" />
                </div>
                <h4 className="text-white font-semibold mb-2 print:text-black print:text-sm">Location</h4>
                <p className="text-gray-300 text-sm print:text-gray-600 print:text-xs">
                  Kurnool, Andhra Pradesh
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Button */}
          <div className="text-center animate-scale-in">
            <Card className="glass-hover max-w-2xl mx-auto print:bg-white print:border-gray-300">
              <CardContent className="p-8 print:p-4">
                <h4 className="text-2xl font-bold text-white mb-4 print:text-xl print:text-black">
                  Ready to Start a Conversation?
                </h4>
                <p className="text-gray-300 mb-6 print:text-gray-600 print:mb-3">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <Button 
                  onClick={onEmailClick}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-glow text-lg print:bg-blue-600 print:text-white group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Me an Email
                  <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};