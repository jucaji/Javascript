const descuento = (precio = "", descuento = "") => {
    if (!precio) return console.warn("No ingreso ningun precio");
    if (!descuento) return console.warn("No ingreso ningun descuento a realizar");

    let descuentoFinal = (precio * descuento) / 100;

    console.info(`El precio del producto que eligio es de $${precio} se va aplicar un descuento del ${descuento}%, 
    el descuento del producto es de $${descuentoFinal} y el precio final del producto es $${precio - descuentoFinal}`);
}
descuento(3000, 10);