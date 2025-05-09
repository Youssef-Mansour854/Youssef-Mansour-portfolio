import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { tabs } from '../data/tabs';
import profileImage from '../assets/my-photo.jpg';

interface SidebarProps {
  isDarkMode: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isDarkMode,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className={`hidden md:flex flex-col w-80 ${isDarkMode ? 'bg-[#161822]/95 border-[#1f2335]' : 'bg-white/95 border-gray-200'} backdrop-blur-lg border-r h-[calc(100vh-4rem)] sticky top-16`}>
      <div className="flex-1 overflow-y-auto scrollbar-custom">
        <div className="p-8">
          <div className="relative w-48 h-48 mx-auto mb-4 group rounded-2xl overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-full h-full object-cover border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 transform group-hover:scale-110"
              loading="eager"
            />
          </div>
          <div className="text-center space-y-3">
            <h2 className={`${isDarkMode ? 'text-[#82aaff]' : 'text-blue-600'} text-xl font-bold`}>Youssef Mansour</h2>
            <p className={`${isDarkMode ? 'text-[#c792ea]' : 'text-purple-600'} text-sm`}>Frontend Developer</p>
            <div className={`h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-[#1f2335] to-transparent' : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'} my-6`}></div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 p-3 rounded-xl ${
                  isDarkMode
                    ? 'hover:bg-[#1f2335] text-[#82aaff]'
                    : 'hover:bg-gray-50 text-blue-600'
                } transition-all duration-300 group`}
              >
                <social.icon className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs text-center">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="px-4 space-y-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
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
              <Icon className={`w-5 h-5 transition-transform duration-300 ${activeTab === id ? 'scale-110' : ''}`} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};