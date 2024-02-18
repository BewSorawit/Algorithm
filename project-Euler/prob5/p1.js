// Smallest multiple (LCM)

function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function smallestMult(n) {
    let multiple = 1;
    for (let i = 2; i <= n; i++) {
        multiple = lcm(multiple, i);
    }
    return multiple;
}

let x = smallestMult(20);
console.log(x);