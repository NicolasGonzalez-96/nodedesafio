const { registrar, leer } = require('./operaciones');
const fs = require('fs');
const args = process.argv.slice(2);

const operacion = args[0];

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = args.slice(1);
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no válida. Las operaciones válidas son 'registrar' y 'leer'.");
}
