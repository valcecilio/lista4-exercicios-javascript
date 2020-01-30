let A = 999;
let B = 555;
let C = 0;

console.log("Conteúdo inicial " + A);
console.log("Conteúdo secundário " + B);

console.log("trocando...");

console.log("A = " + A);
console.log("B = " + B);

C = A;
A = B;
B = C;

console.log("trocado");
console.log("A = " + A);
console.log("B = " + B);

