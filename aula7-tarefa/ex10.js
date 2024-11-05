let x = "aba"

console.log(coiso(x));


function coiso(x) {
    let z = x.length, l = 0;
    for (let y = 0; y < x.length; y++, z--) 
{
    if(x[y] == x[z-1])
        l++;
}

if (l == x.length)
    return true;

else
    return false;
}