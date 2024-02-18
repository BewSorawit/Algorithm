// Sum square difference

function sumSquareDifference(n) {
    let sum_square = 0;
    let square_sum = 0;
    for (let i = 1; i <= n; i++) {
        sum_square += i * i;
        square_sum += i;
    }
    
    return square_sum * square_sum - sum_square;
}

let x = sumSquareDifference(100);
console.log(x);