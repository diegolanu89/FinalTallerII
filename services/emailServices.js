import logger from "../utils/logger.js";

/*En caso de registrar una temperatura menor a: 0 kelvin ó -273 celsius ó -460
farenheit,*/

export default class EmailService {
  static notificarTemperaturaImposible({ temperatura, tipo }) {
    logger.warn(
      `[ALERTA CIENTÍFICA] Temperatura imposible registrada: ${temperatura} ${tipo}.`
    );
    logger.warn(
      `(Simulación) Email enviado a: administrador@gmail.com con asunto: "¡Temperatura imposible detectada!"`
    );
  }

  static notificarVuelo(vuelo){
    logger.warn(
      `[ALERTA VUELO] `
    );
  }
}
