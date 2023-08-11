class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
        class CaixaDaLanchonete {
            constructor() {
                this.cardapio = {
                    cafe: { descricao: "Café", valor: 3.00 },
                    chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
                    suco: { descricao: "Suco Natural", valor: 6.20 },
                    sanduiche: { descricao: "Sanduíche", valor: 6.50 },
                    queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
                    salgado: { descricao: "Salgado", valor: 7.25 },
                    combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
                    combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
                };
        
                this.formasDePagamento = ["dinheiro", "debito", "credito"];
            }
        
            calcularValorDaCompra(formaDePagamento, itens) {
                if (!this.formasDePagamento.includes(formaDePagamento)) {
                    return "Forma de pagamento inválida!";
                }
        
                if (itens.length === 0) {
                    return "Não há itens no carrinho de compra!";
                }
        
                let valorTotal = 0;
                let temPrincipal = false;
        
                for (const itemPedido of itens) {
                    const [codigo, quantidade] = itemPedido.split(',');
                    const item = this.cardapio[codigo];
        
                    if (!item) {
                        return "Item inválido!";
                    }
        
                    if (itemPedido.includes('extra') && !temPrincipal) {
                        return "Item extra não pode ser pedido sem o principal.";
                    }
        
                    valorTotal += item.valor * parseInt(quantidade);
        
                    if (!itemPedido.includes('extra')) {
                        temPrincipal = true;
                    }
                }
        
                if (!temPrincipal) {
                    return "Quantidade inválida!";
                }
        
                if (formaDePagamento === "dinheiro") {
                    valorTotal *= 0.95; // Aplicar desconto de 5% para pagamento em dinheiro
                } else if (formaDePagamento === "credito") {
                    valorTotal *= 1.03; // Acréscimo de 3% para pagamento com crédito
                }
        
                return "R$ " + valorTotal.toFixed(2).replace('.', ',');
            }
        }
        
    }
}
