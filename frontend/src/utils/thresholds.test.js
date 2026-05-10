import { describe, it, expect } from 'vitest';
import { thresholds } from './thresholds';

describe('Thresholds Logic', () => {
  it('should correctly evaluate leadTime', () => {
    // green <= 3
    expect(thresholds.leadTime.green(2)).toBe(true);
    expect(thresholds.leadTime.green(4)).toBe(false);

    // amber <= 5
    expect(thresholds.leadTime.amber(4)).toBe(true);
    expect(thresholds.leadTime.amber(5)).toBe(true);
    expect(thresholds.leadTime.amber(6)).toBe(false);

    // red > 5
    expect(thresholds.leadTime.red(6)).toBe(true);
    expect(thresholds.leadTime.red(5)).toBe(false);
  });

  it('should correctly evaluate bugRate', () => {
    // green === 0
    expect(thresholds.bugRate.green(0)).toBe(true);
    expect(thresholds.bugRate.green(0.1)).toBe(false);
    
    // amber <= 0.5
    expect(thresholds.bugRate.amber(0.5)).toBe(true);
    expect(thresholds.bugRate.amber(0.6)).toBe(false);
    
    // red > 0.5
    expect(thresholds.bugRate.red(0.6)).toBe(true);
    expect(thresholds.bugRate.red(0.5)).toBe(false);
  });
});
