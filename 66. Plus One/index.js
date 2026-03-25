const plusOne = function (digits) {
	let carry = 1
	for (let i = digits.length - 1; i >= 0; i--) {
		digits[i] += carry
		carry = 0

		if (digits[i] === 10) {
			digits[i] = 0
			carry = 1
		}

		if (carry === 0) break
	}

	if (carry === 1) {
		digits.unshift(1)
	}

	return digits
}

console.log(plusOne([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(plusOne([1, 2, 3]))
