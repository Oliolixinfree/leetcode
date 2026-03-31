const minOperations = function (nums, k) {
	let maxNumIdx = nums.indexOf(Math.max(...nums))
	let operationsCounter = 0

	let sum = 0
	for (const num of nums) {
		sum += num
	}

	while (true) {
		if (sum % k === 0) return operationsCounter

		if (sum <= k) return (operationsCounter += sum)

		if (nums[maxNumIdx] === 0) {
			maxNumIdx = nums.indexOf(Math.max(...nums))
		}

		nums[maxNumIdx] -= 1
		sum--
		operationsCounter++
	}
}

// optimized
const minOperations = function (nums, k) {
	const sum = nums.reduce((a, b) => a + b, 0)
	const remainder = sum % k

	if (remainder === 0) return 0

	return remainder
}

console.log(minOperations([3, 9, 7], 5))
console.log(minOperations([4, 1, 3], 4))
console.log(minOperations([3, 2], 6))
