import React, { useState, useEffect } from 'react';
import { apiClient } from '../api/client';
import DeveloperSelector from '../components/DeveloperSelector';
import MetricCard from '../components/MetricCard';
import PatternBadge from '../components/PatternBadge';
import InsightPanel from '../components/InsightPanel';
import DrillDown from '../components/DrillDown';
import MetricRadar from '../components/MetricRadar';
import { ServerCog, AppWindow, Smartphone, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ICView() {
  const [developers, setDevelopers] = useState([]);
  const [months, setMonths] = useState([]);
  const [selectedDevId, setSelectedDevId] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  
  const [metricsData, setMetricsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInitial() {
      try {
        const [devsRes, monthsRes] = await Promise.all([
          apiClient.get('/developers'),
          apiClient.get('/months')
        ]);
        setDevelopers(devsRes.data);
        setMonths(monthsRes.data);
        if (devsRes.data.length > 0) setSelectedDevId(devsRes.data[0].developer_id);
        if (monthsRes.data.length > 0) setSelectedMonth(monthsRes.data[0]);
      } catch (err) {
        console.error("Failed to load initial data", err);
      }
    }
    loadInitial();
  }, []);

  useEffect(() => {
    if (!selectedDevId || !selectedMonth) return;
    async function loadMetrics() {
      setLoading(true);
      try {
        const res = await apiClient.get('/metrics', {
          params: { developerId: selectedDevId, month: selectedMonth }
        });
        setMetricsData(res.data);
      } catch (err) {
        console.error("Failed to load metrics", err);
      } finally {
        setLoading(false);
      }
    }
    loadMetrics();
  }, [selectedDevId, selectedMonth]);

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-white transition-colors">
            Performance Workspace
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Analyze engineering delivery and quality patterns
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <DeveloperSelector 
            items={developers.map(d => ({id: d.developer_id, name: d.developer_name}))}
            selectedId={selectedDevId}
            onSelectId={setSelectedDevId}
            months={months}
            selectedMonth={selectedMonth}
            onSelectMonth={setSelectedMonth}
          />
        </div>
      </header>

      {metricsData && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Main Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetricCard title="Lead Time" value={metricsData.metrics.avgLeadTimeDays} unit="days" type="leadTime" />
              <MetricCard title="Cycle Time" value={metricsData.metrics.avgCycleTimeDays} unit="days" type="cycleTime" />
              <MetricCard title="PR Throughput" value={metricsData.metrics.prThroughput} type="prCount" />
              <MetricCard title="Bug Rate" value={metricsData.metrics.bugRatePct} unit="%" type="bugRate" />
            </div>

            <InsightPanel 
              interpretation={metricsData.interpretation} 
              nextSteps={metricsData.nextSteps} 
            />
          </div>

          <div className="space-y-8">
            {/* Sidebar Profile Card */}
            <div className="glass-panel rounded-3xl p-8 space-y-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-indigo-500/20">
                  {metricsData.developer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{metricsData.developer.name}</h2>
                  <p className="text-indigo-500 font-bold text-xs uppercase tracking-widest mt-1">{metricsData.developer.level}</p>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                <ProfileItem icon={<User size={16} />} label="Team" value={metricsData.developer.team} />
                <ProfileItem icon={<Calendar size={16} />} label="Analysis Period" value={metricsData.month} />
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Holistic Profile</h3>
                <MetricRadar metrics={metricsData.metrics} />
              </div>
            </div>

            <PatternBadge pattern={metricsData.pattern} />
            <DrillDown detail={metricsData.detail} />
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileItem({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 text-slate-500">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-bold text-slate-900 dark:text-slate-200">{value}</span>
    </div>
  );
}
