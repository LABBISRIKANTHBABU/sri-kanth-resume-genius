import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'Python', level: 90, icon: <Code className="w-4 h-4" />, color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', level: 85, icon: <Code className="w-4 h-4" />, color: 'from-yellow-500 to-yellow-600' },
  { name: 'React.js', level: 80, icon: <Code className="w-4 h-4" />, color: 'from-cyan-500 to-cyan-600' },
  { name: 'Machine Learning', level: 75, icon: <Brain className="w-4 h-4" />, color: 'from-purple-500 to-purple-600' },
  { name: 'Data Analytics', level: 85, icon: <Database className="w-4 h-4" />, color: 'from-green-500 to-green-600' },
  { name: 'Cloud Technologies', level: 70, icon: <Cloud className="w-4 h-4" />, color: 'from-orange-500 to-orange-600' },
];

const techStacks = [
  {
    title: 'Languages & Frameworks',
    icon: <Code className="w-5 h-5" />,
    gradient: 'from-blue-600/20 to-purple-600/20',
    printBg: 'print:bg-blue-50 print:border-blue-200',
    technologies: ['Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'HTML', 'CSS'],
    badgeClass: 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 print:bg-blue-100 print:text-blue-800'
  },
  {
    title: 'AI/ML & Data Science',
    icon: <Brain className="w-5 h-5" />,
    gradient: 'from-green-600/20 to-blue-600/20',
    printBg: 'print:bg-green-50 print:border-green-200',
    technologies: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Power BI', 'Data Analytics'],
    badgeClass: 'bg-green-500/20 text-green-300 hover:bg-green-500/30 print:bg-green-100 print:text-green-800'
  },
  {
    title: 'Cloud & Tools',
    icon: <Cloud className="w-5 h-5" />,
    gradient: 'from-purple-600/20 to-pink-600/20',
    printBg: 'print:bg-purple-50 print:border-purple-200',
    technologies: ['Azure', 'AWS', 'MongoDB', 'Git', 'Linux', 'API Integration'],
    badgeClass: 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 print:bg-purple-100 print:text-purple-800'
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section className="section-padding bg-black/20 print:py-8 print:bg-gray-50 print-section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-5xl font-bold text-white mb-4 print:text-2xl print:text-black print:mb-6">
            Technical Proficiencies
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full print:hidden"></div>
        </div>
        
        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 print:gap-4">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="glass-hover card-hover print:bg-white print:border-gray-300 print:hover:scale-100 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 print:p-3">
                <div className="flex items-center justify-between mb-4 print:mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} print:bg-gray-200`}>
                      <span className="text-white print:text-gray-700">{skill.icon}</span>
                    </div>
                    <span className="text-white font-semibold text-lg print:text-black">{skill.name}</span>
                  </div>
                  <span className="text-gray-300 font-bold text-lg print:text-gray-600">{skill.level}%</span>
                </div>
                <div className="relative">
                  <Progress value={skill.level} className="h-3 print:h-2" />
                  <div 
                    className={`absolute inset-0 h-3 rounded-full bg-gradient-to-r ${skill.color} print:hidden`}
                    style={{ width: `${skill.level}%`, opacity: 0.7 }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Technology Stacks */}
        <div className="grid md:grid-cols-3 gap-8 print:mt-6 print:gap-3">
          {techStacks.map((stack, index) => (
            <Card 
              key={stack.title}
              className={`bg-gradient-to-br ${stack.gradient} border-white/20 card-hover ${stack.printBg} print:hover:scale-100 animate-scale-in`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <CardHeader className="print:pb-2">
                <CardTitle className="text-white flex items-center gap-2 print:text-black print:text-lg">
                  <div className="p-2 rounded-lg bg-white/10 print:bg-white/50">
                    {stack.icon}
                  </div>
                  {stack.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className={`${stack.badgeClass} transition-all duration-300 hover:scale-105 cursor-default`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};