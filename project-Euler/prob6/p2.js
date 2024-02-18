// Sum square difference

const sumSquareDifference = (n) => {
    // Calculate sum of squares using the formula n * (n + 1) * (2n + 1) / 6
    const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

    // Calculate square of sum using the formula (n * (n + 1) / 2) ^ 2
    const squareOfSum = Math.pow((n * (n + 1) / 2), 2);

    // Calculate the difference
    const difference = squareOfSum - sumOfSquares;

    return difference;
}

let x = sumSquareDifference(100);
console.log(x);