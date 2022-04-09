const numPrimo = (num = undefined) => {
    //if (num) return console.warn("No ingreso ningun numero");
    if (typeof num !== "number") return console.error(`El valor ${num} ingresado no es valido`);
    if (num === 0) return console.error("El numero no puede ser 0");
    if (num === 1) return console.error("El numero no puede ser 1");
    if (Math.sign(num) === -1) return console.error("El numero no puede ser negativo");

    let divisible = false;

    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible) ?
        console.log(`El numero ${num} No es primo`) :
        console.log(`El numero ${num} es primo`);
}

numPrimo();
numPrimo("13");
numPrimo(200);
numPrimo(7);