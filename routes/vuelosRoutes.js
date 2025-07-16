import express from 'express';
import VuelosController from '../controller/vuelosController.js';

export default class Vuelos{

    constructor(persistencia) {
        this.controller = new VuelosController(persistencia)
        this.router = express.Router();
      }
    
      start() {
        this.router.post('/agregar',this.controller.agregar)
        this.router.get('/listar',this.controller.listar)
        this.router.put('/actualizar',this.controller.actualizar)
        this.router.delete('/eliminar',this.controller.eliminar)
        return this.router;
      }
}