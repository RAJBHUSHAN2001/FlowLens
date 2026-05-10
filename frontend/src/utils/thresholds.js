export const thresholds = {
  leadTime:   { green: v => v <= 3,  amber: v => v <= 5,  red: v => v > 5  },
  cycleTime:  { green: v => v <= 4,  amber: v => v <= 6,  red: v => v > 6  },
  prCount:    { green: v => v >= 2,  amber: v => v === 1, red: v => v === 0 },
  deployFreq: { green: v => v >= 2,  amber: v => v === 1, red: v => v === 0 },
  bugRate:    { green: v => v === 0, amber: v => v <= 0.5,red: v => v > 0.5 }
};
