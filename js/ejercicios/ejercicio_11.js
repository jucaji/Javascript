/* const factorial = (n = "") => {

    if (!n) return console.warn("No ingreso ningun numero");
    if (typeof n !== "number") return console.error(`El valor ${num} ingresado no es valido`);
    if (n === 0) return console.error("El numero no puede ser 0");
    if (Math.sign(n) === -1) return console.error("El numero no puede ser negativo");

    let r = 1;
    for (let i = n; i > 1; i--) {
        r *= i;
    }
    console.log(r);
}
factorial(4); */

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        console.log("A");
    }
    if (score > 20 && score <= 25) {
        console.log("B");
    }
    if (score > 15 && score <= 20) {
        console.log("C");
    }
    if (score > 5 && score <= 10) {
        console.log("D");
    }
    if (score > 0 && score <= 5) {
        console.log("F");
    }
    return grade;
}
getGrade(15);