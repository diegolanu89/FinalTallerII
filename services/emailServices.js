import logger from "../utils/logger.js";

export default class EmailService {
  static notificarPosiblesCoalisiones( id ,colisiones) {
    logger.warn(
      `[ALERTA COALISIÓN] Coalisiónes posibles registrada para el vuelo: ${id}`
    );
    logger.warn(
      ` COALISIÓNES] Coalisiónes posibles rcon los siguientes vuelos: ${colisiones}`
    );
    logger.warn(
      `(Simulación) Email enviado a: administrador@gmail.com con asunto: "¡Coalisiónes posibles detectadas!"`
    );
  }

  static notificarVuelo(vuelo){
    logger.warn(
      `[ALERTA COLISIONES] `
    );
  }
}
