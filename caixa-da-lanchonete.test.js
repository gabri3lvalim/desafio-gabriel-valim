import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const caixa = new CaixaDaLanchonete();

// Teste de exemplo 1
console.log(caixa.calcularValorDaCompra('debito', ['chantily,1']));


// Teste de exemplo 2
console.log(caixa.calcularValorDaCompra('debito', ['cafe,1', 'chantily,1']));


// Teste de exemplo 3
console.log(caixa.calcularValorDaCompra('credito', ['combo1,1', 'cafe,2']));


// Outros casos de teste
console.log(caixa.calcularValorDaCompra('dinheiro', []));

console.log(caixa.calcularValorDaCompra('debito', []));


console.log(caixa.calcularValorDaCompra('credito', []));


console.log(caixa.calcularValorDaCompra('debito', ['salgado,3', 'queijo,2']));


console.log(caixa.calcularValorDaCompra('credito', ['combo1,1', 'sanduiche,2']));

