import React from 'react';
import { Terminal, FileCode2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const categories = [
    {
      category: 'Frontend Development',
      icon: Terminal,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'C++']
    },
    {
      category: 'Styling & UI',
      icon: FileCode2,
      skills: ['Bootstrap', 'Tailwind CSS', 'Responsive Design', 'UI/UX Principles']
    },
    {
      category: 'Currently Learning',
      icon: BookOpen,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} text-xl mb-8 flex items-center gap-2`}>
        <span className="text-[#464b5d]">{'/*'}</span> Technical Skills <span className="text-[#464b5d]">{'*/'}</span>
      </h2>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${isDarkMode ? 'bg-[#161822]/95 border-[#1f2335]' : 'bg-white border-gray-200'} backdrop-blur-lg p-6 md:p-8 rounded-2xl border shadow-lg hover-glow gradient-border group`}
          >
            <div className="flex items-center gap-2 mb-6">
              <category.icon className={`w-5 h-5 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} group-hover:text-[#89ddff] transition-colors`} />
              <h3 className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} text-lg group-hover:text-[#89ddff] transition-colors`}>{category.category}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  className={`skill-card ${isDarkMode ? 'bg-[#1f2335]' : 'bg-gray-100'} p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#0f1117]/50`}
                >
                  <span className={`${isDarkMode ? 'text-[#c3e88d]' : 'text-green-600'} group-hover:text-[#9ece6a] transition-colors`}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};