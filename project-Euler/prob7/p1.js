// Problem 7: 10001st prime
const nthPrime = (n) => {
    if (n == 1) {
        return 2;
    }

    let count = 1;
    let candidate = 3;

    while (true) {
        if (isPrime(candidate)) {
            count++;
            if (count === n) {
                return candidate;
            }
        }
        candidate += 2;
    }
}

const isPrime = (num) => {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let x = nthPrime(10001);
console.log(x);
