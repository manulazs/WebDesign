let produto =
{
    nome:"laranja",
    qnt:50,
    preço:2.5,
    CalcularTotal(qnt) {
        return this.qnt*this.preço;
    }
};

console.log(produto.CalcularTotal());
