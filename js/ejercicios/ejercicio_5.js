function reverso(cadena = "") {
    if (!cadena) {
        console.warn("No se ingreso cadena de texto");
    } else {

        console.info(`La palabra es ${cadena} al implementar el metodo de reverso queda ${cadena.split("").reverse("").join("")}`)
    }

}
reverso("Julian Jimenez");

// funcion expresda

const invertirCadena = (cadena = "") =>
    (!cadena) ?
    console.warn("Esta vacia la cadena de texto") :
    console.info(cadena.split("").reverse().join(""));
invertirCadena("Hola Mundo");