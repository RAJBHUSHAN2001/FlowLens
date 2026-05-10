import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // Hardcoded as per specification
  res.json(["2026-03", "2026-04"]);
});

export default router;
