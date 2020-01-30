console.log(" O quadrado da soma dos números")

let numero1 = prompt("Informe um número");
let numero2 = prompt("Informe outro número");
let numero3 = prompt("Informe mais outro número");
let numero4 = prompt("Informe mais um número para finalizar");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);
numero4 = parseFloat(numero4);

let total = (numero1*numero1)+(numero2*numero2)+(numero1*numero1)+(numero2*numero2);

console.log(" O quadrado da soma dos números digitados é "+ total);
console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));