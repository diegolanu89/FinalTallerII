import { promises as fs } from 'fs';
const FILE_PATH = 'vuelos.json';

export default class VuelosFile {
  constructor() {
    this.filePath = FILE_PATH;
  }

  async #leerArchivo() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (e) {
      if (e.code === 'ENOENT') {
        await fs.writeFile(this.filePath, '[]');
        return [];
      }
      throw new Error('Error al leer el archivo de vuelos');
    }
  }

  async #guardarArchivo(data) {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
  }

  async agregar(vuelo) {
    const vuelos = await this.#leerArchivo();
    vuelos.push(vuelo);
    await this.#guardarArchivo(vuelos);
  }

  async listar() {
    return await this.#leerArchivo();
  }

  async actualizar(value) {
    const vuelos = await this.#leerArchivo();
    const index = vuelos.findIndex((t) => t.id === value.id);
    if (index !== -1) {
      vuelos[index] = value;
      await this.#guardarArchivo(vuelos);
      return "Vuelo actualizado:" + JSON.stringify(vuelos[index]);
    } else {
      throw new Error("No existe el vuelo a actualizar");
    }
  }

  async eliminar(id) {
    const vuelos = await this.#leerArchivo();
    const index = vuelos.findIndex((t) => t.id === id);
    if (index !== -1) {
      vuelos.splice(index, 1);
      await this.#guardarArchivo(vuelos);
      return "Vuelo eliminado";
    } else {
      throw new Error("No existe el vuelo a eliminar");
    }
  }
}
