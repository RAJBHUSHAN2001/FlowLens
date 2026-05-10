import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function InsightPanel({ interpretation, nextSteps }) {
  return (
    <div className="glass-panel rounded-3xl overflow-hidden border-indigo-500/20 shadow-xl shadow-indigo-500/5">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold font-heading">Metric Intelligence</h3>
            <p className="text-indigo-100 text-xs">Automated performance interpretation</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-1">
            {[1,2,3,4].map(i => (
              <motion.div
                key={i}
                animate={{ height: [8, 16, 8] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                className="w-1 bg-white/30 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Observation
          </h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {interpretation}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Strategic Roadmap
          </h4>
          <ul className="space-y-3">
            {nextSteps.map((step, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-colors hover:border-indigo-500/30 group"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {step}
                </span>
                <ArrowRight className="ml-auto w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-all transform group-hover:translate-x-1" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
