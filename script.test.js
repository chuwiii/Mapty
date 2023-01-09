import { expect, it } from 'vitest';

it('should return true when value is entered', () => {
  const val = [1, 1, 1];
  const result = allPositive(...val);
  expect(result).toBeTruthy;
});
