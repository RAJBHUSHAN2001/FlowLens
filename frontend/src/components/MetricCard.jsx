import React from 'react';
import { motion } from 'framer-motion';
import { thresholds } from '../utils/thresholds';
import { Timer, Clock, GitMerge, Rocket, Bug } from 'lucide-react';

const iconMap = {
  leadTime: <Timer className="w-4 h-4" />,
  cycleTime: <Clock className="w-4 h-4" />,
  prCount: <GitMerge className="w-4 h-4" />,
  deployFreq: <Rocket className="w-4 h-4" />,
  bugRate: <Bug className="w-4 h-4" />
};

export default function MetricCard({ title, value, unit, type, description }) {
  let color = "slate";
  if (thresholds[type]) {
    const v = parseFloat(value);
    if (thresholds[type].green(v)) color = "emerald";
    else if (thresholds[type].amber(v)) color = "amber";
    else if (thresholds[type].red(v)) color = "rose";
  }

  const colors = {
    slate: "text-slate-500 bg-slate-500/10 border-slate-500/20",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    rose: "text-rose-500 bg-rose-500/10 border-rose-500/20"
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="glass-panel rounded-3xl p-6 relative overflow-hidden group hover-glow"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full blur-3xl opacity-20 bg-${color}-500`} />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`p-2.5 rounded-2xl ${colors[color]} border`}>
          {iconMap[type]}
        </div>
        <div className="flex gap-1">
          {[1,2,3].map(i => (
            <div key={i} className={`w-1 h-${i*2} rounded-full bg-${color}-500/30`} />
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold font-heading text-slate-900 dark:text-white">
            {value}
          </span>
          <span className="text-sm font-semibold text-slate-500">{unit}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <div className="flex-1 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            className={`h-full bg-${color}-500`}
          />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
          Target Analysis
        </span>
      </div>
    </motion.div>
  );
}
