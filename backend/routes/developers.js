import express from 'express';
import { developers } from '../data/developers.js';

const router = express.Router();

router.get('/', (req, res) => {
  const devList = developers.map(d => ({
    developer_id: d.developer_id,
    developer_name: d.developer_name,
    team_name: d.team_name,
    level: d.level,
    manager_id: d.manager_id,
    manager_name: d.manager_name
  }));
  res.json(devList);
});

export default router;
