console.log("-----Js - Exercicio 7 - 4 operações -----");

A = prompt("Digite um numero.");
B = prompt("Digite outro numero.");

A = parseFloat(A);
B = parseFloat(B);

so = A+B;
su = A-B;
mu = A*B;
di = A/B;

document.write("As 4 operações dos números " 
+ A + " e " + B + " são: ");
document.write("<br> - Soma: " + so + ";");
document.write("<br>- Subtração: " + su + ";");
document.write("<br>- Multiplicação: " + mu + ";");
document.write("<br>- Divisão: " + di + ".");

