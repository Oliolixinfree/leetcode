const areNumbersAscending = function (s) {
	const digits = s.match(/\d+/g)

	for (let i = 0; i < digits.length - 1; i++) {
		if (Number(digits[i]) >= Number(digits[i + 1])) return false
	}

	return true
}

// or
const areNumbersAscending = s =>
	s
		.match(/\d+/g)
		.every((num, i, arr) => i === 0 || Number(num) > Number(arr[i - 1]))

console.log(
	areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles')
)
