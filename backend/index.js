import express from 'express';
import cors from 'cors';
import metricsRouter from './routes/metrics.js';
import managerRouter from './routes/manager.js';
import developersRouter from './routes/developers.js';
import monthsRouter from './routes/months.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/metrics', metricsRouter);
app.use('/api/manager', managerRouter);
app.use('/api/developers', developersRouter);
app.use('/api/months', monthsRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`FlowLens backend running on port ${PORT}`);
});
