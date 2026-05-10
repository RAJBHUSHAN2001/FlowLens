import { jiraIssues } from '../data/jiraIssues.js';
import { pullRequests } from '../data/pullRequests.js';
import { deployments } from '../data/deployments.js';
import { bugReports } from '../data/bugReports.js';

export function classifyPattern(metrics) {
  const { bugRate, avgLeadTimeDays, avgCycleTimeDays } = metrics;
  if (bugRate > 0) return "Quality watch";
  if (avgCycleTimeDays > 6 || avgLeadTimeDays > 4.5) return "Needs review";
  if (bugRate === 0 && avgLeadTimeDays <= 4 && avgCycleTimeDays <= 5) return "Healthy flow";
  return "Watch bottlenecks";
}

export function computeMetricsForDeveloper(developerId, month) {
  // 1. Lead Time & Deployment Frequency
  const devDeployments = deployments.filter(d => 
    d.developer_id === developerId && 
    d.month_deployed === month && 
    d.status === "success" && 
    d.environment === "prod"
  );
  
  const deploymentFrequency = devDeployments.length;
  const avgLeadTimeDays = deploymentFrequency > 0 
    ? devDeployments.reduce((sum, d) => sum + d.lead_time_days, 0) / deploymentFrequency 
    : 0;

  // 2. Cycle Time & Issues Done
  const devIssues = jiraIssues.filter(i => 
    i.developer_id === developerId && 
    i.month_done === month && 
    i.status === "Done"
  );
  
  const issuesDone = devIssues.length;
  const avgCycleTimeDays = issuesDone > 0 
    ? devIssues.reduce((sum, i) => sum + i.cycle_time_days, 0) / issuesDone 
    : 0;

  // 3. PR Throughput & PR details
  const devPRs = pullRequests.filter(pr => 
    pr.developer_id === developerId && 
    pr.month_merged === month && 
    pr.status === "merged"
  );
  
  const prThroughput = devPRs.length;
  const avgReviewWaitHours = prThroughput > 0
    ? devPRs.reduce((sum, pr) => sum + pr.review_wait_hours, 0) / prThroughput
    : 0;
  const avgLinesChanged = prThroughput > 0
    ? devPRs.reduce((sum, pr) => sum + pr.lines_changed, 0) / prThroughput
    : 0;

  // 4. Bug Rate
  const devBugs = bugReports.filter(b => 
    b.developer_id === developerId && 
    b.month_found === month && 
    b.escaped_to_prod === "Yes"
  );
  
  const escapedBugsCount = devBugs.length;
  const bugRate = issuesDone > 0 ? escapedBugsCount / issuesDone : 0;

  // Format to numbers to 2 decimal places where appropriate to avoid float issues
  const metrics = {
    avgLeadTimeDays: Math.round(avgLeadTimeDays * 100) / 100,
    avgCycleTimeDays: Math.round(avgCycleTimeDays * 100) / 100,
    prThroughput,
    deploymentFrequency,
    bugRate: Math.round(bugRate * 100) / 100,
    bugRatePct: Math.round(bugRate * 100)
  };

  const pattern = classifyPattern(metrics);

  return {
    metrics,
    pattern,
    detail: {
      avgReviewWaitHours: Math.round(avgReviewWaitHours * 10) / 10,
      avgLinesChanged: Math.round(avgLinesChanged),
      issuesDone,
      escapedBugs: devBugs.map(b => ({
        bug_id: b.bug_id,
        severity: b.severity,
        root_cause_bucket: b.root_cause_bucket
      }))
    }
  };
}
