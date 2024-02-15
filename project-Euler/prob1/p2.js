// Multiples of 3 or 5
function multiplesOf3Or5(number) {
    let sum = 0;
    for (let i = 3; i < number; i++) {
        sum += (i % 3 === 0 || i % 5 === 0) ? i : 0
    }
    return sum;
}

x = multiplesOf3Or5(19564);
console.log(x);