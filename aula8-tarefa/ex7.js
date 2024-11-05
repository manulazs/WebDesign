function maiornumero(num) {
    let maior = 0;
    for (let index = 0; index < num.length; index++) {
        if(maior < num[index])
            maior = num[index];
    }
    return maior;
}
numero = [1,4,7,2.4,10,10002,0];

console.log(maiornumero(numero));

