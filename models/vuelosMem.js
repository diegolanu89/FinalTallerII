export default class VuelosFile {
  constructor() {
    this.vuelos = [];
  }

  async agregar(vuelo) {
    this.vuelos.push(vuelo);
  }

  async listar(){
    return this.vuelos
  }

  async actualizar(value) {
    const index = this.vuelos.findIndex((t) => t.id === value.id);
    if (index !== -1) {
      this.vuelos[index] = value;
      return "Vuelo actualizado:" + JSON.stringify(this.vuelos[index])
    } else {
      throw new Error("No existe el vuelo a actualizar");
    }
  }

  async eliminar(id) {
    const index = this.vuelos.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.vuelos.splice(index, 1);
      return "Vuelo eliminado"
    } else {
      throw new Error("No existe el vuelo a eliminar");
    }
  }
}
