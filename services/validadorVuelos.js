


export class ValidadorVuelos {
  
  static ValidarVuelo(vuelo) {
    if (!this.esNumero(vuelo.xa)||!this.esNumero(vuelo.ya)||!this.esNumero(vuelo.za)) {
      throw new Error("Todas Las coordenadas deben ser numéricas.");
    }

    if (!this.esIdValido(vuelo.id)) {
      throw new Error("El formato de id es inválido. Debe ser ej:'AAA111'");
    }
  }

  static esIdValido(codigo) {
    return /^[A-Z]{3}\d{3}$/.test(codigo);
  }

  static esNumero(valor) {
    return typeof valor === "number" && !isNaN(valor);
  }

  /**
   * Ejemnplo para probar en postman
   * POST /api/vuelos/agregar
{
  "id": "AAA001",
  "xa": 100,
  "ya": 100,
  "za": 100
}

{
  "id": "AAA001",
  "xa": 120,
  "ya": 105,
  "za": 110
}
   */
  static detectarColisiones(vueloNuevo, vuelosActuales) {
    const colisiones = [];

    for (const otroVuelo of vuelosActuales) {
      if (otroVuelo.id === vueloNuevo.id) continue; // Ignorar el mismo vuelo

      const distancia = Math.sqrt(
        Math.pow(vueloNuevo.xa - otroVuelo.xa, 2) +
        Math.pow(vueloNuevo.ya - otroVuelo.ya, 2) +
        Math.pow(vueloNuevo.za - otroVuelo.za, 2)
      );

      if (distancia < 500) {
        colisiones.push(otroVuelo.id);
      }
    }

    return colisiones;
  }

  
}
