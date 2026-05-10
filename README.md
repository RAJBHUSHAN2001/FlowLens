# FlowLens — Developer Productivity MVP

A small full-stack app that helps developers move from raw metrics to understanding and action.

## The problem
Developers can already see metrics like lead time, cycle time, and bug rate. The problem is that numbers alone don't explain what's causing a slow month or a quality issue — and they don't suggest what to do next. FlowLens interprets those numbers into a pattern and gives specific next steps.

## What it does
- **IC View:** Select a developer and month → see 5 computed metrics, a pattern classification (Healthy flow / Quality watch / Needs review / Watch bottlenecks), a plain-English interpretation, and 1–2 actionable next steps
- **Manager View:** Select a manager and month → see a team summary table with averages per developer and a team aggregate row

## The 5 metrics
| Metric | Definition |
|--------|-----------|
| Lead Time for Changes | Avg days from PR opened to successful prod deployment |
| Cycle Time | Avg days from issue In Progress to Done |
| PR Throughput | Count of merged PRs in the month |
| Deployment Frequency | Count of successful prod deployments in the month |
| Bug Rate | Escaped prod bugs ÷ issues completed in the month |

## Tech stack
- **Frontend:** React (Vite) + Tailwind CSS
- **Backend:** Node.js + Express
- **Data:** In-memory JSON arrays from the assignment workbook

## Running the project

You can now run both the frontend and backend concurrently from the root directory.

### Quick Start
```bash
# 1. Install dependencies for root, backend, and frontend
npm run install:all

# 2. Run the full stack
npm run dev
```

*The backend server will start on `http://localhost:3001` and the React frontend will run on `http://localhost:3000`.*

## Data source
All data is derived from the intern assignment workbook (8 developers, 32 Jira issues, 32 PRs, 32 deployments, 6 bug reports across March–April 2026).
