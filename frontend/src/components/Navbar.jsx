import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, LayoutDashboard, Users, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isManagerView = location.pathname === '/manager';

  const [isDark, setIsDark] = useState(false);

  // Initialize theme from HTML class
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className="glass-nav sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl border border-indigo-200 dark:border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <Link to="/" className="text-2xl font-bold tracking-tight font-heading bg-gradient-to-r from-slate-900 via-indigo-700 to-indigo-500 dark:from-white dark:via-indigo-100 dark:to-indigo-300 bg-clip-text text-transparent transition-all">
              FlowLens
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="flex bg-slate-100 dark:bg-slate-900/50 p-1 rounded-lg border border-slate-200 dark:border-slate-700/50 transition-colors">
              <Link 
                to="/" 
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${!isManagerView ? 'bg-white text-indigo-700 shadow-sm dark:bg-indigo-500/20 dark:text-indigo-300 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50'}`}
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                IC View
              </Link>
              <Link 
                to="/manager" 
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isManagerView ? 'bg-white text-indigo-700 shadow-sm dark:bg-indigo-500/20 dark:text-indigo-300 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50'}`}
              >
                <Users className="h-4 w-4 mr-2" />
                Manager View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
