import React from 'react';
import { ShieldCheck, AlertCircle, Search, Eye } from 'lucide-react';

export default function PatternBadge({ pattern }) {
  const configs = {
    "Healthy flow": {
      color: "emerald",
      icon: <ShieldCheck className="w-5 h-5" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-500"
    },
    "Quality watch": {
      color: "amber",
      icon: <AlertCircle className="w-5 h-5" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-500"
    },
    "Needs review": {
      color: "orange",
      icon: <Search className="w-5 h-5" />,
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      text: "text-orange-500"
    },
    "Watch bottlenecks": {
      color: "rose",
      icon: <Eye className="w-5 h-5" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      text: "text-rose-500"
    }
  };

  const config = configs[pattern] || configs["Watch bottlenecks"];

  return (
    <div className={`glass-panel rounded-2xl p-4 flex items-center gap-4 border ${config.border} ${config.bg}`}>
      <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm ${config.text}`}>
        {config.icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Status Analysis</p>
        <h2 className={`font-bold text-lg font-heading ${config.text}`}>{pattern}</h2>
      </div>
    </div>
  );
}
