
const colors = require("colors");
const { argv, option, boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const yargs = require("./config/yargs");

console.clear();
// console.log(process.argv);
// console.log(yargs);




// let tabla = 12;
crearArchivo(yargs.t, yargs.l, yargs.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado"))
    .catch(err => console.log(err));

//Ej tomar valor pro consola
// const [, , arg3 = "base=5"] = process.argv;
// const [, tabla = "5"] = arg3.split("=");