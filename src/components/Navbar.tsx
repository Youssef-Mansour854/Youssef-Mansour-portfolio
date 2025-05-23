import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  setIsDarkMode,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  return (
    <nav className={`${isDarkMode ? 'bg-[#161822]/90 border-[#1f2335]' : 'bg-white/90 border-gray-200'} backdrop-blur-lg p-4 border-b sticky top-0 z-50`}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="flex flex-col">
              <span className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} font-bold text-lg typing-effect`}>Youssef Mansour</span>
              <span className={`${isDarkMode ? 'text-[#89ddff]' : 'text-blue-400'} text-xs opacity-80 typing-cursor`}>Frontend Developer</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Dark/Light mode toggle button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-[#1f2335]' : 'hover:bg-gray-100'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-[#82aaff]" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>
            {/* Mobile menu button only */}
            <button 
              onClick={toggleMobileMenu}
              className={`md:hidden ${isDarkMode ? 'text-[#82aaff] hover:text-[#c792ea]' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};