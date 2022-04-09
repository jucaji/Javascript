    const capicua = (num = 0) => {
        if (!num) return console.warn("No ingreso ningun numero");
        if (num <= 0) return console.warn("El numero ingresado no es valido");
        if (typeof num !== "number") return console.error(`El valor ${num} ingresado, NO es numero`);

        let alReves = num.toString().split("").reverse().join("");

        return (num === alReves) ?
            console.info(`Si el numero ${num} es capicua ya que al reves es ${alReves}`) :
            console.info(`No el numero ${num} no es capicua ya que al reves es ${alReves}`);
    }

    capicua(1001);