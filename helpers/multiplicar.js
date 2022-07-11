const fs = require("fs");
require("colors");
const crearArchivo = async (tabla = 5, listar = false, hasta = 10) => {
    try {


        let salida, consola = " ";
        for (let i = 1; i <= hasta; i++) {
            salida += `${tabla} x ${i} = ${tabla * i}\n`;
            consola += `${tabla}${" x".green} ${i} ${"=".green} ${tabla * i} \n`;

        }
        if (listar) {
            console.log("============".rainbow);
            console.log(`Tabla del ${tabla}`.green);
            console.log("============".rainbow);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla${tabla}.txt`, salida);
        return `tabla-${tabla}.txt creada`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}