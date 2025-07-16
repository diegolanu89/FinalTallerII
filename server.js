import express from 'express'
import  Vuelos  from './routes/vuelosRoutes.js'
import logger from "./utils/logger.js";
class Server {
    #port
    #persistencia

    constructor(port, persistencia) {
        this.#port = port
        this.#persistencia = persistencia
    }

    start() {
        // -----------------------------------------------
        //             APLICACIÓN EXPRESS
        // -----------------------------------------------
        const app = express()

        // -----------------------------------------------
        //            MIDDLEWARES EXPRESS
        // -----------------------------------------------
        app.use(express.static('public'))
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))


        // -----------------------------------------------
        //           API RESTful: productos
        // -----------------------------------------------
        app.use('/api/vuelos', new Vuelos(this.#persistencia).start())

        // -----------------------------------------------
        //        LISTEN DEL SERVIDOR EXPRESS
        // -----------------------------------------------
        const PORT = this.#port
        const server = app.listen(PORT, () => logger.info(`Servidor express escuchando en http://localhost:${PORT}`))
        server.on('error', error => logger.info(`Error en servidor: ${error.message}`))
    }
}

export default Server