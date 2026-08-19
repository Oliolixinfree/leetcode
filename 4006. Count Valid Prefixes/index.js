const countValidPrefixes = function (s) {
	let zeros = 0
	let ones = 0
	let res = 0

	for (const char of s) {
		if (char === '0') zeros++
		else ones++

		if (Math.abs(zeros - ones) <= 1) {
			res++
		}
	}

	return res
}

console.log(countValidPrefixes('00101'))
console.log(countValidPrefixes('101'))
