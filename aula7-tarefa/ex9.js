let x = "manuel@gmail.com"

console.log(email(x));


function email(x) {
    let z = 0
    for (let y = 0; y < x.length; y++) {
        if(x[y] == '@' || x[y] == '.')
            z++;
        
    }

    if(z == 2)
        return true;

    else
        return false;
}