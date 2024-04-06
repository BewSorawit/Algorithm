const twoSum = (nums, tarket) => {
    const numMap = new Map()
    console.log(typeof(numMap));
    for (let i = 0; i < nums.length; i++) {
        const diff = tarket - nums[i]
        if (numMap.has(diff)) {
            return [numMap.get(diff), i]
        }
        numMap.set(nums[i], i)
    }
    console.log();

}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
console.log(twoSum([3, 3], 6));           // Output: [0, 1]