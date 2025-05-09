import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile isDarkMode={isDarkMode} />;
      case 'projects':
        return <Projects isDarkMode={isDarkMode} />;
      case 'skills':
        return <Skills isDarkMode={isDarkMode} />;
      case 'contact':
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0f1117] text-[#a6accd]' : 'bg-white text-gray-800'} font-mono transition-all duration-300 flex flex-col ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Toaster position="bottom-right" />
      
      <Navbar 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {isMobileMenuOpen && (
        <MobileMenu
          isDarkMode={isDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}

      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar
          isDarkMode={isDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="flex-1 p-4 md:p-10 mt-16 md:mt-0">
          <AnimatePresence mode="wait">
            {renderActiveComponent()}
          </AnimatePresence>
        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;