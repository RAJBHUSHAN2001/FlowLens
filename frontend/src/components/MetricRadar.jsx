import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

export default function MetricRadar({ metrics }) {
  // Normalize metrics for the radar chart (scale 0-10)
  const data = [
    { subject: 'Lead Time', value: Math.max(0, 10 - metrics.avgLeadTimeDays) },
    { subject: 'Cycle Time', value: Math.max(0, 10 - metrics.avgCycleTimeDays) },
    { subject: 'Throughput', value: Math.min(10, metrics.prThroughput * 2) },
    { subject: 'Deploys', value: Math.min(10, metrics.deploymentFrequency * 2) },
    { subject: 'Quality', value: Math.max(0, 10 - (metrics.bugRatePct / 10)) },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#94a3b8" strokeOpacity={0.2} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
