function findClosestNumber(nums) {
	let closestNumber = nums[0]

	for (const num of nums) {
		if (Math.abs(num) < Math.abs(closestNumber)) {
			closestNumber = num
		} else if (
			Math.abs(num) === Math.abs(closestNumber) &&
			num > closestNumber
		) {
			closestNumber = num
		}
	}

	return closestNumber
}

console.log(findClosestNumber([-4, -2, 1, 4, 8]))
