console.log("---------------EXERCÍCIO 3 - comissão do vendedor----------------")

let nome_vendedor = prompt("Informe o nome do vendedor");
let cod_peca = prompt("Informe o código da peça");
let preco_unit_peca= prompt("Informe o preço da peça vendida");
let quantidade = prompt("Informe a quantidade vendida");
let comissao;

preco_total = preco_unit_peca*quantidade;
comissao = preco_total*0.05;

console.log("Vendedor: " + nome_vendedor);
console.log("Código da peça: " + cod_peca);
console.log("Preço unitário da peça R$" + preco_unit_peca);
console.log("Peças vendidas " + quantidade);
console.log("Valor total da venda R$" + preco_total);
console.log("Comissão do vendedor: R$" + comissao);

