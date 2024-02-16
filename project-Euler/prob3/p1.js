// Largest prime factor

function largestPrimeFactor(number) {
    let start = 2;
    let result = 0;

    while (number !== 1) {
        if (number % start === 0) {
            result = start;
            number /= start;
        } else {
            start++;
        }
    }

    return result;
}

let x = largestPrimeFactor(600851475143);
console.log(x);
