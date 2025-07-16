import VuelosFile from "./vuelosFile.js";
import VuelosMem from "./vuelosMem.js";
import logger from "../utils/logger.js";

export default class ModelFactory {
  static get(tipo) {
    switch (tipo) {
      case "MEM":
        logger.info("<<<persistencia en memoria>>");
        return new VuelosMem();
      case "FILE":
        logger.info("<<<persitencia en FS>>>");
        return new VuelosFile();
      default:
        return new VuelosMem();
    }
  }
}
