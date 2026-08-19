const maxKDistinct = function (nums, k) {
	const uniqueArr = [...new Set(nums)]

	return uniqueArr.sort((a, b) => b - a).slice(0, k)
}

console.log(maxKDistinct([84, 93, 100, 77, 90], 3))
