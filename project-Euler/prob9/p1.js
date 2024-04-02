function specialPythagoreanTriplet(n) {
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            let c = n - a - b;
            if (a * a + b * b === c * c) {
                return a*b*c
            }
        }
    }
    return null;
}


const x = specialPythagoreanTriplet(24);
console.log(x);