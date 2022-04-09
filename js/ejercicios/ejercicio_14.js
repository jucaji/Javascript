const grados = (cels = "", faren = "") => {

    if (!cels) return console.warn("No ingreso grados celcius");

    if (!faren) return console.warn("No ingreso grados farenheit");

    let farenheit = Math.round((cels * 1.8) + 32);
    let celcius = Math.round((faren - 32) / 1.8);

    console.info(`${cels} grados Celcius equivale a ${farenheit} grados farenheit`);
    console.info(`${faren} grados Farenheit equivalen a ${celcius} grados Celcius`);
}
grados(20, 100);