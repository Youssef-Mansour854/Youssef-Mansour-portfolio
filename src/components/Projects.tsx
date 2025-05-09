import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  
  // Get all unique technologies
  const allTechnologies = ['All', ...new Set(projects.flatMap(project => project.tech))].sort();

  // Filter projects based on selected technology
  const filteredProjects = selectedTech === 'All' 
    ? projects 
    : projects.filter(project => project.tech.includes(selectedTech));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleTechClick = (tech: string) => {
    setSelectedTech(tech);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className={`${isDarkMode ? 'bg-[#161822]/95 border-[#1f2335]' : 'bg-white border-gray-200'} backdrop-blur-lg p-6 md:p-8 rounded-2xl border shadow-lg hover-glow gradient-border`}
      >
        <h2 className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} text-xl mb-8 flex items-center gap-2`}>
          <span className="text-[#464b5d]">{'/*'}</span> My Projects <span className="text-[#464b5d]">{'*/'}</span>
        </h2>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className={`flex items-center gap-2 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'}`}>
            <Filter className="w-5 h-5" />
            <span>Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechClick(tech)}
                className={`${
                  selectedTech === tech
                    ? isDarkMode
                      ? 'bg-[#82aaff] text-[#1f2335]'
                      : 'bg-blue-600 text-white'
                    : isDarkMode
                    ? 'bg-[#1f2335] text-[#82aaff] hover:bg-[#2a3042]'
                    : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                } px-4 py-2 rounded-full text-sm cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-200 font-medium`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedTech}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={item}
                className={`${isDarkMode ? 'bg-[#161822]/95 border-[#1f2335]' : 'bg-white border-gray-200'} backdrop-blur-lg p-6 md:p-8 rounded-2xl border shadow-lg hover:border-[#2a3042] transition-all duration-500 hover-glow gradient-border group`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} group-hover:text-[#89ddff] transition-colors`}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <h3 className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} text-lg group-hover:text-[#89ddff] transition-colors`}>{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <a 
                      href={project.github} 
                      className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} hover:text-[#c792ea] transition-colors p-2 rounded-lg hover:bg-[#1f2335]/50`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View Source"
                    >
                      <Github className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a 
                      href={project.demo} 
                      className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} hover:text-[#c792ea] transition-colors p-2 rounded-lg hover:bg-[#1f2335]/50`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
                <p className={`${isDarkMode ? 'text-[#a6accd]' : 'text-gray-600'} mb-6 group-hover:text-[#c0c5e4] transition-colors`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => handleTechClick(tech)}
                      className={`${
                        isDarkMode ? 'bg-[#1f2335] text-[#c792ea]' : 'bg-gray-100 text-purple-600'
                      } px-4 py-1.5 rounded-full text-sm group-hover:text-[#bb9af7] transition-colors cursor-pointer transform hover:scale-105 active:scale-95 duration-200`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};