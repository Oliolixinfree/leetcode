const twoSum = function (nums, target) {
	const note = {}
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		if (note[complement] !== undefined) {
			return [note[complement], i]
		}
		note[nums[i]] = i
	}
}

console.log(twoSum([2, 11, 15, 7], 9))
// console.log(twoSum([3, 2, 4], 6))
