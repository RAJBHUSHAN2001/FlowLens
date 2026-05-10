import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Moon, 
  Sun, 
  Settings, 
  HelpCircle,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <aside className="w-64 glass-panel border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen sticky top-0 z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <Activity className="text-white w-6 h-6" />
        </div>
        <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          FlowLens
        </span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem 
          to="/" 
          icon={<LayoutDashboard size={20} />} 
          label="Executive View" 
        />
        <NavItem 
          to="/manager" 
          icon={<Users size={20} />} 
          label="Team Analytics" 
        />
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="text-sm font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        
        <div className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-500">
          <Settings size={18} />
          <span className="text-xs font-medium">Settings</span>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => `
        flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group
        ${isActive 
          ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-sm' 
          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
        }
      `}
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
      <motion.div 
        layoutId="activeTab"
        className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 hidden active-indicator"
      />
    </NavLink>
  );
}
