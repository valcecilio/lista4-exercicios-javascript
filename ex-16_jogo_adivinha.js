console.log("Jogo do adivinha o número");

let numeroJogador, numeroComputador;

numeroComputador = Math.floor(Math.random(0,1) * 10);

console.log(numeroComputador);

numeroJogador = prompt("Tente adivinhar o núemero de 0 a 9");

if(numeroComputador==numeroJogador){
    document.write("Você ganhou! ");
    document.write("<br>");
    document.write("<img src='imagens/feliz.png'> ");
}else{
        document.write("Você perdeu!");
    document.write("<br> ");
    document.write("<img src='imagens/triste.png'> ");
}



