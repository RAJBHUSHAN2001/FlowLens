import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Bug, FileCode, Clock } from 'lucide-react';

export default function DrillDown({ detail }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!detail) return null;

  return (
    <div className="mt-8 glass-panel rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors focus:outline-none"
      >
        <span className="font-semibold text-slate-700 dark:text-slate-200 transition-colors">View detailed breakdown</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors" /> : <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors" />}
      </button>
      
      {isOpen && (
        <div className="p-6 border-t border-slate-200 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/30 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none transition-colors">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20 dark:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-colors">
                <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors">Avg Review Wait</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-200 font-heading transition-colors">{detail.avgReviewWaitHours} hrs</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none transition-colors">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20 dark:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-colors">
                <FileCode className="h-5 w-5 text-indigo-600 dark:text-indigo-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors">Avg PR Size</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-200 font-heading transition-colors">{detail.avgLinesChanged} lines</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none transition-colors">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20 dark:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-colors">
                <Bug className="h-5 w-5 text-indigo-600 dark:text-indigo-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors">Issues Done</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-200 font-heading transition-colors">{detail.issuesDone}</p>
              </div>
            </div>
          </div>

          {detail.escapedBugs && detail.escapedBugs.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 border-b border-slate-200 dark:border-slate-700/50 pb-3 uppercase tracking-wider transition-colors">Escaped Bugs</h4>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700/50 transition-colors shadow-sm dark:shadow-none">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 transition-colors">
                  <thead className="bg-slate-100 dark:bg-slate-900/60 transition-colors">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bug ID</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Severity</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Root Cause</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900/20 transition-colors">
                    {detail.escapedBugs.map(bug => (
                      <tr key={bug.bug_id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-200 font-heading transition-colors">{bug.bug_id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 transition-colors">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-semibold transition-colors ${
                            bug.severity === 'high' ? 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/30' :
                            bug.severity === 'medium' ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30' :
                            'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30'
                          }`}>
                            {bug.severity}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 capitalize transition-colors">{bug.root_cause_bucket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
