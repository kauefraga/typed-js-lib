import { it, describe, expect } from 'vitest';
import { sum } from '../lib/index';

describe('Sum function', () => {
  it('should be equal to 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
