import { BookOpen, Terminal, FileCode2, Code2, Car, Cloud, Coffee, Utensils, Quote, User, type LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    title: 'Porsche Cars',
    description: 'Modern car showcase website built with TypeScript, featuring interactive UI and smooth animations',
    tech: ['TypeScript', 'React', 'CSS'],
    github: 'https://github.com/Youssef-Mansour854/Porsche-cars',
    demo: 'https://youssef-mansour854.github.io/Porsche-cars/',
    icon: Car
  },
  {
    title: 'Unit Converter',
    description: 'Smart unit converter application with multiple conversion types and intuitive interface',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Youssef-Mansour854/unit-converter',
    demo: 'https://youssef-mansour854.github.io/unit-converter/',
    icon: Terminal
  },
  {
    title: 'Todo List',
    description: 'Feature-rich todo list application with local storage and task management',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Youssef-Mansour854/to-do-list',
    demo: 'https://youssef-mansour854.github.io/to-do-list/',
    icon: FileCode2
  },
  {
    title: 'Weather App',
    description: 'Weather application providing real-time weather information and forecasts',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Youssef-Mansour854/weather-app',
    demo: 'https://youssef-mansour854.github.io/weather-app/',
    icon: Cloud
  },
  {
    title: 'Daniels Portfolio',
    description: 'Responsive portfolio website built with modern design principles',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Youssef-Mansour854/Daniels',
    demo: 'https://youssef-mansour854.github.io/Daniels/',
    icon: User
  },
  {
    title: 'Login System',
    description: 'Secure user authentication system with modern UI',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Youssef-Mansour854/login-system',
    demo: 'https://youssef-mansour854.github.io/login-system/',
    icon: Code2
  },
  {
    title: 'Bookmaker',
    description: 'Interactive bookmaker platform with Bootstrap styling',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Youssef-Mansour854/Bookmaker',
    demo: 'https://youssef-mansour854.github.io/Bookmaker/',
    icon: BookOpen
  },
  {
    title: 'Devfolio',
    description: 'Professional developer portfolio template with Bootstrap',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Youssef-Mansour854/Devfolio',
    demo: 'https://youssef-mansour854.github.io/Devfolio/',
    icon: Code2
  },
  {
    title: 'Quote Generator',
    description: 'Random quote generator with beautiful UI and animations',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Youssef-Mansour854/Quote-Generator',
    demo: 'https://youssef-mansour854.github.io/Quote-Generator/',
    icon: Quote
  },
  {
    title: 'Food Lover',
    description: 'Restaurant website with modern design and responsive layout',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Youssef-Mansour854/food-lover',
    demo: 'https://youssef-mansour854.github.io/food-lover/',
    icon: Utensils
  }
];