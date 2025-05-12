import React from 'react';
import { Code2 } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`mt-auto ${isDarkMode ? 'bg-[#161822]/90 border-[#1f2335]' : 'bg-white/90 border-gray-200'} backdrop-blur-lg border-t py-6`}>
      <div className="container mx-auto px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 group">
            <Code2 className={`w-5 h-5 ${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} transform transition-all duration-300 group-hover:rotate-12`} />
            <span className="text-center sm:text-left typing-effect">Built with passion by Youssef Mansour</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>© {new Date().getFullYear()}</span>
            |
            <a 
              href="https://github.com/Youssef-Mansour854/my-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'hover:text-[#c792ea]' : 'hover:text-blue-600'} transition-colors`}
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
