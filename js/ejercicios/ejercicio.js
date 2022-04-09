// Ejercio crear una cruz que se imprima en pantalla
// prueba de entrevista
/* 
const cruz = (n = undefined) => {
    if (n === 0) return console.error("No puede ser cero")
    let resultado = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultado += (j == i || j == n - i - 1) ?
                "X" : "_";
        }
        resultado += "\n";
    }
    return console.log(resultado);
}
cruz(5);
cruz(0); */


/* const sum = (array = []) => {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    console.log(suma);
}
sum([1, 2, 3, 4, 10, 11]); */
/* 
const array = [1, 2, 3, 4, 10, 11];
let suma = 0;

for (let i = 0; i < array.length; i++) {
    suma += array[i];
}
console.log(suma);

const array2 = [1, 2, 3, 4, 10, 11];
let sum = 0;

for (let i = 0; i < array2.length; i++) {
    sum += array[i];
}
console.log(sum); */

const factorial = (n) => {
    let r = 1;
    for (let i = n; i > 1; n--) {
        r *= i;
    }
    console.log(r);
}
factorial(4);