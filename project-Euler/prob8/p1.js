function largestProductinaSeries(n) {
    let thousandDigits = [1, 4, 2, 10, 8, 2];
    let maxProduct = 0;
    for (let i = 0; i < thousandDigits.length - n + 1; i++) {
        let currProduct = 1;
        for (let j = i; j < i + n; j++) {
            currProduct *= thousandDigits[j];
        }
        maxProduct = Math.max(maxProduct, currProduct)
    }
    return maxProduct;
}

let x = largestProductinaSeries(3);
console.log(x); 
