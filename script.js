function logger (text) {
/*     console.log( "I am a function")
 */    console.log(text)
}
logger ('hello');
logger ('ciao');
logger ('szia');
/* let text = hello */

function sumTwoNumber (a, b) { // camelCase
    /*  let a = 
        let b = */
    console.log (a + b);
}

/* sumTwoNumber (5, 10);
 */
function sumOfTwoNumbers (x, y) {
    let sum = 0;
    sum = x + y;

    return sum;
}

logger(sumOfTwoNumbers (10, 5));

