import { describe, it, expect, beforeEach, vi } from "vitest";
import VuelosController from "../controller/vuelosController.js";

function createMockReqRes(body = {}) {
  const req = { body };
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn(),
  };
  return { req, res };
}

describe("Test de integración del controlador de vuelos", () => {
  let controller;

  beforeEach(() => {
    const persistencia = "memoria";
    controller = new VuelosController(persistencia);
  });

  it("Agrega vuelo válido sin colisiones", async () => {
    const { req, res } = createMockReqRes({
      id: "ABC123",
      xa: 1000,
      ya: 2000,
      za: 3000,
    });

    await controller.agregar(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: expect.objectContaining({
        mensaje: expect.stringContaining("Vuelo guardado"),
        colisiones: [],
      }),
    });
  });

  it("Rechaza vuelo con ID inválido", async () => {
    const { req, res } = createMockReqRes({
      id: "123ABC",
      xa: 1000,
      ya: 2000,
      za: 3000,
    });

    await controller.agregar(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      errorMsg: expect.stringContaining("No se pudo guardar"),
    });
  });

  it("Lista vuelos existentes", async () => {
    const req = {};
    const res = {
      json: vi.fn(),
    };

    await controller.listar(req, res);

    expect(res.json).toHaveBeenCalledWith({
      vuelos: expect.any(Array),
    });
  });
});
