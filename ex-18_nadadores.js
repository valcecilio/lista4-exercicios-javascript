let nome, idade;

nome = prompt("Qual o nome do nadador?");
idade = prompt("Qual a idade do nadador?");


if(idade < 5){
    document.write("Idade de " + nome + " não é permitida para nenhuma categoria!");
}else if((idade >=5) && (idade <=7)){
    document.write("O nadador " + nome + " é da Categoria Infantil A");
}else if((idade >=8) && (idade <= 10)){
    document.write("O nadador ", nome, " é da Categoria Infantil B");
}else if((idade >=11 ) && (idade <= 13)){
    document.write("O nadador " + nome + " é da Categoria Juvenil A");
}else if((idade >= 14) && (idade <= 17)){
    document.write("O nadador " + nome + " é da Categoria Infantil B");
}else{
    document.write("O nadador " + nome + " é Adulto, maior de 18 anos.");
}
