import React, { useState, useEffect } from 'react';
import { apiClient } from '../api/client';
import DeveloperSelector from '../components/DeveloperSelector';
import ManagerTable from '../components/ManagerTable';
import { Users, TrendingUp, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ManagerView() {
  const [managers, setManagers] = useState([]);
  const [months, setMonths] = useState([]);
  const [selectedManagerId, setSelectedManagerId] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  
  const [managerData, setManagerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInitial() {
      try {
        const [devsRes, monthsRes] = await Promise.all([
          apiClient.get('/developers'),
          apiClient.get('/months')
        ]);
        const uniqueManagers = [];
        const managerMap = new Set();
        devsRes.data.forEach(d => {
          if (!managerMap.has(d.manager_id)) {
            managerMap.add(d.manager_id);
            uniqueManagers.push({ id: d.manager_id, name: d.manager_name });
          }
        });
        setManagers(uniqueManagers);
        setMonths(monthsRes.data);
        if (uniqueManagers.length > 0) setSelectedManagerId(uniqueManagers[0].id);
        if (monthsRes.data.length > 0) setSelectedMonth(monthsRes.data[0]);
      } catch (err) {
        console.error("Failed to load initial data", err);
      }
    }
    loadInitial();
  }, []);

  useEffect(() => {
    if (!selectedManagerId || !selectedMonth) return;
    async function loadManagerData() {
      setLoading(true);
      try {
        const res = await apiClient.get('/manager', {
          params: { managerId: selectedManagerId, month: selectedMonth }
        });
        setManagerData(res.data);
      } catch (err) {
        console.error("Failed to load manager metrics", err);
      } finally {
        setLoading(false);
      }
    }
    loadManagerData();
  }, [selectedManagerId, selectedMonth]);

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-white transition-colors">
            Team Intelligence
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Strategic overview of engineering delivery across the team
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <DeveloperSelector 
            items={managers}
            selectedId={selectedManagerId}
            onSelectId={setSelectedManagerId}
            months={months}
            selectedMonth={selectedMonth}
            onSelectMonth={setSelectedMonth}
            isManager={true}
          />
        </div>
      </header>

      {managerData && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              label="Active Developers" 
              value={managerData.teamRows.length} 
              icon={<Users size={20} />} 
              color="indigo" 
            />
            <StatCard 
              label="Avg Lead Time" 
              value={`${managerData.teamAvg.avgLeadTimeDays}d`} 
              icon={<TrendingUp size={20} />} 
              color="emerald" 
            />
            <StatCard 
              label="Avg Bug Rate" 
              value={`${managerData.teamAvg.avgBugRatePct}%`} 
              icon={<BarChart3 size={20} />} 
              color="amber" 
            />
          </div>

          <ManagerTable teamRows={managerData.teamRows} teamAvg={managerData.teamAvg} />
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, icon, color }) {
  const colors = {
    indigo: "bg-indigo-500 text-white shadow-indigo-500/20",
    emerald: "bg-emerald-500 text-white shadow-emerald-500/20",
    amber: "bg-amber-500 text-white shadow-amber-500/20"
  };

  return (
    <div className="glass-panel rounded-3xl p-6 flex items-center gap-6">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">{label}</p>
        <p className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">{value}</p>
      </div>
    </div>
  );
}
