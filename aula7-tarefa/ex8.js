let x = "manuel";

console.log(vogal(x));


function vogal(x) {
    let z = 0
    for (let y = 0; y < x.length; y++) {
        if (x[y] == 'a' || x[y] == 'e' || x[y] == 'i' || x[y] == 'o' || x[y] == 'u' ) {
            z++;
        }
    
    }
    return z;
}