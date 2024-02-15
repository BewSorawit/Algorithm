// Multiples of 3 or 5
function multiplesOf3Or5(number) {
    let sum = 0;
    for (let i = 3; i < number; i += 3) {
        if (i % 5 !== 0) {
            sum += i
        }
    }
    for (let i = 5; i < number; i += 5) {
        sum += i;
    }
    return sum;
}

x = multiplesOf3Or5();
console.log(x);