function fiboEvenSum(n) {
    let [sum, a, b] = [0, 1, 2];
    while (b <= n) {
        sum += (b % 2 === 0) ? b : 0;
        [a, b] = [b, a + b];
    }
    return sum
}

let x = fiboEvenSum(4000000)
console.log(x);