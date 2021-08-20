const fs = require("fs");
const path = require("path");

class archivo {
  constructor(id, title, price, thumbnail) {
    (this.id = id),
      (this.title = title),
      (this.price = price),
      (this.thumbnail = thumbnail);
  }
}

// try {
const ruta = "./producto/productos.txt";

const datos = fs.readFileSync(ruta, "utf-8");

console.log(datos);

// const archivoNuevo = "./resultadoTarea6.txt";

const guardar = async (title, price, thumbnail) => {
  try {
    let arreglo = [];
    let id = 1;
    const data = await fs.promises.readFile(ruta, "utf-8");
    if (data) {
      const jData = JSON.parse(data);
      id = jData.length + 1;
      arreglo.push(...jData);
    }
    const nuevo = new archivo(id, title, price, thumbnail);
    arreglo.push(nuevo);
    console.log(arreglo);
    await fs.promises.writeFile(ruta, JSON.stringify(arreglo, null, "\t"));
  } catch (error) {
    console.log(error);
  }
};

const leer = async () => {
  const data = await fs.promises.readFile(ruta, "utf-8");
  if (data) {
    const jData = JSON.parse(data);
  }
  console.log(data);
};

const borrar = async () => {
  await fs.promises.unlink(ruta);
  console.log("borrado");
}

guardar("Moto1", 2100, "imagen");
leer();
// borrar();
