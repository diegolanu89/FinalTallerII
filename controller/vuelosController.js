import VuelosSevices from "../services/vuelosServices.js";
import logger from "../utils/logger.js";
import { parseReq, esRespuestaFallida } from "../utils/utils.js";

export default class VuelosController {
  constructor(persistencia) {
    this.service = new VuelosSevices(persistencia);
    this.agregar = this.agregar.bind(this);
    this.listar = this.listar.bind(this);
    this.actualizar = this.actualizar.bind(this);
    this.eliminar = this.eliminar.bind(this);
  }

  /**
   * id: “AAB001”,      // id del número de vuelo 
    xa: 7500,    // en metros (coordenada x) 
    ya: 6200,    // en metros (coordenada y) 
    za: 1000     // en metros (coordenada z) 
}   
   */
  async agregar(req, res) {
    logger.info("Agregando vuelo:" + parseReq(req));
    const { id, xa, ya, za } = req.body;
    const result = await this.service.agregar({ id, xa, ya, za });
    if (esRespuestaFallida(result)) {
      res.status(400).json({ errorMsg: result });
    } else {
      res.status(200).json({ mensaje: result });
    }
  }

  async listar(req, res) {
    logger.info("Solicitando lista de vuelos");
    const vuelos = await this.service.listar();
    res.json({ vuelos });
  }

  /**
   * Aclaración: Podría usar por separado pero teniendo en cuenta la consigna puedo hacer todo trnauilamente con solo el agregar
   */
  async actualizar(req, res) {
    logger.info("Solicitando actualizar:" + parseReq(req));
    const { id, xa, ya, za } = req.body;
    const result = await this.service.actualizar({ id, xa, ya, za });
    if (esRespuestaFallida(result)) {
      res.status(400).json({ errorMsg: result });
    } else {
      res.status(200).json({ mensaje: result });
    }
  }

  async eliminar(req, res) {
    logger.info("Eliminando vuelo:" + parseReq(req));
    const { id } = req.body;
    const result = await this.service.eliminar(id);
    if (esRespuestaFallida(result)) {
      res.status(400).json({ errorMsg: result });
    } else {
      res.status(200).json({ mensaje: result });
    }
  }
}
