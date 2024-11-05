function impar(num)
{
    for (let index = 0; index < num.length; index++) {
        if (num[index] % 2 != 0) {
            console.log(num[index]);
            
        }
        
    }
}

let numero = [1,2,3,4,5];

impar(numero);