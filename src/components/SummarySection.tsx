import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const SummarySection: React.FC = () => {
  return (
    <section className="section-padding print:py-8 print-section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-5xl font-bold text-white mb-4 print:text-2xl print:text-black print:mb-6">
            Professional Summary
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full print:hidden"></div>
        </div>
        
        <Card className="glass-hover card-hover max-w-4xl mx-auto print:bg-white print:border-gray-300 animate-scale-in">
          <CardContent className="p-10 print:p-4">
            <p className="text-gray-300 leading-relaxed text-lg print:text-base print:text-gray-700">
              A highly motivated and adaptable engineering student with a robust foundation in 
              <span className="relative inline-block mx-1 px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded text-blue-300 font-semibold print:bg-blue-50 print:text-blue-600">
                full-stack development
              </span>, 
              strong 
              <span className="relative inline-block mx-1 px-2 py-0.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded text-purple-300 font-semibold print:bg-purple-50 print:text-purple-600">
                Python programming skills
              </span>, 
              and practical experience in 
              <span className="relative inline-block mx-1 px-2 py-0.5 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded text-green-300 font-semibold print:bg-green-50 print:text-green-600">
                data analytics
              </span>. 
              Complemented by a burgeoning passion for 
              <span className="relative inline-block mx-1 px-2 py-0.5 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded text-orange-300 font-semibold print:bg-orange-50 print:text-orange-600">
                Artificial Intelligence & Machine Learning
              </span>, 
              and 
              <span className="relative inline-block mx-1 px-2 py-0.5 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded text-pink-300 font-semibold print:bg-pink-50 print:text-pink-600">
                cloud technologies
              </span>, 
              I am eager to leverage my technical abilities to develop and deliver impactful, skills-based AI training programs and technical content.
            </p>
            
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center print:hidden">
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">4+</div>
                <div className="text-sm text-gray-400">Years Learning</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};