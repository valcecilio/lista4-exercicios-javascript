let limite, multaPorKilo;
limite = 50;
multaPorKilo = 4;

P = prompt("Quantos quilos de peixe você pescou?");
E = P - limite;

if(E > 0){
    M = E * multaPorKilo;
    document.write("Kg Total: " + P);
    document.write("<br> Kg Excesso: " + E);
    document.write("<br> Multa: R$ " + M);
}else{
    document.write("Kg Total: " + E);
    document.write("<br> Kg Excesso: 0");
    document.write("<br> Multa: R$ 0 ");  
}