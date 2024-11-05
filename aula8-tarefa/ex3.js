let numeros = [50,40,30,20,10];

function foda(num) {
    let foda = 0;
    for (let index = 0; index < num.length; index++) {
        foda += num[index]
    }
    return foda;
}

console.log(foda(numeros));
