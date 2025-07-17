import ModelFactory from "../models/vuelosFactory.js";
import logger from "../utils/logger.js";
import EmailService from "./emailServices.js";
import { ValidadorVuelos } from "./validadorVuelos.js";

export default class VuelosServices {
  constructor(persistencia) {
    this.persistencia = ModelFactory.get(persistencia);
  }

  async agregar(vuelo) {
    const { id, xa, ya, za } = vuelo;
    try {
      ValidadorVuelos.ValidarVuelo(vuelo);
    } catch (e) {
      logger.error(`No se pudo guardar el vuelo: ${e.message}`);
      return `No se pudo guardar el vuelo: ${e.message}`;
    }
    const vuelosActuales = await this.persistencia.listar();

    const vueloExistente = vuelosActuales.find((v) => v.id === id);
    if (vueloExistente) {
      await this.persistencia.actualizar({ id, xa, ya, za });
    } else {
      await this.persistencia.agregar({ id, xa, ya, za });
    }
    
    const colisiones = ValidadorVuelos.detectarColisiones(
      { id, xa, ya, za },
      vuelosActuales
    );

    if (colisiones.length > 0) {
      EmailService.notificarPosiblesCoalisiones(id,colisiones);
      return {
        mensaje: "Vuelo guardado y alertado",
        colisiones,
      };
    }

    return {
      mensaje: `Vuelo guardado: ${id}`,
      colisiones: [],
    };
  }

  async listar() {
    return await this.persistencia.listar();
  }

  async actualizar(vuelo) {
    try {
      ValidadorVuelos.ValidarVuelo(vuelo);
      return await this.persistencia.actualizar(vuelo);
    } catch (e) {
      logger.error(`No se pudo actualizar: ${e.message}`);
      return `No se pudo actualizar: ${e.message}`;
    }
  }

  async eliminar(id) {
    try {
      return await this.persistencia.eliminar(id);
    } catch (e) {
      logger.error(`No se pudo eliminar: ${e.message}`);
      return `No se pudo eliminar: ${e.message}`;
    }
  }
}
