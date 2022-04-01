function arreglo(cadena = "") {

    if (!cadena) {
        console.warm("La cadena de texto esta vacia");
    } else {
        console.info(`La cadena de texto que ingreso es ${cadena} y al separar a un array queda "${cadena.split(' ')}"`);
    }
}
arreglo("Hola que tal");