/* function repetir(cadena = "") {
    if (!cadena) {
        console.log("No hay cadena de texto");
    } else {
        console.info(`La palabra ${cadena} se repite "${cadena.repeat(4)}"`)
    }
}
repetir("Hola mundo");
 */
const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingreso texto");

    if (veces === undefined) return console.warn("No ingresaste el numero de veces a repetir");

    if (veces === 0) return console.warn("El numero de veces no puede ser cero");

    if (Math.sign(veces) === -1) return console.warn("El numero de veces no puede ser negativo");

    for (let i = 1; i <= veces; i++) console.info(`${texto},${i}`);
}

repetirTexto("Hola Mundo", 5);
repetirTexto("", 4);
repetirTexto("Hi world", 0);
repetirTexto("Ironman", -38);
repetirTexto("Hi World");