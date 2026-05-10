import express from 'express';
import { developers } from '../data/developers.js';
import { computeMetricsForDeveloper } from '../utils/computeMetrics.js';
import { patternContent } from '../utils/patternContent.js';

const router = express.Router();

router.get('/', (req, res) => {
  const { developerId, month } = req.query;

  if (!developerId || !month) {
    return res.status(400).json({ error: 'Missing developerId or month' });
  }

  const dev = developers.find(d => d.developer_id === developerId);
  if (!dev) {
    return res.status(404).json({ error: 'Developer not found' });
  }

  const { metrics, pattern, detail } = computeMetricsForDeveloper(developerId, month);
  const content = patternContent[pattern] || patternContent["Watch bottlenecks"];

  res.json({
    developer: {
      id: dev.developer_id,
      name: dev.developer_name,
      team: dev.team_name,
      level: dev.level,
      serviceType: dev.service_type,
      managerName: dev.manager_name
    },
    month,
    metrics,
    pattern,
    interpretation: content.interpretation,
    nextSteps: content.nextSteps,
    detail
  });
});

export default router;
