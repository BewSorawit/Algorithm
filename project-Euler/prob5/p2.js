// Smallest multiple (LCM)

const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
}
const lcm = (a, b) => {
    return Math.abs(a * b) / gcd(a, b);
}

const smallestMultiple = (n) => {
    let multiple = 1;
    for (let i = 2; i <= n; i++) {
        multiple = lcm(multiple, i);
    }
    return multiple;
}

let x = smallestMultiple(20);
console.log(x);