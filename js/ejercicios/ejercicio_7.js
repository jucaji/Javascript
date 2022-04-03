const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra o frase");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves) ?
        console.info(`Si es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`) :
        console.info(`No es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`);
}

palindromo();
palindromo("hola mundo");
palindromo("salas");