# EXAMEN FINAL – 16 de julio

Este proyecto fue desarrollado como parte del **Examen Final** correspondiente al **16 de julio** en la materia **Taller de Programación II**.

## 🛠️ Funcionalidades implementadas

- ✅ Registro y actualización de vuelos mediante ID y coordenadas (xa, ya, za)
- 📋 Listado completo de los vuelos almacenados
- 📊 Cálculo automático de colisiones entre vuelos a menos de 500 metros de distancia
- 🔔 Notificación simulada por consola en caso de riesgo de colisión
- 🔢 Validación estricta de datos: ID de vuelo con 3 letras + 3 números y coordenadas numéricas
-    Logs con Winston

## 🧪 Tests

- Se implementaron **tests de integración** para los endpoints principales
- Se agregaron **tests unitarios de validación** para asegurar el correcto formato de los datos

## 🖥️ Tecnologías utilizadas

- **Frontend:** HTML, Bootstrap 5, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js (estructura MVC)
- **Persistencia:** En memoria (array interno, modo `MEM`)
- **Herramientas:** Postman (pruebas de endpoints), nodemon, dotenv

## 🌐 Interfaz web

El sistema cuenta con una interfaz web estática (`index.html`) para facilitar la interacción con los endpoints mediante formularios y botones.

## 🔧 Uso de scripts

En el archivo `package.json` se definen los siguientes scripts útiles para ejecutar y testear la aplicación:

| Script           | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `npm start`       | Ejecuta la aplicación en modo producción con Node.js.                     |
| `npm run dev`     | Inicia el servidor con `nodemon` para desarrollo. Ignora archivos JSON.   |
| `npm run start:file` | Inicia el servidor usando persistencia en archivo (`MODO_PERSISTENCIA=FILE`). |
| `npm run start:mem`  | Inicia el servidor usando persistencia en memoria (`MODO_PERSISTENCIA=MEM`). |
| `npm test`        | Ejecuta los tests definidos con **Vitest**.                                |
| `npm run coverage`| Ejecuta los tests y muestra el reporte de **cobertura de código**.         |

> ⚙️ Asegurarse de tener configurado el archivo `.env` correctamente con el valor de `MODO_PERSISTENCIA` si usás los modos de inicio personalizados.


## 📁 DATOS DEL ALUMNO

**Nombre:** Diego Peyrano  
**Materia:** Taller de Programación II  
**Fecha:** 16 de julio  
