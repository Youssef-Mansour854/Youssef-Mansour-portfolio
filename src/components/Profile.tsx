import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProfileProps {
  isDarkMode: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ isDarkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
          <span className="text-[#464b5d]">{'/*'}</span> About Me <span className="text-[#464b5d]">{'*/'}</span>
        </h2>
        <div className="space-y-6">
          {[
            { label: 'name', value: 'Youssef Mansour' },
            { label: 'role', value: 'Frontend Developer' },
            { label: 'bio', value: 'Passionate frontend developer specializing in React and Next.js, creating modern and responsive web applications. Currently expanding my skills into backend development with Node.js.' }
          ].map((item: { label: string; value: string }, index) => (
            <motion.div 
              key={index} 
              variants={itemAnimation}
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-3 group"
            >
              <span className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} group-hover:text-[#bb9af7] transition-colors`}>const</span>
              <span className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} group-hover:text-[#89ddff] transition-colors`}>{item.label}</span>
              <span className={`${isDarkMode ? 'text-[#89ddff]' : 'text-blue-400'}`}>=</span>
              <span className={`${isDarkMode ? 'text-[#c3e88d]' : 'text-green-600'} group-hover:text-[#9ece6a] transition-colors break-words`}>'{item.value}'</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className={`${isDarkMode ? 'bg-[#161822]/95 border-[#1f2335]' : 'bg-white border-gray-200'} backdrop-blur-lg p-6 md:p-8 rounded-2xl border shadow-lg hover-glow gradient-border`}
      >
        <h2 className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} text-xl mb-8 flex items-center gap-2`}>
          <span className="text-[#464b5d]">{'/*'}</span> Current Training <span className="text-[#464b5d]">{'*/'}</span>
        </h2>
        <motion.div variants={item} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <GraduationCap className={`w-5 h-5 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} group-hover:text-[#89ddff] transition-colors`} />
              <span className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} group-hover:text-[#89ddff] transition-colors font-medium`}>
                Route Academy - Full Stack Web Development Diploma
              </span>
            </div>
            <div className={`${isDarkMode ? 'text-[#a6accd]' : 'text-gray-600'} ml-8`}>
              <p className="text-sm opacity-80 mb-3">September 2024 - Present</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Learning MERN Stack Development (MongoDB, Express.js, React, Node.js)</li>
                <li>Building real-world projects with modern web technologies</li>
                <li>Focusing on both frontend and backend development</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className={`${isDarkMode ? 'bg-[#161822]/95 border-[#1f2335]' : 'bg-white border-gray-200'} backdrop-blur-lg p-6 md:p-8 rounded-2xl border shadow-lg hover-glow gradient-border`}
      >
        <h2 className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} text-xl mb-8 flex items-center gap-2`}>
          <span className="text-[#464b5d]">{'/*'}</span> Academic Background <span className="text-[#464b5d]">{'*/'}</span>
        </h2>
        <motion.div variants={item} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <GraduationCap className={`w-5 h-5 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} group-hover:text-[#89ddff] transition-colors`} />
              <span className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} group-hover:text-[#89ddff] transition-colors`}>
                Aboukir High Institutes
              </span>
            </div>
            <div className={`${isDarkMode ? 'text-[#c3e88d]' : 'text-green-600'} ml-8`}>
              Business Information Systems (BIS) - Third Year<br />
              Current GPA: 3.18
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};