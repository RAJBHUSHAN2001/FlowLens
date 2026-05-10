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
