const sumIndicesWithKSetBits = function (nums, k) {
	let sum = 0

	for (let index = 0; index < nums.length; index++) {
		if ((index.toString(2).match(/1/g) || []).length === k) {
			sum += nums[index]
		}
	}

	return sum
}

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1))
