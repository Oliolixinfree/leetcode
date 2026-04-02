const minStartValue = function (nums) {
	let startValue = 0
	let maxMinus = 0

	for (let i = 0; i < nums.length; i++) {
		startValue += nums[i]
		if (startValue <= maxMinus) {
			maxMinus = startValue
		}
	}

	return maxMinus >= 0 ? 1 : 1 - maxMinus
}

console.log(minStartValue([-3, 2, -3, , 4, 2]))
