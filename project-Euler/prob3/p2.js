function largestPrimeFactor(number) {

    let factor = 2;
    while (factor * factor <= number) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++
        }
    }
    return number;
}

let x = largestPrimeFactor(600851475143);
console.log(x);
