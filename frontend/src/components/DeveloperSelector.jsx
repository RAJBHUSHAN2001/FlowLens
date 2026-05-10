import React from 'react';
import { User, Calendar, ChevronDown } from 'lucide-react';

export default function DeveloperSelector({ 
  items, 
  selectedId, 
  onSelectId, 
  months, 
  selectedMonth, 
  onSelectMonth,
  isManager = false
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
          <User size={16} />
        </div>
        <select 
          value={selectedId}
          onChange={(e) => onSelectId(e.target.value)}
          className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 pl-10 pr-10 text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all cursor-pointer hover:border-indigo-500/50"
        >
          {items.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
          <Calendar size={16} />
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => onSelectMonth(e.target.value)}
          className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 pl-10 pr-10 text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all cursor-pointer hover:border-indigo-500/50"
        >
          {months.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
