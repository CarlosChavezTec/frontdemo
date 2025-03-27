import { describe, it, expect } from 'vitest';

describe('saludo', () => {
  it('debería contener "Hola"', () => {
    const saludo = "Hola desde Vite + React + CI";
    expect(saludo.includes("Hola")).toBe(true);
  });
});
