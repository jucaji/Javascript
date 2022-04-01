function recortar(cadena = "", longitud = undefined) {
    if (!cadena) {
        console.warn("No se ingreso cadena de texto");
    } else {
        console.info(`El texto que se ingreso es ${cadena} y al recortar el texto queda "${cadena.slice(0,longitud)}"`);
    }
}
recortar("Hello world", 4);

//Validaciones de posibles errores