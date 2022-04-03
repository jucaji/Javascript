const eliminarCaracteres = (texto = "", patron = "") => {

    (!texto) ?
    console.warn("No ingresaste palabra o texto"): (!patron) ?
        console.warn("No ingresate patron de caracteres") :
        console.info(texto.replace(new RegExp(patron, "ig"), ""));
}

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xy5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xy5", "xyz");