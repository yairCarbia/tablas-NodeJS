const yargs = require("yargs")

    .option("t", {
        alias: "tabla",
        type: "number",
        demandOption: true,
        describe: "Es la tabla correspondiente "

    })
    .option("l", {
        alias: "limit",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "Es la habilitacion para mostrar el listado"
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Hasta el numero donde queres la tabla"

    })
    .check((argv, options) => {
        // console.log("yargs", argv);
        if (isNaN(argv.t)) {
            throw "la base tiene que ser un numero rey";
        }
        return true;
    })
    .argv;


module.exports = yargs;
