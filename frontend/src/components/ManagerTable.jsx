import React, { useState } from 'react';
import { Activity, Copy, Check } from 'lucide-react';

function MiniBadge({ pattern }) {
  let color = "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/50";
  let dotColor = "bg-slate-400 dark:bg-slate-500";
  
  if (pattern === "Healthy flow") {
    color = "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30";
    dotColor = "bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_8px_rgba(16,185,129,0.8)]";
  } else if (pattern === "Quality watch") {
    color = "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/30";
    dotColor = "bg-amber-500 dark:bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)] dark:shadow-[0_0_8px_rgba(245,158,11,0.8)]";
  } else if (pattern === "Needs review") {
    color = "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/30";
    dotColor = "bg-orange-500 dark:bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.5)] dark:shadow-[0_0_8px_rgba(249,115,22,0.8)]";
  } else if (pattern === "Watch bottlenecks") {
    color = "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/30";
    dotColor = "bg-rose-500 dark:bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.5)] dark:shadow-[0_0_8px_rgba(244,63,94,0.8)]";
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${color}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotColor} animate-pulse-glow`}></span>
      {pattern}
    </span>
  );
}

export default function ManagerTable({ teamRows, teamAvg }) {
  const [copiedId, setCopiedId] = useState(null);

  const copyRowData = (row) => {
    const text = `${row.developer_name} | LT: ${row.avgLeadTimeDays.toFixed(2)}d | CT: ${row.avgCycleTimeDays.toFixed(2)}d | PRs: ${row.prThroughput} | Deploys: ${row.deploymentFrequency} | Bug Rate: ${row.bugRatePct}% | Pattern: ${row.pattern}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(row.developer_id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden mt-6">
      <div className="bg-indigo-50 dark:bg-indigo-500/10 border-b border-indigo-100 dark:border-indigo-500/20 p-5 flex items-center space-x-3 transition-colors">
        <Activity className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 font-heading text-lg">Team Performance Overview</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 transition-colors">
          <thead className="bg-slate-50 dark:bg-slate-900/50 transition-colors">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Developer</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Level</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lead Time</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cycle Time</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">PRs</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Deploys</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bug Rate</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pattern</th>
              <th className="px-4 py-4 text-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Copy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 transition-colors">
            {teamRows.map((row) => (
              <tr key={row.developer_id} className={`hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group ${
                row.pattern === 'Quality watch' || row.pattern === 'Watch bottlenecks' ? 'bg-amber-50/50 dark:bg-amber-900/10' : ''
              }`}>
                <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-200 transition-colors">{row.developer_name}</td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 transition-colors">
                  <span className="px-2 py-1 rounded bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-xs shadow-sm transition-colors">
                    {row.level}
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-right text-slate-900 dark:text-slate-200 font-heading font-medium transition-colors">{row.avgLeadTimeDays.toFixed(2)}d</td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-right text-slate-900 dark:text-slate-200 font-heading font-medium transition-colors">{row.avgCycleTimeDays.toFixed(2)}d</td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-right text-slate-600 dark:text-slate-400 font-heading transition-colors">{row.prThroughput}</td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-right text-slate-600 dark:text-slate-400 font-heading transition-colors">{row.deploymentFrequency}</td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-right text-slate-900 dark:text-slate-200 font-heading font-medium transition-colors">{row.bugRatePct}%</td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 transition-colors">
                  <MiniBadge pattern={row.pattern} />
                </td>
                <td className="px-4 py-5 whitespace-nowrap text-center">
                  <button 
                    onClick={() => copyRowData(row)}
                    className="p-1.5 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:text-indigo-400 dark:hover:bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
                    title="Copy row data"
                  >
                    {copiedId === row.developer_id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-indigo-50 dark:bg-indigo-900/20 border-t border-indigo-100 dark:border-indigo-500/30 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors">
            <tr>
              <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-indigo-900 dark:text-indigo-200 transition-colors" colSpan="2">Team Average</td>
              <td className="px-6 py-5 whitespace-nowrap text-sm text-right font-bold text-indigo-700 dark:text-indigo-300 font-heading transition-colors">{teamAvg.avgLeadTimeDays.toFixed(2)}d</td>
              <td className="px-6 py-5 whitespace-nowrap text-sm text-right font-bold text-indigo-700 dark:text-indigo-300 font-heading transition-colors">{teamAvg.avgCycleTimeDays.toFixed(2)}d</td>
              <td className="px-6 py-5 whitespace-nowrap text-sm text-right font-bold text-indigo-400 dark:text-indigo-400/70 font-heading transition-colors">-</td>
              <td className="px-6 py-5 whitespace-nowrap text-sm text-right font-bold text-indigo-400 dark:text-indigo-400/70 font-heading transition-colors">-</td>
              <td className="px-6 py-5 whitespace-nowrap text-sm text-right font-bold text-indigo-700 dark:text-indigo-300 font-heading transition-colors">{teamAvg.avgBugRatePct}%</td>
              <td className="px-6 py-5 whitespace-nowrap text-sm text-indigo-400 dark:text-indigo-400/70" colSpan="2">-</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
