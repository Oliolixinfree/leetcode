const findTheArrayConcVal = function (nums) {
	let concat = []
	let half = nums.length / 2

	if (half % 2 !== 0) {
		nums.splice(Math.floor(half), 0, 0)
		half = nums.length / 2
	}

	for (let i = 0; i < half; i++) {
		concat.push(String(nums[i]) + String(nums[nums.length - 1 - i]))
	}

	return concat.reduce((a, b) => a + +b, 0)
}

// or
const findTheArrayConcVal = function (nums) {
	let result = 0
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		if (left === right) {
			result += nums[left]
		} else {
			const concatenated = String(nums[left]) + String(nums[right])
			result += Number(concatenated)
		}
		left++
		right--
	}

	return result
}

console.log(findTheArrayConcVal([5, 14, 13, 8, 12]))
