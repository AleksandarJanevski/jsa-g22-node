
function c2f (temp) {
    return (temp*1.8+32);
}


function f2c(temp) {
    return (((temp-32)*5)/9);
}

let res1 = c2f(12)
console.log(res1);
let res2 = f2c(100)
console.log(res2);

const fun = (parm, c) =>{
    let r = parm(c) +100
    return r
}

console.log('FUN:',fun(c2f,12));
