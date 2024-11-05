let x = "manuel";


console.log(reverter(x));

function reverter(x) {
    let z="";
    for (let y = x.length-1; y >= 0; y--) {
        z += x[y];
        
    }

    return z;
}