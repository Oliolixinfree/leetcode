const findMiddleIndex = function (nums) {
	let middle = 0
	let leftSum = 0
	let rigthSum = 0

	for (let i = 0; i < nums.length; i++) {
		leftSum = nums.slice(0, middle).reduce((a, n) => a + n, 0)
		rigthSum = nums.slice(middle + 1, nums.length).reduce((a, n) => a + n, 0)

		if (leftSum === rigthSum) return middle

		middle++
	}

	return -1
}

// or optimized

const findMiddleIndex = function (nums) {
	const totalSum = nums.reduce((a, n) => a + n, 0)
	let leftSum = 0

	for (let i = 0; i < nums.length; i++) {
		const rightSum = totalSum - leftSum - nums[i]

		if (leftSum === rightSum) return i

		leftSum += nums[i]
	}

	return -1
}

console.log(findMiddleIndex([2, 3, -1, 8, 4]))
console.log(findMiddleIndex([1, -1, 4]))
console.log(findMiddleIndex([2, 5]))
