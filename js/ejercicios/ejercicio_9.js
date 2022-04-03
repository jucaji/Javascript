const aleatorio = (min = "", max = "") => {

    let aleatorio = Math.random() * (max - min + 1) + min;
    console.info(`El rango minimo de busqueda es ${min + 1} y el rango maximo de busqueda es ${max}, 
    el numero aleatorio hallado es ${Math.ceil(Math.round(aleatorio))}`);
}
aleatorio(500, 600);