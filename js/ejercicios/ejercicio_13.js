const parImpar = (num = undefined) => {
    if (num === undefined) return console.warn("No ingresaste ningun numero");
    if (typeof num !== "number") return console.error(`El valor ${num} no es valido`);

    (num % 2 === 0) ?
    console.info(`El numero ingresado es ${num} y este es Par`):
        console.info(`El numero ingresado es ${num} y este es Impar`);
}

parImpar(2);