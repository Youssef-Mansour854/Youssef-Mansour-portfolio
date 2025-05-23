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
import './App.css'; // Import the CSS file for the variables

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile isDarkMode={theme === 'dark'} />;
      case 'projects':
        return <Projects isDarkMode={theme === 'dark'} />;
      case 'skills':
        return <Skills isDarkMode={theme === 'dark'} />;
      case 'contact':
        return <Contact isDarkMode={theme === 'dark'} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0f1117] text-[#a6accd]' : 'bg-white text-gray-800'} font-mono transition-all duration-300 flex flex-col ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Toaster position="bottom-right" />
      
      <Navbar 
        isDarkMode={theme === 'dark'}
        setIsDarkMode={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {isMobileMenuOpen && (
        <MobileMenu
          isDarkMode={theme === 'dark'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}

      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar
          isDarkMode={theme === 'dark'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="flex-1 p-4 md:p-10 mt-16 md:mt-0">
          <AnimatePresence mode="wait">
            {renderActiveComponent()}
          </AnimatePresence>
        </div>
      </div>

      <Footer isDarkMode={theme === 'dark'} />

      
    </div>
  );
}

export default App;


type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}