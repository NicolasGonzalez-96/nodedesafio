const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo de citas:", err);
            return;
        }

        let citas = JSON.parse(data);
        citas.push(nuevaCita);

        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), err => {
            if (err) {
                console.error("Error al escribir en el archivo de citas:", err);
                return;
            }
            console.log("Cita registrada correctamente.");
        });
    });
}

function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo de citas:", err);
            return;
        }

        const citas = JSON.parse(data);
        console.log("Citas registradas:");
        citas.forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`);
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Tipo de animal: ${cita.animal}`);
            console.log(`Color: ${cita.color}`);
            console.log(`Enfermedad: ${cita.enfermedad}\n`);
        });
    });
}

module.exports = { registrar, leer };
