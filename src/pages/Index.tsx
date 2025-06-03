import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code, Database, Cloud, Brain, Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

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

  const skills = [
    { name: 'Python', level: 90, icon: <Code className="w-4 h-4" /> },
    { name: 'JavaScript', level: 85, icon: <Code className="w-4 h-4" /> },
    { name: 'React.js', level: 80, icon: <Code className="w-4 h-4" /> },
    { name: 'Machine Learning', level: 75, icon: <Brain className="w-4 h-4" /> },
    { name: 'Data Analytics', level: 85, icon: <Database className="w-4 h-4" /> },
    { name: 'Cloud Technologies', level: 70, icon: <Cloud className="w-4 h-4" /> },
  ];

  const projects = [
    {
      title: 'AI-Powered Automation Tool',
      description: 'Python-based browser automation agent with Playwright integration for automating repetitive tasks',
      skills: ['Python', 'Automation', 'API Integration', 'Playwright'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Data Analytics with Power BI',
      description: 'End-to-end analytics project transforming raw data into business insights with interactive visualizations',
      skills: ['Power BI', 'Python', 'Pandas', 'Data Visualization', 'Excel'],
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'Full-Stack MERN Application',
      description: 'Secure, responsive web application with robust authentication and cross-platform compatibility',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Authentication'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather app with dynamic UI, day/night mode toggle and API integration',
      skills: ['React.js', 'API Integration', 'Responsive Design', 'JavaScript'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden print:min-h-0 print:py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm print:hidden"></div>
        <div 
          className="relative z-10 text-center px-6 transform transition-all duration-1000 print:transform-none"
          style={{ transform: scrollY > 0 ? `translateY(${scrollY * 0.1}px)` : 'translateY(0)' }}
        >
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300 print:w-32 print:h-32 print:border-gray-300">
              <img 
                src="/lovable-uploads/289c729e-4a7d-41a8-96f4-2f9d9864b4d2.png" 
                alt="Sri Kanth Babu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse print:hidden"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in print:text-4xl print:text-black print:mb-2">
            Sri Kanth Babu
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-light print:text-xl print:text-gray-700 print:mb-4">
            Aspiring AI Educator & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto print:text-base print:text-gray-600 print:mb-4">
            B.Tech Student at G Pullareddy Engineering College | Expected 2026
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 print:gap-2 print:mb-4">
            <Button 
              onClick={handleEmailClick}
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 print:bg-white print:border-gray-300 print:text-black print:hover:bg-gray-50"
            >
              <Mail className="w-4 h-4 mr-2" />
              kanthbabusri@gmail.com
            </Button>
            <Button 
              onClick={handlePhoneClick}
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 print:bg-white print:border-gray-300 print:text-black print:hover:bg-gray-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 7075841474
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 print:bg-white print:border-gray-300 print:text-black"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Kurnool, AP
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 print:gap-2">
            <Button 
              onClick={handleGithubClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 print:bg-gray-800 print:text-white"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
            <Button 
              onClick={handleLinkedinClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 print:bg-blue-600 print:text-white"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
            <Button 
              onClick={handleDownloadCV}
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 no-print print:hidden"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-6 print:py-8 print-section">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center print:text-2xl print:text-black print:mb-6">
            Professional Summary
          </h3>
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 print:bg-white print:border-gray-300">
            <CardContent className="p-8 print:p-4">
              <p className="text-gray-300 leading-relaxed text-lg print:text-base print:text-gray-700">
                A highly motivated and adaptable engineering student with a robust foundation in 
                <span className="text-blue-400 font-semibold print:text-blue-600"> full-stack development</span>, strong 
                <span className="text-purple-400 font-semibold print:text-purple-600"> Python programming skills</span>, and practical experience in 
                <span className="text-green-400 font-semibold print:text-green-600"> data analytics</span>. Complemented by a burgeoning passion for 
                <span className="text-orange-400 font-semibold print:text-orange-600"> Artificial Intelligence, Machine Learning</span>, and 
                <span className="text-pink-400 font-semibold print:text-pink-600"> cloud technologies</span>, I am eager to leverage my technical abilities 
                to develop and deliver impactful, skills-based AI training programs and technical content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-black/20 print:py-8 print:bg-gray-50 print-section">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center print:text-2xl print:text-black print:mb-6">
            Technical Proficiencies
          </h3>
          <div className="grid md:grid-cols-2 gap-8 print:gap-4">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 print:bg-white print:border-gray-300 print:hover:scale-100">
                <CardContent className="p-6 print:p-3">
                  <div className="flex items-center justify-between mb-4 print:mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 print:text-blue-600">{skill.icon}</span>
                      <span className="text-white font-semibold print:text-black">{skill.name}</span>
                    </div>
                    <span className="text-gray-300 print:text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 print:mt-6 print:gap-3">
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-white/20 hover:scale-105 transition-transform duration-300 print:bg-blue-50 print:border-blue-200 print:hover:scale-100">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-white flex items-center gap-2 print:text-black print:text-lg">
                  <Code className="w-5 h-5" />
                  Languages & Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'HTML', 'CSS'].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 transition-colors print:bg-blue-100 print:text-blue-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border-white/20 hover:scale-105 transition-transform duration-300 print:bg-green-50 print:border-green-200 print:hover:scale-100">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-white flex items-center gap-2 print:text-black print:text-lg">
                  <Brain className="w-5 h-5" />
                  AI/ML & Data Science
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <div className="flex flex-wrap gap-2">
                  {['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Power BI', 'Data Analytics'].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 transition-colors print:bg-green-100 print:text-green-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-white/20 hover:scale-105 transition-transform duration-300 print:bg-purple-50 print:border-purple-200 print:hover:scale-100">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-white flex items-center gap-2 print:text-black print:text-lg">
                  <Cloud className="w-5 h-5" />
                  Cloud & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <div className="flex flex-wrap gap-2">
                  {['Azure', 'AWS', 'MongoDB', 'Git', 'Linux', 'API Integration'].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 transition-colors print:bg-purple-100 print:text-purple-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 print:py-8 print-section">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center print:text-2xl print:text-black print:mb-6">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8 print:gap-4">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-white/10 border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group print:bg-white print:border-gray-300 print:hover:scale-100">
                <div className={`h-2 bg-gradient-to-r ${project.gradient} print:hidden`}></div>
                <CardHeader className="print:pb-2">
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors print:text-black print:text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 print:text-gray-600 print:text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="print:pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-colors print:border-gray-400 print:text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-20 px-6 bg-black/20 print:py-8 print:bg-gray-50 print-section">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center print:text-2xl print:text-black print:mb-6">
            Education & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8 print:gap-4">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 print:bg-white print:border-gray-300 print:hover:scale-100">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-white flex items-center gap-2 print:text-black print:text-lg">
                  <Calendar className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 print:space-y-2 print:pt-0">
                <div className="border-l-2 border-blue-500 pl-4 print:border-blue-400">
                  <h4 className="text-white font-semibold print:text-black print:text-sm">B.Tech - G Pullareddy Engineering College</h4>
                  <p className="text-gray-300 print:text-gray-600 print:text-sm">Expected 2026 | Kurnool</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4 print:border-purple-400">
                  <h4 className="text-white font-semibold print:text-black print:text-sm">Class XII - Narayana Jr College</h4>
                  <p className="text-gray-300 print:text-gray-600 print:text-sm">5.5 CGPA | 2022</p>
                </div>
                <div className="border-l-2 border-green-500 pl-4 print:border-green-400">
                  <h4 className="text-white font-semibold print:text-black print:text-sm">Class X - Ridge School</h4>
                  <p className="text-gray-300 print:text-gray-600 print:text-sm">6.4 CGPA | 2020</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 print:bg-white print:border-gray-300 print:hover:scale-100">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-white flex items-center gap-2 print:text-black print:text-lg">
                  <Award className="w-5 h-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 print:space-y-2 print:pt-0">
                <div className="p-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg hover:from-yellow-600/30 hover:to-orange-600/30 transition-colors print:bg-yellow-50 print:border print:border-yellow-200 print:p-2">
                  <h4 className="text-white font-semibold print:text-black print:text-sm">🏆 Smart India Hackathon 2023</h4>
                  <p className="text-gray-300 print:text-gray-600 print:text-sm">Finalist - Ministry of Education, Govt. of India</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg hover:from-blue-600/30 hover:to-purple-600/30 transition-colors print:bg-blue-50 print:border print:border-blue-200 print:p-2">
                  <h4 className="text-white font-semibold print:text-black print:text-sm">💼 Full Stack Web Development</h4>
                  <p className="text-gray-300 print:text-gray-600 print:text-sm">Internship Completed - June 2024 to August 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 no-print">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">
            Let's Build the Future Together
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Ready to contribute to innovative AI projects and full-stack development initiatives
          </p>
          <Button 
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
