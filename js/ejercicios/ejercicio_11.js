const factorial = (num = "") => {

    if (!num) return console.warn("No ingreso ningun numero");
    if (num <= 0) return console.warn("El numero ingresado no es valido");

    let r = 1;
    for (let i = num; i > 0; i--) {
        r *= i;
    }
    console.info(`El factorial del numero ${num} es ${r}`);
}
factorial(5);