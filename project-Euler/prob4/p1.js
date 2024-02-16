// Largest palindrome product

function isPalindrome(num) {
    num = num.toString();
    return num === num.split("").reverse().join("");
}

function largestPalindromeProduct(n) {
    const maxNumber = Math.pow(10, n) - 1;
    const minNumber = Math.pow(10, n - 1);
    let largestPalindrome = 0;

    for (let i = maxNumber; i >= minNumber; i--) {
        for (let j = i; j >= minNumber; j--) {
            const product = i * j;

            if (product <= largestPalindrome) {
                // No need to continue with smaller j values
                break;
            }

            if (isPalindrome(product)) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}

let x = largestPalindromeProduct(3);
console.log(x);
