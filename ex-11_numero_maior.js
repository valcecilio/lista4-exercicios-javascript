console.log(" O número maior")


let n1, n2, n3;

n1 = prompt("Informe um número ");
n2 = prompt("Informe outro número ");
n3 = prompt("Informe mais um número para finalizar");

console.log(n1>=n2) && (n1>=n3);
console.log(n2>=n3) && (n2>=n1);

if((n1>=n2) && (n1>=n3)){
    document.write("O número " + n1 + " é o maior <br> ");
}else if((n2>=n3) && (n2>= n1)){
    document.write("O número " + n2 + " é o maior <br> ");        
}else{
    document.write("O número " + n3 + " é o maior <br> ");
}
