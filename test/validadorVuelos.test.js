import { describe, it, expect } from "vitest";
import { ValidadorVuelos } from "../services/validadorVuelos.js";

describe("Validaciones de vuelos", () => {
  it("Debe aceptar un ID válido", () => {
    const vuelo = { id: "ABC123", xa: 1000, ya: 2000, za: 3000 };
    expect(() => ValidadorVuelos.ValidarVuelo(vuelo)).not.toThrow("El formato de id es inválido. Debe ser ej:'AAA111'");
  });

  it("Debe rechazar un ID inválido", () => {
    const vuelo = { id: "12A345", xa: 1000, ya: 2000, za: 3000 };
    expect(() => ValidadorVuelos.ValidarVuelo(vuelo)).toThrow("El formato de id es inválido. Debe ser ej:'AAA111'");
  });

  it("Debe rechazar coordenadas que no son numéricas", () => {
    const vuelo = { id: "ABC123", xa: "mil", ya: 2000, za: 3000 };
    expect(() => ValidadorVuelos.ValidarVuelo(vuelo)).toThrow("Todas Las coordenadas deben ser numéricas.");
  });

  it("Debe detectar colisión entre vuelos a menos de 500m", () => {
    const nuevo = { id: "ABC123", xa: 0, ya: 0, za: 0 };
    const otros = [{ id: "DEF456", xa: 300, ya: 300, za: 100 }];
    const resultado = ValidadorVuelos.detectarColisiones(nuevo, otros);
    expect(resultado).toContain("DEF456");
  });

  it("No debe detectar colisión si la distancia es mayor a 500m", () => {
    const nuevo = { id: "ABC123", xa: 0, ya: 0, za: 0 };
    const otros = [{ id: "DEF456", xa: 1000, ya: 1000, za: 1000 }];
    const resultado = ValidadorVuelos.detectarColisiones(nuevo, otros);
    expect(resultado).toEqual([]);
  });

  it("No debe compararse con sí mismo al actualizar", () => {
    const nuevo = { id: "ABC123", xa: 0, ya: 0, za: 0 };
    const otros = [{ id: "ABC123", xa: 1, ya: 1, za: 1 }];
    const resultado = ValidadorVuelos.detectarColisiones(nuevo, otros);
    expect(resultado).toEqual([]);
  });
});
