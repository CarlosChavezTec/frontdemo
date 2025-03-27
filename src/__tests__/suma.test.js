import { describe, it, expect } from 'vitest';

function suma(a, b) {
  return a + b;
}

describe('suma()', () => {
  it('debería retornar 4 al sumar 2 + 2', () => {
    expect(suma(2, 2)).toBe(4);
  });

  it('debería retornar 0 al sumar -1 + 1', () => {
    expect(suma(-1, 1)).toBe(0);
  });
});
