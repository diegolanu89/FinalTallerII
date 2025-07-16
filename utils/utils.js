import logger from "./logger.js"

export function parseReq(req){
    const data = JSON.stringify(
        {
            method: req.method,
            url: req.originalUrl,
            body: req.body,
            query: req.query,
            params: req.params
          }
    )
    return data
}


export function esRespuestaFallida(mensaje) {
    if(typeof mensaje === "string"){
        if(mensaje.startsWith("No se pudo"))return true
    }else{
        return false
    }
  }
  