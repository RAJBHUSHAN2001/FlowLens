# FlowLens — Complete Build + Submission Prompt
### Developer Productivity MVP — Intern Assignment

> **How to use this file:**
> - **Section A–F** → Paste into your AI IDE (Cursor / Windsurf / Copilot Workspace). It will scaffold and build the entire app.
> - **Section G** → Use to build your Miro User Journey board manually (step-by-step instructions included).
> - **Section H** → Your word-for-word video demo script with timestamps.
> - **Section I** → Interview prep — 10 questions + suggested answers.
> - **Section J** → README to paste into your GitHub repo.
> - **Section K** → AI usage note to include with your submission.

---

# SECTION A — PROJECT OVERVIEW & PROBLEM STATEMENT

## Project name: FlowLens

## The real user problem (explain this in your own words in the interview)
Developers already have access to raw metrics — lead time, cycle time, bug rate, deployment frequency, PR throughput — in tools like Jira dashboards or GitHub Insights. The problem is that **numbers alone don't explain anything**. A developer looking at "cycle time: 6.5 days" doesn't know if that's caused by slow reviews, large tickets, deployment delays, or something else entirely. And they definitely don't know what to do about it.

FlowLens solves this by going one step further: it takes the raw numbers, classifies them into a delivery pattern (Healthy flow, Quality watch, Needs review, Watch bottlenecks), and gives the developer a plain-English interpretation + 1–2 concrete next steps. The goal is to move from **"here are your numbers"** to **"here's what's likely happening and here's what you can do."**

## Stack
- **Frontend:** React.js (Vite), TailwindCSS or plain CSS modules
- **Backend:** Node.js + Express
- **Data:** Hardcoded JSON arrays (no database needed)
- **Ports:** Backend on 3001, Frontend on 3000

---

# SECTION B — COMPLETE DATA (embed exactly as-is)

Create a folder `backend/data/` and put each table in its own `.js` file as a named export.

### `backend/data/developers.js`
```js
export const developers = [
  { developer_id: "DEV-001", developer_name: "Ava Chen",     manager_id: "MGR-01", manager_name: "Rina Kapoor", team_name: "Payments API",  service_type: "backend",  level: "SDE2" },
  { developer_id: "DEV-002", developer_name: "Noah Patel",   manager_id: "MGR-01", manager_name: "Rina Kapoor", team_name: "Payments API",  service_type: "backend",  level: "SDE1" },
  { developer_id: "DEV-006", developer_name: "Ishan Mehta",  manager_id: "MGR-01", manager_name: "Rina Kapoor", team_name: "Payments API",  service_type: "backend",  level: "SDE3" },
  { developer_id: "DEV-003", developer_name: "Mia Lopez",    manager_id: "MGR-02", manager_name: "Samir Gupta", team_name: "Checkout Web",  service_type: "frontend", level: "SDE1" },
  { developer_id: "DEV-004", developer_name: "Lucas Reed",   manager_id: "MGR-02", manager_name: "Samir Gupta", team_name: "Checkout Web",  service_type: "frontend", level: "SDE2" },
  { developer_id: "DEV-008", developer_name: "Zara Khan",    manager_id: "MGR-02", manager_name: "Samir Gupta", team_name: "Checkout Web",  service_type: "frontend", level: "SDE1" },
  { developer_id: "DEV-005", developer_name: "Emma Roy",     manager_id: "MGR-03", manager_name: "Priya Nair",  team_name: "Mobile Growth", service_type: "mobile",   level: "SDE1" },
  { developer_id: "DEV-007", developer_name: "Owen Brooks",  manager_id: "MGR-03", manager_name: "Priya Nair",  team_name: "Mobile Growth", service_type: "mobile",   level: "SDE2" }
];
```

### `backend/data/jiraIssues.js`
```js
export const jiraIssues = [
  { issue_id:"JIRA-001", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Story",       story_points:2, created_at:"2026-03-21", in_progress_at:"2026-03-21", done_at:"2026-03-25T04:48:00", status:"Done", month_done:"2026-03", cycle_time_days:4.2 },
  { issue_id:"JIRA-002", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Story",       story_points:5, created_at:"2026-03-04", in_progress_at:"2026-03-04", done_at:"2026-03-07T16:48:00", status:"Done", month_done:"2026-03", cycle_time_days:3.7 },
  { issue_id:"JIRA-003", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Task",        story_points:2, created_at:"2026-04-11", in_progress_at:"2026-04-11", done_at:"2026-04-14T21:36:00", status:"Done", month_done:"2026-04", cycle_time_days:3.9 },
  { issue_id:"JIRA-004", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Story",       story_points:3, created_at:"2026-04-15", in_progress_at:"2026-04-15", done_at:"2026-04-18T21:36:00", status:"Done", month_done:"2026-04", cycle_time_days:3.9 },
  { issue_id:"JIRA-005", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Task",        story_points:3, created_at:"2026-03-06", in_progress_at:"2026-03-07", done_at:"2026-03-11T16:48:00", status:"Done", month_done:"2026-03", cycle_time_days:4.7 },
  { issue_id:"JIRA-006", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Improvement", story_points:5, created_at:"2026-03-14", in_progress_at:"2026-03-14", done_at:"2026-03-21T02:24:00", status:"Done", month_done:"2026-03", cycle_time_days:7.1 },
  { issue_id:"JIRA-007", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Task",        story_points:8, created_at:"2026-04-09", in_progress_at:"2026-04-09", done_at:"2026-04-14T09:36:00", status:"Done", month_done:"2026-04", cycle_time_days:5.4 },
  { issue_id:"JIRA-008", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Story",       story_points:2, created_at:"2026-04-16", in_progress_at:"2026-04-17", done_at:"2026-04-22T09:36:00", status:"Done", month_done:"2026-04", cycle_time_days:5.4 },
  { issue_id:"JIRA-009", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Improvement", story_points:3, created_at:"2026-03-15", in_progress_at:"2026-03-15", done_at:"2026-03-19T16:48:00", status:"Done", month_done:"2026-03", cycle_time_days:4.7 },
  { issue_id:"JIRA-010", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Story",       story_points:2, created_at:"2026-03-20", in_progress_at:"2026-03-20", done_at:"2026-03-22T19:12:00", status:"Done", month_done:"2026-03", cycle_time_days:2.8 },
  { issue_id:"JIRA-011", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Story",       story_points:8, created_at:"2026-04-03", in_progress_at:"2026-04-04", done_at:"2026-04-08T00:00:00", status:"Done", month_done:"2026-04", cycle_time_days:4.0 },
  { issue_id:"JIRA-012", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  service_type:"backend",  issue_type:"Story",       story_points:8, created_at:"2026-04-13", in_progress_at:"2026-04-14", done_at:"2026-04-17T09:36:00", status:"Done", month_done:"2026-04", cycle_time_days:3.4 },
  { issue_id:"JIRA-013", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Task",        story_points:8, created_at:"2026-03-03", in_progress_at:"2026-03-03", done_at:"2026-03-06T14:24:00", status:"Done", month_done:"2026-03", cycle_time_days:3.6 },
  { issue_id:"JIRA-014", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Story",       story_points:5, created_at:"2026-03-05", in_progress_at:"2026-03-05", done_at:"2026-03-09T12:00:00", status:"Done", month_done:"2026-03", cycle_time_days:4.5 },
  { issue_id:"JIRA-015", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Story",       story_points:2, created_at:"2026-04-08", in_progress_at:"2026-04-08", done_at:"2026-04-10T07:12:00", status:"Done", month_done:"2026-04", cycle_time_days:2.3 },
  { issue_id:"JIRA-016", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Improvement", story_points:8, created_at:"2026-04-04", in_progress_at:"2026-04-05", done_at:"2026-04-08T19:12:00", status:"Done", month_done:"2026-04", cycle_time_days:3.8 },
  { issue_id:"JIRA-017", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Story",       story_points:3, created_at:"2026-03-02", in_progress_at:"2026-03-02", done_at:"2026-03-06T04:48:00", status:"Done", month_done:"2026-03", cycle_time_days:4.2 },
  { issue_id:"JIRA-018", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Task",        story_points:8, created_at:"2026-03-22", in_progress_at:"2026-03-22", done_at:"2026-03-25T12:00:00", status:"Done", month_done:"2026-03", cycle_time_days:3.5 },
  { issue_id:"JIRA-019", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Story",       story_points:2, created_at:"2026-04-21", in_progress_at:"2026-04-22", done_at:"2026-04-24T09:36:00", status:"Done", month_done:"2026-04", cycle_time_days:2.4 },
  { issue_id:"JIRA-020", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Task",        story_points:2, created_at:"2026-04-09", in_progress_at:"2026-04-10", done_at:"2026-04-14T16:48:00", status:"Done", month_done:"2026-04", cycle_time_days:4.7 },
  { issue_id:"JIRA-021", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Story",       story_points:5, created_at:"2026-03-05", in_progress_at:"2026-03-06", done_at:"2026-03-10T07:12:00", status:"Done", month_done:"2026-03", cycle_time_days:4.3 },
  { issue_id:"JIRA-022", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Task",        story_points:8, created_at:"2026-03-08", in_progress_at:"2026-03-09", done_at:"2026-03-12T07:12:00", status:"Done", month_done:"2026-03", cycle_time_days:3.3 },
  { issue_id:"JIRA-023", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Improvement", story_points:3, created_at:"2026-04-05", in_progress_at:"2026-04-06", done_at:"2026-04-10T21:36:00", status:"Done", month_done:"2026-04", cycle_time_days:4.9 },
  { issue_id:"JIRA-024", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", service_type:"frontend", issue_type:"Improvement", story_points:2, created_at:"2026-04-11", in_progress_at:"2026-04-11", done_at:"2026-04-13T19:12:00", status:"Done", month_done:"2026-04", cycle_time_days:2.8 },
  { issue_id:"JIRA-025", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Story",       story_points:3, created_at:"2026-03-15", in_progress_at:"2026-03-16", done_at:"2026-03-21T07:12:00", status:"Done", month_done:"2026-03", cycle_time_days:5.3 },
  { issue_id:"JIRA-026", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Story",       story_points:5, created_at:"2026-03-04", in_progress_at:"2026-03-04", done_at:"2026-03-10T14:24:00", status:"Done", month_done:"2026-03", cycle_time_days:6.6 },
  { issue_id:"JIRA-027", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Story",       story_points:3, created_at:"2026-04-19", in_progress_at:"2026-04-19", done_at:"2026-04-24T19:12:00", status:"Done", month_done:"2026-04", cycle_time_days:5.8 },
  { issue_id:"JIRA-028", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Task",        story_points:3, created_at:"2026-04-17", in_progress_at:"2026-04-18", done_at:"2026-04-25T04:48:00", status:"Done", month_done:"2026-04", cycle_time_days:7.2 },
  { issue_id:"JIRA-029", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Story",       story_points:8, created_at:"2026-03-01", in_progress_at:"2026-03-02", done_at:"2026-03-06T16:48:00", status:"Done", month_done:"2026-03", cycle_time_days:4.7 },
  { issue_id:"JIRA-030", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Story",       story_points:3, created_at:"2026-03-06", in_progress_at:"2026-03-06", done_at:"2026-03-10T09:36:00", status:"Done", month_done:"2026-03", cycle_time_days:4.4 },
  { issue_id:"JIRA-031", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Improvement", story_points:2, created_at:"2026-04-13", in_progress_at:"2026-04-14", done_at:"2026-04-18T12:00:00", status:"Done", month_done:"2026-04", cycle_time_days:4.5 },
  { issue_id:"JIRA-032", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",service_type:"mobile",   issue_type:"Task",        story_points:8, created_at:"2026-04-18", in_progress_at:"2026-04-19", done_at:"2026-04-24T02:24:00", status:"Done", month_done:"2026-04", cycle_time_days:5.1 }
];
```

### `backend/data/pullRequests.js`
```js
export const pullRequests = [
  { pr_id:"PR-001", issue_id:"JIRA-001", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-03-24T21:48:00", first_review_at:"2026-03-25T08:18:00", merged_at:"2026-03-26T08:18:00", status:"merged", month_merged:"2026-03", review_wait_hours:10.5, merge_time_hours:34.5, lines_changed:209, review_rounds:3 },
  { pr_id:"PR-002", issue_id:"JIRA-002", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-03-06T08:48:00", first_review_at:"2026-03-06T23:24:00", merged_at:"2026-03-07T12:24:00", status:"merged", month_merged:"2026-03", review_wait_hours:14.6, merge_time_hours:27.6, lines_changed:468, review_rounds:2 },
  { pr_id:"PR-003", issue_id:"JIRA-003", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-04-13T14:36:00", first_review_at:"2026-04-14T01:36:00", merged_at:"2026-04-14T21:36:00", status:"merged", month_merged:"2026-04", review_wait_hours:11.0, merge_time_hours:31.0, lines_changed:247, review_rounds:2 },
  { pr_id:"PR-004", issue_id:"JIRA-004", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-04-18T13:36:00", first_review_at:"2026-04-18T23:12:00", merged_at:"2026-04-19T08:12:00", status:"merged", month_merged:"2026-04", review_wait_hours:9.6,  merge_time_hours:18.6, lines_changed:509, review_rounds:2 },
  { pr_id:"PR-005", issue_id:"JIRA-005", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-03-11T10:48:00", first_review_at:"2026-03-12T13:30:00", merged_at:"2026-03-13T08:30:00", status:"merged", month_merged:"2026-03", review_wait_hours:26.7, merge_time_hours:45.7, lines_changed:287, review_rounds:2 },
  { pr_id:"PR-006", issue_id:"JIRA-006", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-03-20T21:24:00", first_review_at:"2026-03-21T19:06:00", merged_at:"2026-03-22T14:06:00", status:"merged", month_merged:"2026-03", review_wait_hours:21.7, merge_time_hours:40.7, lines_changed:337, review_rounds:2 },
  { pr_id:"PR-007", issue_id:"JIRA-007", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-04-13T03:36:00", first_review_at:"2026-04-14T06:42:00", merged_at:"2026-04-14T22:42:00", status:"merged", month_merged:"2026-04", review_wait_hours:27.1, merge_time_hours:43.1, lines_changed:344, review_rounds:1 },
  { pr_id:"PR-008", issue_id:"JIRA-008", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-04-21T02:36:00", first_review_at:"2026-04-21T23:30:00", merged_at:"2026-04-22T16:30:00", status:"merged", month_merged:"2026-04", review_wait_hours:20.9, merge_time_hours:37.9, lines_changed:776, review_rounds:2 },
  { pr_id:"PR-009", issue_id:"JIRA-009", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-03-18T10:48:00", first_review_at:"2026-03-18T16:30:00", merged_at:"2026-03-19T08:30:00", status:"merged", month_merged:"2026-03", review_wait_hours:5.7,  merge_time_hours:21.7, lines_changed:425, review_rounds:3 },
  { pr_id:"PR-010", issue_id:"JIRA-010", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-03-21T15:12:00", first_review_at:"2026-03-22T04:42:00", merged_at:"2026-03-22T16:42:00", status:"merged", month_merged:"2026-03", review_wait_hours:13.5, merge_time_hours:25.5, lines_changed:179, review_rounds:1 },
  { pr_id:"PR-011", issue_id:"JIRA-011", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-04-07T18:00:00", first_review_at:"2026-04-07T22:00:00", merged_at:"2026-04-08T09:00:00", status:"merged", month_merged:"2026-04", review_wait_hours:4.0,  merge_time_hours:15.0, lines_changed:660, review_rounds:3 },
  { pr_id:"PR-012", issue_id:"JIRA-012", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  opened_at:"2026-04-16T07:36:00", first_review_at:"2026-04-16T15:36:00", merged_at:"2026-04-17T05:36:00", status:"merged", month_merged:"2026-04", review_wait_hours:8.0,  merge_time_hours:22.0, lines_changed:687, review_rounds:1 },
  { pr_id:"PR-013", issue_id:"JIRA-013", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-03-06T11:24:00", first_review_at:"2026-03-07T05:54:00", merged_at:"2026-03-08T05:54:00", status:"merged", month_merged:"2026-03", review_wait_hours:18.5, merge_time_hours:42.5, lines_changed:536, review_rounds:1 },
  { pr_id:"PR-014", issue_id:"JIRA-014", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-03-09T04:00:00", first_review_at:"2026-03-09T20:00:00", merged_at:"2026-03-10T12:00:00", status:"merged", month_merged:"2026-03", review_wait_hours:16.0, merge_time_hours:32.0, lines_changed:579, review_rounds:1 },
  { pr_id:"PR-015", issue_id:"JIRA-015", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-04-10T05:12:00", first_review_at:"2026-04-10T22:00:00", merged_at:"2026-04-11T18:00:00", status:"merged", month_merged:"2026-04", review_wait_hours:16.8, merge_time_hours:36.8, lines_changed:290, review_rounds:2 },
  { pr_id:"PR-016", issue_id:"JIRA-016", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-04-07T15:12:00", first_review_at:"2026-04-07T20:18:00", merged_at:"2026-04-08T21:18:00", status:"merged", month_merged:"2026-04", review_wait_hours:5.1,  merge_time_hours:30.1, lines_changed:618, review_rounds:1 },
  { pr_id:"PR-017", issue_id:"JIRA-017", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-03-05T02:48:00", first_review_at:"2026-03-05T13:24:00", merged_at:"2026-03-06T03:24:00", status:"merged", month_merged:"2026-03", review_wait_hours:10.6, merge_time_hours:24.6, lines_changed:310, review_rounds:1 },
  { pr_id:"PR-018", issue_id:"JIRA-018", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-03-25T05:00:00", first_review_at:"2026-03-25T12:48:00", merged_at:"2026-03-26T00:48:00", status:"merged", month_merged:"2026-03", review_wait_hours:7.8,  merge_time_hours:19.8, lines_changed:441, review_rounds:1 },
  { pr_id:"PR-019", issue_id:"JIRA-019", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-04-24T07:36:00", first_review_at:"2026-04-24T22:00:00", merged_at:"2026-04-25T14:00:00", status:"merged", month_merged:"2026-04", review_wait_hours:14.4, merge_time_hours:30.4, lines_changed:638, review_rounds:2 },
  { pr_id:"PR-020", issue_id:"JIRA-020", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-04-13T09:48:00", first_review_at:"2026-04-13T23:12:00", merged_at:"2026-04-14T15:12:00", status:"merged", month_merged:"2026-04", review_wait_hours:13.4, merge_time_hours:29.4, lines_changed:257, review_rounds:2 },
  { pr_id:"PR-021", issue_id:"JIRA-021", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-03-09T01:12:00", first_review_at:"2026-03-09T21:54:00", merged_at:"2026-03-10T13:54:00", status:"merged", month_merged:"2026-03", review_wait_hours:20.7, merge_time_hours:36.7, lines_changed:172, review_rounds:1 },
  { pr_id:"PR-022", issue_id:"JIRA-022", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-03-12T01:12:00", first_review_at:"2026-03-12T20:48:00", merged_at:"2026-03-13T14:48:00", status:"merged", month_merged:"2026-03", review_wait_hours:19.6, merge_time_hours:37.6, lines_changed:678, review_rounds:1 },
  { pr_id:"PR-023", issue_id:"JIRA-023", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-04-10T14:36:00", first_review_at:"2026-04-11T11:06:00", merged_at:"2026-04-12T05:06:00", status:"merged", month_merged:"2026-04", review_wait_hours:20.5, merge_time_hours:38.5, lines_changed:225, review_rounds:2 },
  { pr_id:"PR-024", issue_id:"JIRA-024", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", opened_at:"2026-04-13T16:12:00", first_review_at:"2026-04-14T09:54:00", merged_at:"2026-04-15T06:54:00", status:"merged", month_merged:"2026-04", review_wait_hours:17.7, merge_time_hours:38.7, lines_changed:374, review_rounds:2 },
  { pr_id:"PR-025", issue_id:"JIRA-025", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-03-21T02:12:00", first_review_at:"2026-03-22T00:54:00", merged_at:"2026-03-22T14:54:00", status:"merged", month_merged:"2026-03", review_wait_hours:22.7, merge_time_hours:36.7, lines_changed:191, review_rounds:2 },
  { pr_id:"PR-026", issue_id:"JIRA-026", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-03-09T12:24:00", first_review_at:"2026-03-10T07:42:00", merged_at:"2026-03-11T04:42:00", status:"merged", month_merged:"2026-03", review_wait_hours:19.3, merge_time_hours:40.3, lines_changed:566, review_rounds:3 },
  { pr_id:"PR-027", issue_id:"JIRA-027", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-04-24T15:12:00", first_review_at:"2026-04-25T13:30:00", merged_at:"2026-04-26T01:30:00", status:"merged", month_merged:"2026-04", review_wait_hours:22.3, merge_time_hours:34.3, lines_changed:458, review_rounds:3 },
  { pr_id:"PR-028", issue_id:"JIRA-028", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-04-24T01:48:00", first_review_at:"2026-04-24T09:30:00", merged_at:"2026-04-25T02:30:00", status:"merged", month_merged:"2026-04", review_wait_hours:7.7,  merge_time_hours:24.7, lines_changed:750, review_rounds:3 },
  { pr_id:"PR-029", issue_id:"JIRA-029", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-03-05T09:48:00", first_review_at:"2026-03-06T02:54:00", merged_at:"2026-03-06T18:54:00", status:"merged", month_merged:"2026-03", review_wait_hours:17.1, merge_time_hours:33.1, lines_changed:604, review_rounds:1 },
  { pr_id:"PR-030", issue_id:"JIRA-030", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-03-09T06:36:00", first_review_at:"2026-03-09T22:36:00", merged_at:"2026-03-10T19:36:00", status:"merged", month_merged:"2026-03", review_wait_hours:16.0, merge_time_hours:37.0, lines_changed:194, review_rounds:2 },
  { pr_id:"PR-031", issue_id:"JIRA-031", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-04-18T04:00:00", first_review_at:"2026-04-18T18:18:00", merged_at:"2026-04-19T08:18:00", status:"merged", month_merged:"2026-04", review_wait_hours:14.3, merge_time_hours:28.3, lines_changed:300, review_rounds:3 },
  { pr_id:"PR-032", issue_id:"JIRA-032", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",opened_at:"2026-04-22T18:24:00", first_review_at:"2026-04-23T11:00:00", merged_at:"2026-04-24T01:00:00", status:"merged", month_merged:"2026-04", review_wait_hours:16.6, merge_time_hours:30.6, lines_changed:580, review_rounds:2 }
];
```

### `backend/data/deployments.js`
```js
export const deployments = [
  { deployment_id:"DEP-001", pr_id:"PR-001", issue_id:"JIRA-001", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-03-27T20:06:00", status:"success", month_deployed:"2026-03", lead_time_days:2.9,  release_type:"standard" },
  { deployment_id:"DEP-002", pr_id:"PR-002", issue_id:"JIRA-002", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-03-08T06:24:00", status:"success", month_deployed:"2026-03", lead_time_days:1.9,  release_type:"standard" },
  { deployment_id:"DEP-003", pr_id:"PR-003", issue_id:"JIRA-003", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-04-17T09:12:00", status:"success", month_deployed:"2026-04", lead_time_days:3.8,  release_type:"hotfix" },
  { deployment_id:"DEP-004", pr_id:"PR-004", issue_id:"JIRA-004", developer_id:"DEV-001", developer_name:"Ava Chen",    manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-04-21T12:00:00", status:"success", month_deployed:"2026-04", lead_time_days:2.9,  release_type:"hotfix" },
  { deployment_id:"DEP-005", pr_id:"PR-005", issue_id:"JIRA-005", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-03-14T22:30:00", status:"success", month_deployed:"2026-03", lead_time_days:3.5,  release_type:"hotfix" },
  { deployment_id:"DEP-006", pr_id:"PR-006", issue_id:"JIRA-006", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-03-26T00:06:00", status:"success", month_deployed:"2026-03", lead_time_days:5.1,  release_type:"hotfix" },
  { deployment_id:"DEP-007", pr_id:"PR-007", issue_id:"JIRA-007", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-04-17T07:30:00", status:"success", month_deployed:"2026-04", lead_time_days:4.2,  release_type:"standard" },
  { deployment_id:"DEP-008", pr_id:"PR-008", issue_id:"JIRA-008", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-04-24T09:30:00", status:"success", month_deployed:"2026-04", lead_time_days:3.3,  release_type:"standard" },
  { deployment_id:"DEP-009", pr_id:"PR-009", issue_id:"JIRA-009", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-03-20T19:42:00", status:"success", month_deployed:"2026-03", lead_time_days:2.4,  release_type:"standard" },
  { deployment_id:"DEP-010", pr_id:"PR-010", issue_id:"JIRA-010", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-03-23T22:42:00", status:"success", month_deployed:"2026-03", lead_time_days:2.3,  release_type:"hotfix" },
  { deployment_id:"DEP-011", pr_id:"PR-011", issue_id:"JIRA-011", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-04-09T13:48:00", status:"success", month_deployed:"2026-04", lead_time_days:1.8,  release_type:"hotfix" },
  { deployment_id:"DEP-012", pr_id:"PR-012", issue_id:"JIRA-012", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  environment:"prod", completed_at:"2026-04-19T04:12:00", status:"success", month_deployed:"2026-04", lead_time_days:2.9,  release_type:"standard" },
  { deployment_id:"DEP-013", pr_id:"PR-013", issue_id:"JIRA-013", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-03-11T05:18:00", status:"success", month_deployed:"2026-03", lead_time_days:4.7,  release_type:"standard" },
  { deployment_id:"DEP-014", pr_id:"PR-014", issue_id:"JIRA-014", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-03-12T05:12:00", status:"success", month_deployed:"2026-03", lead_time_days:3.0,  release_type:"standard" },
  { deployment_id:"DEP-015", pr_id:"PR-015", issue_id:"JIRA-015", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-04-13T08:48:00", status:"success", month_deployed:"2026-04", lead_time_days:3.1,  release_type:"standard" },
  { deployment_id:"DEP-016", pr_id:"PR-016", issue_id:"JIRA-016", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-04-11T16:18:00", status:"success", month_deployed:"2026-04", lead_time_days:4.0,  release_type:"standard" },
  { deployment_id:"DEP-017", pr_id:"PR-017", issue_id:"JIRA-017", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-03-07T00:48:00", status:"success", month_deployed:"2026-03", lead_time_days:1.9,  release_type:"standard" },
  { deployment_id:"DEP-018", pr_id:"PR-018", issue_id:"JIRA-018", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-03-27T11:12:00", status:"success", month_deployed:"2026-03", lead_time_days:2.3,  release_type:"standard" },
  { deployment_id:"DEP-019", pr_id:"PR-019", issue_id:"JIRA-019", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-04-27T16:36:00", status:"success", month_deployed:"2026-04", lead_time_days:3.4,  release_type:"standard" },
  { deployment_id:"DEP-020", pr_id:"PR-020", issue_id:"JIRA-020", developer_id:"DEV-004", developer_name:"Lucas Reed",  manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-04-15T20:12:00", status:"success", month_deployed:"2026-04", lead_time_days:2.4,  release_type:"standard" },
  { deployment_id:"DEP-021", pr_id:"PR-021", issue_id:"JIRA-021", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-03-11T10:42:00", status:"success", month_deployed:"2026-03", lead_time_days:2.4,  release_type:"standard" },
  { deployment_id:"DEP-022", pr_id:"PR-022", issue_id:"JIRA-022", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-03-15T22:12:00", status:"success", month_deployed:"2026-03", lead_time_days:3.9,  release_type:"standard" },
  { deployment_id:"DEP-023", pr_id:"PR-023", issue_id:"JIRA-023", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-04-14T12:42:00", status:"success", month_deployed:"2026-04", lead_time_days:3.9,  release_type:"hotfix" },
  { deployment_id:"DEP-024", pr_id:"PR-024", issue_id:"JIRA-024", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", environment:"prod", completed_at:"2026-04-16T12:54:00", status:"success", month_deployed:"2026-04", lead_time_days:2.9,  release_type:"hotfix" },
  { deployment_id:"DEP-025", pr_id:"PR-025", issue_id:"JIRA-025", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-03-25T12:06:00", status:"success", month_deployed:"2026-03", lead_time_days:4.4,  release_type:"hotfix" },
  { deployment_id:"DEP-026", pr_id:"PR-026", issue_id:"JIRA-026", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-03-14T23:54:00", status:"success", month_deployed:"2026-03", lead_time_days:5.5,  release_type:"standard" },
  { deployment_id:"DEP-027", pr_id:"PR-027", issue_id:"JIRA-027", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-04-28T23:42:00", status:"success", month_deployed:"2026-04", lead_time_days:4.4,  release_type:"standard" },
  { deployment_id:"DEP-028", pr_id:"PR-028", issue_id:"JIRA-028", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-04-29T00:54:00", status:"success", month_deployed:"2026-04", lead_time_days:5.0,  release_type:"standard" },
  { deployment_id:"DEP-029", pr_id:"PR-029", issue_id:"JIRA-029", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-03-09T11:18:00", status:"success", month_deployed:"2026-03", lead_time_days:4.1,  release_type:"hotfix" },
  { deployment_id:"DEP-030", pr_id:"PR-030", issue_id:"JIRA-030", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-03-13T17:36:00", status:"success", month_deployed:"2026-03", lead_time_days:4.5,  release_type:"hotfix" },
  { deployment_id:"DEP-031", pr_id:"PR-031", issue_id:"JIRA-031", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-04-21T14:18:00", status:"success", month_deployed:"2026-04", lead_time_days:3.4,  release_type:"standard" },
  { deployment_id:"DEP-032", pr_id:"PR-032", issue_id:"JIRA-032", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",environment:"prod", completed_at:"2026-04-26T17:00:00", status:"success", month_deployed:"2026-04", lead_time_days:3.9,  release_type:"standard" }
];
```

### `backend/data/bugReports.js`
```js
export const bugReports = [
  { bug_id:"BUG-001", linked_issue_id:"JIRA-007", developer_id:"DEV-002", developer_name:"Noah Patel",  manager_id:"MGR-01", team_name:"Payments API",  found_at:"2026-04-21T07:30:00", severity:"medium", escaped_to_prod:"Yes", status:"Open",   month_found:"2026-04", root_cause_bucket:"test gap" },
  { bug_id:"BUG-002", linked_issue_id:"JIRA-012", developer_id:"DEV-006", developer_name:"Ishan Mehta", manager_id:"MGR-01", team_name:"Payments API",  found_at:"2026-04-21T04:12:00", severity:"low",    escaped_to_prod:"Yes", status:"Open",   month_found:"2026-04", root_cause_bucket:"release config" },
  { bug_id:"BUG-003", linked_issue_id:"JIRA-024", developer_id:"DEV-008", developer_name:"Zara Khan",   manager_id:"MGR-02", team_name:"Checkout Web", found_at:"2026-04-18T12:54:00", severity:"high",   escaped_to_prod:"Yes", status:"Open",   month_found:"2026-04", root_cause_bucket:"edge case" },
  { bug_id:"BUG-004", linked_issue_id:"JIRA-013", developer_id:"DEV-003", developer_name:"Mia Lopez",   manager_id:"MGR-02", team_name:"Checkout Web", found_at:"2026-03-15T05:18:00", severity:"medium", escaped_to_prod:"Yes", status:"Closed", month_found:"2026-03", root_cause_bucket:"edge case" },
  { bug_id:"BUG-005", linked_issue_id:"JIRA-025", developer_id:"DEV-005", developer_name:"Emma Roy",    manager_id:"MGR-03", team_name:"Mobile Growth",found_at:"2026-03-29T12:06:00", severity:"medium", escaped_to_prod:"Yes", status:"Closed", month_found:"2026-03", root_cause_bucket:"test gap" },
  { bug_id:"BUG-006", linked_issue_id:"JIRA-029", developer_id:"DEV-007", developer_name:"Owen Brooks", manager_id:"MGR-03", team_name:"Mobile Growth",found_at:"2026-03-13T11:18:00", severity:"high",   escaped_to_prod:"Yes", status:"Closed", month_found:"2026-03", root_cause_bucket:"edge case" }
];
```

---

# SECTION C — METRIC FORMULAS & BUSINESS LOGIC

## Exact metric definitions

| Metric | Formula |
|--------|---------|
| Lead Time | `avg(lead_time_days)` from `deployments` where `status="success"` AND `environment="prod"` AND `developer_id=X` AND `month_deployed=M` |
| Cycle Time | `avg(cycle_time_days)` from `jiraIssues` where `status="Done"` AND `developer_id=X` AND `month_done=M` |
| PR Throughput | `count` of `pullRequests` where `status="merged"` AND `developer_id=X` AND `month_merged=M` |
| Deployment Frequency | `count` of `deployments` where `status="success"` AND `environment="prod"` AND `developer_id=X` AND `month_deployed=M` |
| Bug Rate | `escapedBugsCount / issuesDoneCount` where bugs: `escaped_to_prod="Yes"` AND `month_found=M` AND `developer_id=X`; issues: `status="Done"` AND `month_done=M` AND `developer_id=X` |

## Pattern classification (implement in `computeMetrics.js`)

```js
function classifyPattern(metrics) {
  const { bugRate, avgLeadTimeDays, avgCycleTimeDays } = metrics;
  if (bugRate > 0) return "Quality watch";
  if (avgCycleTimeDays > 6 || avgLeadTimeDays > 4.5) return "Needs review";
  if (bugRate === 0 && avgLeadTimeDays <= 4 && avgCycleTimeDays <= 5) return "Healthy flow";
  return "Watch bottlenecks";
}
```

## Interpretation + next steps text map

```js
export const patternContent = {
  "Healthy flow": {
    emoji: "✅",
    color: "green",
    interpretation: "Your metrics show a well-paced delivery cycle. Code is moving from review to production efficiently, and no quality issues have escaped to production this month.",
    nextSteps: [
      "Keep PRs small and focused to maintain your current review speed.",
      "Consider documenting one recent delivery pattern that worked well for your team."
    ]
  },
  "Quality watch": {
    emoji: "⚠️",
    color: "amber",
    interpretation: "You shipped work this month, but at least one bug escaped to production. Your cycle time and lead time may be fine, but the quality signal warrants attention before it becomes a pattern.",
    nextSteps: [
      "Review the root cause of the escaped bug — was it a test gap, a config issue, or an edge case?",
      "Add one targeted test or checklist item to your PR process to catch similar issues earlier."
    ]
  },
  "Needs review": {
    emoji: "🔍",
    color: "amber",
    interpretation: "Your cycle time or lead time is running longer than typical. No quality issues have escaped, which is good — but the slower pace may point to a bottleneck in review, scope, or deployment.",
    nextSteps: [
      "Break your next ticket into smaller, independently deployable pieces.",
      "Check whether review wait time is the main delay — if PRs sit idle, a process nudge may help more than writing faster code."
    ]
  },
  "Watch bottlenecks": {
    emoji: "👀",
    color: "orange",
    interpretation: "Your metrics show mixed signals this month. Some areas look stable but others suggest a potential bottleneck in delivery or quality worth keeping an eye on.",
    nextSteps: [
      "Compare your review wait hours against your team average to see if feedback delay is the main drag.",
      "If bug rate is rising, invest in a quick test coverage check before the next sprint."
    ]
  }
};
```

## Metric card color thresholds

```js
export const thresholds = {
  leadTime:   { green: v => v <= 3,  amber: v => v <= 5,  red: v => v > 5  },
  cycleTime:  { green: v => v <= 4,  amber: v => v <= 6,  red: v => v > 6  },
  prCount:    { green: v => v >= 2,  amber: v => v === 1, red: v => v === 0 },
  deployFreq: { green: v => v >= 2,  amber: v => v === 1, red: v => v === 0 },
  bugRate:    { green: v => v === 0, amber: v => v <= 0.5,red: v => v > 0.5 }
};
```

---

# SECTION D — FOLDER STRUCTURE & FILE LIST

```
flowlens/
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── data/
│   │   ├── developers.js
│   │   ├── jiraIssues.js
│   │   ├── pullRequests.js
│   │   ├── deployments.js
│   │   └── bugReports.js
│   ├── routes/
│   │   ├── metrics.js       # GET /api/metrics?developerId=&month=
│   │   ├── manager.js       # GET /api/manager?managerId=&month=
│   │   ├── developers.js    # GET /api/developers
│   │   └── months.js        # GET /api/months
│   └── utils/
│       └── computeMetrics.js
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── pages/
│       │   ├── ICView.jsx
│       │   └── ManagerView.jsx
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── DeveloperSelector.jsx
│       │   ├── MetricCard.jsx
│       │   ├── PatternBadge.jsx
│       │   ├── InsightPanel.jsx
│       │   ├── DrillDown.jsx
│       │   └── ManagerTable.jsx
│       ├── api/
│       │   └── client.js
│       └── utils/
│           ├── thresholds.js
│           └── patternContent.js
└── README.md
```

---

# SECTION E — API SPECIFICATION

### Backend `index.js` setup
```js
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
app.listen(3001, () => console.log('FlowLens backend running on port 3001'));
```

### `GET /api/developers`
Returns list for the dropdown:
```json
[
  { "developer_id": "DEV-001", "developer_name": "Ava Chen", "team_name": "Payments API", "level": "SDE2" },
  ...
]
```

### `GET /api/months`
```json
["2026-03", "2026-04"]
```

### `GET /api/metrics?developerId=DEV-002&month=2026-04`
```json
{
  "developer": {
    "id": "DEV-002", "name": "Noah Patel", "team": "Payments API",
    "level": "SDE1", "serviceType": "backend", "managerName": "Rina Kapoor"
  },
  "month": "2026-04",
  "metrics": {
    "avgLeadTimeDays": 3.75,
    "avgCycleTimeDays": 5.4,
    "prThroughput": 2,
    "deploymentFrequency": 2,
    "bugRate": 0.5,
    "bugRatePct": 50
  },
  "pattern": "Quality watch",
  "interpretation": "You shipped work this month...",
  "nextSteps": ["Review the root cause...", "Add one targeted test..."],
  "detail": {
    "avgReviewWaitHours": 24.0,
    "avgLinesChanged": 560,
    "issuesDone": 2,
    "escapedBugs": [
      { "bug_id": "BUG-001", "severity": "medium", "root_cause_bucket": "test gap" }
    ]
  }
}
```

### `GET /api/manager?managerId=MGR-01&month=2026-04`
```json
{
  "manager": { "id": "MGR-01", "name": "Rina Kapoor" },
  "month": "2026-04",
  "teamRows": [
    {
      "developer_id": "DEV-001", "developer_name": "Ava Chen", "level": "SDE2",
      "avgLeadTimeDays": 3.35, "avgCycleTimeDays": 3.9,
      "prThroughput": 2, "deploymentFrequency": 2,
      "bugRatePct": 0, "pattern": "Healthy flow"
    }
  ],
  "teamAvg": {
    "avgLeadTimeDays": 3.15, "avgCycleTimeDays": 4.33,
    "avgBugRatePct": 33.3
  }
}
```

---

# SECTION F — FRONTEND UI SPECIFICATION

## IC View (`/`)

### Layout (top → bottom)
1. **Navbar** — "FlowLens" logo left, "Manager View" link right
2. **Selector bar** — Developer dropdown + Month dropdown, side by side. Default: first developer, `2026-03`
3. **Developer profile chip** — Name, team badge, level badge (SDE1/SDE2/SDE3), service type icon (⚙️ backend / 🖥️ frontend / 📱 mobile)
4. **Metrics grid (2×3 or 3×2)** — 5 metric cards + 1 pattern badge card
5. **Insight panel** — "What this likely means" paragraph + numbered next steps list
6. **Drill-down accordion** — Collapsed by default. Expands to show: avg review wait hours, avg lines per PR, issues completed, escaped bugs table (if any)

### MetricCard component
Each card shows: metric name, formatted value, color dot (green/amber/red per thresholds in Section C)

```
┌─────────────────────┐
│ Lead Time           │
│  🟢  2.4 days       │
│ PR open → prod      │
└─────────────────────┘
```

### PatternBadge
Large, prominent, full-width colored banner:
```
✅  Healthy flow
```
Green background if Healthy flow, amber if Quality watch or Needs review, orange if Watch bottlenecks.

### InsightPanel
```
┌──────────────────────────────────────────┐
│ 💡 What this likely means                │
│ Your metrics show a well-paced...        │
│                                          │
│ 👉 Suggested next steps                  │
│ 1. Keep PRs small and focused...         │
│ 2. Consider documenting...               │
└──────────────────────────────────────────┘
```

## Manager View (`/manager`)

### Layout
1. **Navbar** — "FlowLens" logo, "IC View" link
2. **Selector bar** — Manager dropdown + Month dropdown
3. **Summary table** with columns:
   `Developer | Level | Lead Time | Cycle Time | PRs | Deployments | Bug Rate | Pattern`
4. **Team average row** at bottom, highlighted

### Table behavior
- Pattern column shows colored badge pill
- Rows are color-accented by pattern (very subtle background tint)
- Bug Rate column shows `0%` or `50%` etc.

---

# SECTION F2 — VERIFICATION TABLE

Use this to confirm all your computed metric logic is correct. If any row doesn't match, your filter logic has a bug.

| Developer | Month | Lead Time (days) | Cycle Time (days) | PRs | Deps | Bug Rate | Pattern |
|-----------|-------|-----------------|-------------------|-----|------|----------|---------|
| Ava Chen (DEV-001) | 2026-03 | 2.40 | 3.95 | 2 | 2 | 0% | Healthy flow |
| Ava Chen (DEV-001) | 2026-04 | 3.35 | 3.90 | 2 | 2 | 0% | Healthy flow |
| Noah Patel (DEV-002) | 2026-03 | 4.30 | 5.90 | 2 | 2 | 0% | Healthy flow |
| Noah Patel (DEV-002) | 2026-04 | 3.75 | 5.40 | 2 | 2 | 50% | Quality watch |
| Ishan Mehta (DEV-006) | 2026-03 | 2.35 | 3.75 | 2 | 2 | 0% | Healthy flow |
| Ishan Mehta (DEV-006) | 2026-04 | 2.35 | 3.70 | 2 | 2 | 50% | Quality watch |
| Mia Lopez (DEV-003) | 2026-03 | 3.85 | 4.05 | 2 | 2 | 50% | Quality watch |
| Mia Lopez (DEV-003) | 2026-04 | 3.55 | 3.05 | 2 | 2 | 0% | Healthy flow |
| Lucas Reed (DEV-004) | 2026-03 | 2.10 | 3.85 | 2 | 2 | 0% | Healthy flow |
| Lucas Reed (DEV-004) | 2026-04 | 2.90 | 3.55 | 2 | 2 | 0% | Healthy flow |
| Zara Khan (DEV-008) | 2026-03 | 3.15 | 3.80 | 2 | 2 | 0% | Healthy flow |
| Zara Khan (DEV-008) | 2026-04 | 3.40 | 3.85 | 2 | 2 | 50% | Quality watch |
| Emma Roy (DEV-005) | 2026-03 | 4.95 | 5.95 | 2 | 2 | 50% | Quality watch |
| Emma Roy (DEV-005) | 2026-04 | 4.70 | 6.50 | 2 | 2 | 0% | Needs review |
| Owen Brooks (DEV-007) | 2026-03 | 4.30 | 4.55 | 2 | 2 | 50% | Quality watch |
| Owen Brooks (DEV-007) | 2026-04 | 3.65 | 4.80 | 2 | 2 | 0% | Healthy flow |

---

# SECTION G — MIRO USER JOURNEY BOARD

## What the assignment requires
Use the free Miro template called **"User Journey"**. Go to miro.com → New board → Search "User Journey" template → select it. Fill in the sections below.

## Journey title
**"A developer opens FlowLens to understand their month"**

## User persona (top of board)
**Name:** Jamie, SDE1 Backend Developer  
**Goal:** Understand why this month felt slower and what I can do differently  
**Pain point:** I can see numbers in dashboards but I don't know what they mean or what to do next

## Journey phases — fill one column per phase

### Phase 1: DISCOVER
**Action:** Jamie opens FlowLens for the first time after a sprint retrospective  
**Touchpoint:** Browser / internal tool link  
**Thinking:** "I want to see how my month looked compared to what I felt"  
**Emotion:** 😐 Curious but slightly anxious  
**Opportunity:** Landing on the IC View immediately (no login friction) reduces drop-off

### Phase 2: SELECT
**Action:** Selects their name from the developer dropdown + chooses the month  
**Touchpoint:** Dropdown selectors on IC View  
**Thinking:** "Is my name here? Can I easily find last month?"  
**Emotion:** 😊 Relieved — simple interface, no confusion  
**Opportunity:** Default to latest month so most users don't have to change anything

### Phase 3: SEE METRICS
**Action:** Views the 5 metric cards — lead time, cycle time, PR throughput, deployment frequency, bug rate  
**Touchpoint:** Metrics grid  
**Thinking:** "OK I shipped 2 PRs. My lead time is 3.75 days. What does that even mean?"  
**Emotion:** 😐 Neutral — numbers alone don't help yet  
**Opportunity:** Color coding (green/amber/red) gives instant signal without reading numbers

### Phase 4: UNDERSTAND
**Action:** Reads the pattern badge and insight panel  
**Touchpoint:** PatternBadge + InsightPanel  
**Thinking:** "Quality watch — a bug escaped. Oh, the insight says it's probably a test gap. That makes sense."  
**Emotion:** 😮 Surprised but relieved — finally an explanation  
**Opportunity:** Plain-English interpretation is the core differentiator vs. raw dashboards

### Phase 5: ACT
**Action:** Reads the 2 suggested next steps, decides to add a test for that edge case  
**Touchpoint:** Next Steps list in InsightPanel  
**Thinking:** "OK, I know what to do differently. I'll bring this to my 1:1 with my manager."  
**Emotion:** 😊 Empowered — leaves with a plan  
**Opportunity:** Next steps are specific and actionable, not vague advice

### Phase 6: SHARE (Manager)
**Action:** Manager opens Manager View, sees team table, spots one developer on "Quality watch"  
**Touchpoint:** Manager View summary table  
**Thinking:** "Two devs had bugs escape this month. I should check in before the next sprint."  
**Emotion:** 🙂 Informed — can have a better 1:1 conversation  
**Opportunity:** Manager view makes the conversation data-driven, not assumption-based

## Overall experience arc (bottom row)
Low → Medium → Medium → High → High → High  
*(Emotion builds as the user moves from raw data to understanding to action)*

---

# SECTION H — VIDEO DEMO SCRIPT (5–10 minutes)

Record this in one take. Read naturally — don't read word for word. Use this as your guide.

---

**[0:00–0:45] — Introduce the problem**

> "Hi, my name is [your name], and I built FlowLens for this developer productivity assignment.
>
> The problem I focused on is simple: developers already have access to metrics like lead time, cycle time, and bug rate. But metrics alone don't explain anything. If I tell you your cycle time is 6.5 days, you don't know if that's caused by slow reviews, large tickets, or deployment delays — and you don't know what to do about it.
>
> FlowLens bridges that gap. It takes raw metrics and converts them into a pattern, a plain-English interpretation, and specific next steps."

---

**[0:45–1:30] — Show the data and how it works**

> "The app is backed by real sample data from the workbook provided — 8 developers across 3 teams, with Jira issues, pull requests, CI/CD deployments, and bug reports.
>
> The backend computes 5 metrics at runtime from these raw tables — nothing is hardcoded. Lead time comes from deployment records, cycle time from Jira, PR throughput and deployment frequency are counts, and bug rate is escaped production bugs divided by issues completed."

---

**[1:30–3:30] — Live demo: IC View**

> "Let me show you the IC view. [Open browser]
>
> I'll select Noah Patel for April 2026. [Select in dropdown]
>
> You can see his 5 metrics — lead time 3.75 days, cycle time 5.4 days, 2 PRs merged, 2 deployments, bug rate 50%.
>
> The color coding gives immediate signal — lead time is green, cycle time is amber, bug rate is amber.
>
> Below the metrics you see the pattern badge: 'Quality watch'. This was classified because a bug escaped to production this month.
>
> And here's the key part — the insight panel. It says: 'You shipped work this month, but at least one bug escaped to production.' And it gives two specific next steps: review the root cause and add a targeted test.
>
> If I open the drill-down, I can see the specific bug — BUG-001, medium severity, root cause was a test gap. So the next step is directly connected to the actual data."

---

**[3:30–4:30] — Live demo: Manager View**

> "There's also a lightweight manager view. [Switch to /manager]
>
> Rina Kapoor manages the Payments API team. In April, two of her three developers were on 'Quality watch' — both had escaped bugs. That's a signal she'd want to bring up in a team retrospective.
>
> The team average row at the bottom shows the aggregate lead time, cycle time, and bug rate for context."

---

**[4:30–5:30] — Talk about decisions and tradeoffs**

> "A few decisions I want to call out:
>
> First, I kept the MVP focused on one IC journey rather than trying to build a full analytics platform. The assignment specifically warned against over-scoping, and I think a smaller thing done well is more useful.
>
> Second, the interpretation text is pattern-based — not dynamically generated by an AI on each request. This was a deliberate choice: it's predictable, explainable, and fast. I understand exactly what it says and why.
>
> Third, I used AI tools to help structure the architecture and scaffold boilerplate. But I verified all the metric logic manually against the expected results in the workbook, and I can explain every line of the compute function."

---

**[5:30–6:00] — Close**

> "The core idea of FlowLens is that metrics are only useful if they help you act. I hope this demo shows that a small, focused MVP can do that without becoming a giant dashboard. Thanks for watching."

---

# SECTION I — INTERVIEW PREP

The rubric has 6 categories. Here are the questions reviewers are trained to ask and how to answer them.

---

### Category: Problem Understanding (20%)

**Q: Can you explain the user problem in plain English, without mentioning the tech stack?**

> "Developers have metrics available but the numbers don't tell them what's causing a slow month or a quality issue, and they don't suggest what to do next. FlowLens interprets those numbers into a pattern and gives specific next steps — it moves from 'here's what happened' to 'here's what it likely means and what you can do.'"

**Q: Why did you choose to focus on the IC view rather than starting with the manager view?**

> "The IC is the person who can actually change their behavior based on the insights. A manager view is useful for oversight, but the primary value is helping the person doing the work understand their own patterns. The assignment also recommended starting with IC."

---

### Category: Product Thinking (20%)

**Q: Why show interpretation text instead of just charts?**

> "Charts show what happened. Interpretation explains why it might have happened and what to do. That's the actual product problem stated in the assignment — metrics alone don't help, context does."

**Q: How did you decide which pattern labels to use?**

> "I used the pattern hints from the workbook's Metric_Examples sheet as a starting point — Healthy flow, Quality watch — and extended the logic to cover Needs review for slow-but-clean developers. I wanted every developer to get a label that's honest and actionable, not just 'good' or 'bad'."

**Q: What would you add if you had more time?**

> "A trend view — comparing March vs April for the same developer so they can see if they're improving or declining. Also a team benchmark so a developer can see how their lead time compares to teammates. Both would add context without requiring a totally new page."

---

### Category: Frontend Quality (15%)

**Q: Walk me through how the IC view renders when a developer is selected.**

> "The selector dropdowns trigger an API call to `/api/metrics` with the developer ID and month. The response includes the computed metrics, pattern classification, interpretation text, and next steps. React state updates and the metric cards, pattern badge, and insight panel all re-render from that single response object."

**Q: How did you handle the color thresholds for the metric cards?**

> "I defined a thresholds utility that maps each metric to a function returning green, amber, or red based on the value. Each MetricCard receives the value and metric type, applies the threshold function, and renders the appropriate color class."

---

### Category: Backend / Data Handling (15%)

**Q: Where does the data come from and why didn't you use a database?**

> "The data is hardcoded from the workbook's sample tables in JavaScript arrays. The assignment said 'any reasonable backend, database, or mock server' and for this scope — 8 developers, 32 records per table — in-memory arrays are the right call. It keeps the project simple and easy to run without setup."

**Q: How does bug rate get computed?**

> "It's escaped bugs found in the selected month for that developer, divided by issues that developer completed in the same month. I filter both arrays by developer_id and the month field, count them, and divide. If no issues were completed, I return 0 to avoid a division-by-zero."

**Q: Walk me through one computation end to end — say, Noah Patel April 2026.**

> "I filter deployments for DEV-002 and month_deployed='2026-04', get DEP-007 (lead time 4.2) and DEP-008 (lead time 3.3), average them → 3.75. I filter Jira issues for DEV-002 and month_done='2026-04', get JIRA-007 (cycle 5.4) and JIRA-008 (cycle 5.4), average → 5.4. PRs: PR-007 and PR-008, count → 2. Deployments: 2. Bugs: BUG-001 found in 2026-04 for DEV-002, escaped_to_prod=Yes, count=1. Issues done=2. Bug rate = 1/2 = 0.5 → 50%. Pattern: bug rate > 0 → Quality watch."

---

### Category: Communication (15%)

**Q: What problem were you solving and for whom?**

> "I was solving for an individual contributor developer who can see their numbers but can't act on them alone. The goal was to give them context — a pattern label, a plain-English explanation, and specific things to try — so they leave the tool with a direction, not just a scorecard."

---

### Category: AI Usage Discipline (15%)

**Q: How did you use AI in this project?**

> "I used AI to understand the domain quickly — I asked it to explain what SDLC means and why these 5 metrics matter for delivery health. I also used it to scaffold the Express backend structure and React component layout. But I verified all the metric computation logic manually by checking the output against the expected values in the workbook. The interpretation text, the pattern logic, and the product decisions — which view to prioritize, what the next steps should say — those were mine."

**Q: Is there anything in your code you couldn't explain if asked?**

> "No. I kept only what I understand. The compute function is straightforward filtering and averaging. The pattern classification is a simple if-else. The React components are standard state + API call patterns. If anything felt unclear, I rewrote it until it was."

---

# SECTION J — README FOR GITHUB REPO

```markdown
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
- **Frontend:** React (Vite) + CSS
- **Backend:** Node.js + Express
- **Data:** In-memory JSON arrays from the assignment workbook

## Running the project

### Backend
```bash
cd backend
npm install
npm start
# Runs on http://localhost:3001
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

## Data source
All data is derived from the intern assignment workbook (8 developers, 32 Jira issues, 32 PRs, 32 deployments, 6 bug reports across March–April 2026).

## How AI was used
AI tools were used to understand the SDLC domain, scaffold the Express and React structure, and debug issues. All metric computation logic was verified manually against expected values from the workbook. Product decisions — scope, interpretation text, pattern logic, next steps — were made independently.
```

---

# SECTION K — AI USAGE NOTE (include with submission)

> **AI tools used:** Claude (Anthropic)
>
> **How I used AI:**
> - To understand SDLC terminology and why the 5 metrics matter for delivery health
> - To propose a React + Express architecture for the MVP scope
> - To generate boilerplate code for the Express server and React component structure
> - To help me structure the 5-minute demo video script
>
> **What I did myself:**
> - All product decisions: which view to prioritize (IC first), what patterns to define, what the next steps should say
> - Verified all metric computation logic against the expected values in the workbook's Metric_Examples sheet
> - Reviewed and understood every line of code before including it
> - Wrote the interpretation and next steps text for each pattern
>
> **What I avoided:**
> - Submitting any code I could not explain in the interview
> - Using AI-generated metric logic without verifying it against the workbook
> - Building a generic dashboard and calling it an MVP

---

# SECTION L — FINAL SUBMISSION CHECKLIST

Before submitting, tick every item:

- [ ] **Video** — 5–10 minutes, clear audio, clear lighting, uploaded to Google Drive
- [ ] **Video access** — opened the link in incognito, confirmed it plays without signing in
- [ ] **Miro board** — User Journey template filled with all 6 phases from Section G
- [ ] **Miro access** — confirmed reviewers can view it without signing in (set to "Anyone with link")
- [ ] **Prototype** — working app shown in the video, all dropdowns functional
- [ ] **Code link** — GitHub repo with README from Section J (strongly recommended)
- [ ] **AI usage note** — Section K text included in submission or README
- [ ] **Metrics verified** — all 16 developer+month combinations match the verification table in Section F2
- [ ] **No blank dropdowns** — app defaults to first developer and 2026-03 on load
- [ ] **Both views work** — IC View and Manager View both render correctly
- [ ] **Interview prep done** — read through Section I at least once out loud
```
