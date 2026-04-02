const minMoves = function (nums) {
	const max = nums.reduce((a, num) => Math.max(a, num), -Infinity)

	let result = 0

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === max) {
			continue
		} else {
			result += max - nums[i]
		}
	}

	return result
}

console.log(minMoves([4, 4, 5]))
console.log(minMoves([2, 1, 3]))
