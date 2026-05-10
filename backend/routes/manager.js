import express from 'express';
import { developers } from '../data/developers.js';
import { computeMetricsForDeveloper } from '../utils/computeMetrics.js';

const router = express.Router();

router.get('/', (req, res) => {
  const { managerId, month } = req.query;

  if (!managerId || !month) {
    return res.status(400).json({ error: 'Missing managerId or month' });
  }

  const teamDevs = developers.filter(d => d.manager_id === managerId);
  if (teamDevs.length === 0) {
    return res.status(404).json({ error: 'Manager not found or has no team' });
  }

  const managerName = teamDevs[0].manager_name;

  let totalLeadTime = 0;
  let totalCycleTime = 0;
  let totalBugRatePct = 0;
  let leadTimeCount = 0;
  let cycleTimeCount = 0;
  
  const teamRows = teamDevs.map(dev => {
    const { metrics, pattern } = computeMetricsForDeveloper(dev.developer_id, month);
    
    if (metrics.deploymentFrequency > 0) {
      totalLeadTime += metrics.avgLeadTimeDays;
      leadTimeCount++;
    }
    
    if (metrics.avgCycleTimeDays > 0) {
      totalCycleTime += metrics.avgCycleTimeDays;
      cycleTimeCount++;
    }

    totalBugRatePct += metrics.bugRatePct;

    return {
      developer_id: dev.developer_id,
      developer_name: dev.developer_name,
      level: dev.level,
      avgLeadTimeDays: metrics.avgLeadTimeDays,
      avgCycleTimeDays: metrics.avgCycleTimeDays,
      prThroughput: metrics.prThroughput,
      deploymentFrequency: metrics.deploymentFrequency,
      bugRatePct: metrics.bugRatePct,
      pattern
    };
  });

  const teamAvg = {
    avgLeadTimeDays: leadTimeCount > 0 ? Math.round((totalLeadTime / leadTimeCount) * 100) / 100 : 0,
    avgCycleTimeDays: cycleTimeCount > 0 ? Math.round((totalCycleTime / cycleTimeCount) * 100) / 100 : 0,
    avgBugRatePct: Math.round(totalBugRatePct / teamRows.length)
  };

  res.json({
    manager: {
      id: managerId,
      name: managerName
    },
    month,
    teamRows,
    teamAvg
  });
});

export default router;
