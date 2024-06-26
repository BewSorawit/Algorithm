const twoSum = (nums, target) => {
    const numMap = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (numMap.hasOwnProperty(diff)) {
            return [numMap[diff], i]
        }
        numMap[nums[i]] = i
    }
    return []
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
console.log(twoSum([3, 3], 6));           // Output: [0, 1]