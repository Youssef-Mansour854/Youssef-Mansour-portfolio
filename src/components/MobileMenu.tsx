import React from 'react';
import { tabs } from '../data/tabs';
import { socialLinks } from '../data/socialLinks';
import profileImage from '../assets/my-photo.jpg';

interface MobileMenuProps {
  isDarkMode: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isDarkMode,
  activeTab,
  setActiveTab,
  setIsMobileMenuOpen,
}) => {
  return (
    <div className={`md:hidden fixed inset-0 z-40 ${isDarkMode ? 'bg-[#0f1117]/95' : 'bg-white/95'} backdrop-blur-lg mobile-menu-enter overflow-y-auto`}>
      <div className="flex flex-col p-6 pt-24">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden group gradient-border mb-4">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full transform transition-all duration-700 group-hover:scale-110"
            />
          </div>
          <h2 className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} text-xl font-bold`}>Youssef Mansour</h2>
          <p className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} text-sm mt-1`}>Frontend Developer</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 p-3 rounded-xl ${
                isDarkMode
                  ? 'bg-[#1f2335]/50 hover:bg-[#1f2335] text-[#82aaff]'
                  : 'bg-gray-50 hover:bg-gray-100 text-blue-600'
              } transition-all duration-300 group`}
            >
              <social.icon className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-center">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="space-y-3">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left p-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                activeTab === id 
                  ? isDarkMode 
                    ? 'bg-[#1f2335] text-[#82aaff] shadow-lg shadow-[#0f1117]/50 gradient-border'
                    : 'bg-gray-100 text-blue-600 shadow-lg shadow-gray-200'
                  : isDarkMode
                    ? 'hover:bg-[#1f2335] hover:bg-opacity-50'
                    : 'hover:bg-gray-100'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-lg">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};