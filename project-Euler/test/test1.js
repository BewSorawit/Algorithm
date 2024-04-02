function largestGridProduct(arr) {
    let rows = arr.length;
    let cols = arr[0].length;
    let maxProduct = 0;

    // Check horizontally
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols - 3; j++) {
            let product = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check vertically
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 0; j < cols; j++) {
            let product = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check diagonally (top-left to bottom-right)
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 0; j < cols - 3; j++) {
            let product = arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check diagonally (top-right to bottom-left)
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 3; j < cols; j++) {
            let product = arr[i][j] * arr[i + 1][j - 1] * arr[i + 2][j - 2] * arr[i + 3][j - 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    return maxProduct;
}