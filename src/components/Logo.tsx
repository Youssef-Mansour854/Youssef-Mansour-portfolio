import React from 'react';
import { Code2 } from 'lucide-react';

export const Logo = () => (
  <div className="relative flex items-center justify-center w-12 h-12 group">
    <div className="absolute inset-0 bg-gradient-to-br from-[#82aaff] via-[#c792ea] to-[#89ddff] rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
    <Code2 className="w-8 h-8 text-[#82aaff] transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
  </div>
);