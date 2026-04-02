const buildArray = function (nums) {
	const res = []

	for (let i = 0; i < nums.length; i++) {
		res.push(nums[nums[i]])
	}

	return res
}

//or

const buildArray = function (nums) {
	return nums.map(i => nums[i])
}

console.log(buildArray([0, 2, 1, 5, 3, 4]))
console.log(buildArray([5, 0, 1, 2, 3, 4]))
