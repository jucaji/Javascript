    const capicua = (num = "") => {
        if (!num) return console.warn("No ingreso ningun numero");
        if (num <= 0) return console.warn("El numero ingresado no es valido");

        let alReves = num.toString().split("").reverse().join("");

        return (num.toString() === alReves) ?
            console.info(`Si el numero ${num} es capicua ya que al reves es ${alReves}`) :
            console.info(`No el numero ${num} no es capicua ya que al reves es ${alReves}`);
    }

    capicua(1001);