
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code, Database, Cloud, Brain, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      description: 'Python-based browser automation agent with Playwright integration',
      skills: ['Python', 'Automation', 'API Integration'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Data Analytics with Power BI',
      description: 'End-to-end analytics project transforming raw data into business insights',
      skills: ['Power BI', 'Python', 'Pandas', 'Data Visualization'],
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'Full-Stack MERN Application',
      description: 'Secure, responsive web application with robust authentication',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather app with dynamic UI and API integration',
      skills: ['React.js', 'API Integration', 'Responsive Design'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div 
          className="relative z-10 text-center px-6 transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/289c729e-4a7d-41a8-96f4-2f9d9864b4d2.png" 
                alt="Sri Kanth Babu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Sri Kanth Babu
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-light">
            Aspiring AI Educator & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            B.Tech Student at G Pullareddy Engineering College | Expected 2026
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Mail className="w-4 h-4 mr-2" />
              kanthbabusri@gmail.com
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone className="w-4 h-4 mr-2" />
              7075841474
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <MapPin className="w-4 h-4 mr-2" />
              Kurnool, AP
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Professional Summary
          </h3>
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                A highly motivated and adaptable engineering student with a robust foundation in 
                <span className="text-blue-400 font-semibold"> full-stack development</span>, strong 
                <span className="text-purple-400 font-semibold"> Python programming skills</span>, and practical experience in 
                <span className="text-green-400 font-semibold"> data analytics</span>. Complemented by a burgeoning passion for 
                <span className="text-orange-400 font-semibold"> Artificial Intelligence, Machine Learning</span>, and 
                <span className="text-pink-400 font-semibold"> cloud technologies</span>, I am eager to leverage my technical abilities 
                to develop and deliver impactful, skills-based AI training programs and technical content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Technical Proficiencies
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Languages & Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'HTML', 'CSS'].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI/ML & Data Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Power BI', 'Data Analytics'].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Cloud & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Azure', 'AWS', 'MongoDB', 'Git', 'Linux', 'API Integration'].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-white">
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-white/10 border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="border-white/30 text-white">
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
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Education & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold">B.Tech - G Pullareddy Engineering College</h4>
                  <p className="text-gray-300">Expected 2026 | Kurnool</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold">Class XII - Narayana Jr College</h4>
                  <p className="text-gray-300">5.5 CGPA | 2022</p>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <h4 className="text-white font-semibold">Class X - Ridge School</h4>
                  <p className="text-gray-300">6.4 CGPA | 2020</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg">
                  <h4 className="text-white font-semibold">🏆 Smart India Hackathon 2023</h4>
                  <p className="text-gray-300">Finalist - Ministry of Education, Govt. of India</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
                  <h4 className="text-white font-semibold">💼 Full Stack Web Development</h4>
                  <p className="text-gray-300">Internship Completed - June 2024 to August 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">
            Let's Build the Future Together
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Ready to contribute to innovative AI projects and full-stack development initiatives
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
