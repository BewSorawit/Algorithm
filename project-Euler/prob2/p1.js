// Even Fibonacci Numbers

function fiboEvenSum(n) {
    let a = 1;
    let b = 2;
    let sum = 0
    while (b <= n) {
        if (b % 2 == 0) {
            sum += b;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return sum
}

let x = fiboEvenSum(4000000)
console.log(x);