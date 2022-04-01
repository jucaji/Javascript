function caracter(cadena = "") {

    if (!cadena) {
        console.log("No se ingreso cadena de texto");
    } else {
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}
caracter("Hola este un gran mundo");