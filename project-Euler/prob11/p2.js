function largestGridProduct(arr) {
    let rows = arr.length;
    let cols = arr[0].length;
    let maxProduct = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            let product = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
            maxProduct = Math.max(product, maxProduct)
        }
    }

    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j < cols; j++) {
            let product = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
            maxProduct = Math.max(product, maxProduct)
        }
    }

    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            let product = arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];
            maxProduct = Math.max(product, maxProduct)
        }
    }

    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 3; j < cols; j++) {
            let product = arr[i][j] * arr[i + 1][j - 1] * arr[i + 2][j - 2] * arr[i + 3][j - 3]
            maxProduct = Math.max(product, maxProduct)
        }
    }
    return maxProduct;
}


const testGrid = [
    [777, 100, 81, 18, 57],
    [74, 1000, 36, 16, 29],
    [55, 6, 1000, 6, 45],
    [51, 1, 69, 1000, 92],
    [7, 1, 57, 32, 1]
];

let x = largestGridProduct(testGrid);
console.log(x);