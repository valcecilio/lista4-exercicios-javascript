console.log(" Cliente banco");

/*let M, H, T;

M = prompt("O cliente adiquiriu mais de 1 milhão? ");
H = prompt("O cliente tem um bom histórico?");
T = prompt("O cliente está conosco a mais de 20 anos?");

if(M==true){
    document.write("O cliente é VIP ");
}else if((H==true)) || (T==true)){
    document.write("O cliente é VIP");        
}else{
    document.write("O cliente é normal");
}

let repetir = "sim";

while(repetir == "sim"){
   nome = prompt("Informe seu nome: ");
   idade = prompt("Informe seu idade: ");
   resposta = (idade>=18) ? "Maior" : "Menor";    
   document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.");


repetir = prompt("Deseja repetir? sim ou não?");
}
*/

let repetir = "sim";

while(repetir == "sim"){
    nome = prompt("Informe o nome do cliente ");
    saldo = prompt("O cliente adiquiriu mais de 1 milhão? ");
    resposta = (saldo="sim") ? "VIP" : "normal"; 
    document.write("<br><br>O cliente " + nome + " é " + resposta + " .");
    //historico = prompt("O cliente tem um bom histórico?");
   // resposta = (historico="sim") ? "Sim" : "Não"; 
   // fidelidade = prompt("O cliente está conosco a mais de 20 anos?");
   // resposta = (fidelidade="sim") ? "Sim" : "Não"; 

repetir = prompt("Deseja repetir? sim ou não?");

  // nome = prompt("Informe seu nome: ");
 //  idade = prompt("Informe seu idade: ");
 //  resposta = (idade>=18) ? "Maior" : "Menor";    
  // document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.");


//repetir = prompt("Deseja repetir? sim ou não?");
}