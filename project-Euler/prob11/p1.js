function largestGridProduct(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    let maxProduct = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols - 4 + 1; j++) {
            let product = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }
    for (let i = 0; i < rows - 4 + 1; i++) {
        for (let j = 0; j < cols; j++) {
            let product = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    for (let i = 0; i < rows - 4 + 1; i++) {
        for (let j = 0; j < cols - 4 - 1; j++) {
            let product = arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    for (let i = 0; i < rows - 4 + 1; i++) {
        for (let j = 3; j < cols; j++) {
            let product = arr[i][j] * arr[i + 1][j - 1] * arr[i + 2][j - 2] * arr[i + 3][j - 3]
            maxProduct = Math.max(maxProduct, product)
        }
    }

    return maxProduct
}



const testGrid = [
    [40, 17, 81, 18, 1000,2],
    [74, 4, 36, 1000, 29,6],
    [36, 42, 1000, 73, 45,5],
    [51, 1000, 69, 16, 92,555],
    [7, 97, 57, 32, 16,55]
];

let x = largestGridProduct(testGrid);
console.log(x);