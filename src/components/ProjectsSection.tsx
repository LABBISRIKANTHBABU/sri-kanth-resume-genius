import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-Powered Automation Tool',
    description: 'Python-based browser automation agent with Playwright integration for automating repetitive tasks',
    skills: ['Python', 'Automation', 'API Integration', 'Playwright'],
    gradient: 'from-blue-500 to-purple-600',
    youtubeLink: 'https://www.youtube.com/watch?v=fmVeBrEgRd4',
    githubLink: null,
    liveLink: null
  },
  {
    title: 'Data Analytics with Power BI',
    description: 'End-to-end analytics project transforming raw data into business insights with interactive visualizations',
    skills: ['Power BI', 'Python', 'Pandas', 'Data Visualization', 'Excel'],
    gradient: 'from-green-500 to-blue-600',
    youtubeLink: null,
    githubLink: 'https://github.com/LABBISRIKANTHBABU/Power-BI',
    liveLink: null
  },
  {
    title: 'Full-Stack MERN Application',
    description: 'Secure, responsive web application with robust authentication and cross-platform compatibility',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Authentication'],
    gradient: 'from-purple-500 to-pink-600',
    youtubeLink: null,
    githubLink: 'https://github.com/LABBISRIKANTHBABU/Internship_Projects',
    liveLink: null
  },
  {
    title: 'Weather Application',
    description: 'Real-time weather app with dynamic UI, day/night mode toggle and API integration',
    skills: ['React.js', 'API Integration', 'Responsive Design', 'JavaScript'],
    gradient: 'from-orange-500 to-red-600',
    youtubeLink: null,
    githubLink: null,
    liveLink: 'https://famous-mousse-58b849.netlify.app/'
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section className="section-padding print:py-8 print-section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-5xl font-bold text-white mb-4 print:text-2xl print:text-black print:mb-6">
            Featured Projects
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full print:hidden"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto print:text-gray-600">
            A showcase of my technical expertise through real-world applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 print:gap-4">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-hover group relative overflow-hidden print:bg-white print:border-gray-300 print:hover:scale-100 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient top border */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient} print:hidden`}></div>
              
              {/* Hover overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 print:hidden`}></div>
              
              <CardHeader className="print:pb-2 relative">
                <CardTitle className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 print:text-black print:text-lg">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base print:text-gray-600 print:text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="print:pt-0 relative">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map(skill => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 print:border-gray-400 print:text-gray-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 print:gap-2">
                  {project.githubLink && (
                    <Button
                      onClick={() => window.open(project.githubLink, '_blank')}
                      variant="outline"
                      size="sm"
                      className="glass-hover text-white hover:scale-105 print:bg-gray-100 print:border-gray-300 print:text-gray-700 group/btn"
                    >
                      <Github className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform" />
                      Code
                      <ExternalLink className="w-2 h-2 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                  {project.youtubeLink && (
                    <Button
                      onClick={() => window.open(project.youtubeLink, '_blank')}
                      variant="outline"
                      size="sm"
                      className="bg-red-600/20 border-red-500/30 text-red-300 hover:bg-red-600/30 hover:scale-105 transition-all duration-300 print:bg-red-50 print:border-red-300 print:text-red-700 group/btn"
                    >
                      <svg className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Demo
                      <ExternalLink className="w-2 h-2 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button
                      onClick={() => window.open(project.liveLink, '_blank')}
                      variant="outline"
                      size="sm"
                      className="bg-green-600/20 border-green-500/30 text-green-300 hover:bg-green-600/30 hover:scale-105 transition-all duration-300 print:bg-green-50 print:border-green-300 print:text-green-700 group/btn"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Live Site
                      <ExternalLink className="w-2 h-2 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};