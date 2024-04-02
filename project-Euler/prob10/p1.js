function isPrime(n) {
    if (n < 2) {
        return false;
    } else if (n === 2 || n === 3) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function primeSummation(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum

}

// let x = isPrime(17)
// console.log(x);
let y = primeSummation(2000000);
console.log(y);