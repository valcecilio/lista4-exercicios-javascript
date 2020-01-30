console.log("----- Exercicio 10 - Aluno aprovado ou reprovado -----");
let n1, n2, n3, n4, media;
nome = prompt("Digite o nome do(a) aluno(a)");
n1 = prompt("Digite a nota do 1º bimestre");
n2 = prompt("Digite a nota do 2º bimestre");
n3 = prompt("Digite a nota do 3º bimestre");
n4 = prompt("Digite a nota do 4º bimestre");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

media = (n1+n2+n3+n4)/4;

document.write("A media de " + nome + " é " + media);
if (media>=6){
    document.write("<br><br>Aluno(a) APROVADO(A)");
}else{
    document.write("<br><br>Aluno(a) REPROVADO(A)");
}


