const minimumChairs = function (s) {
	let max = 0
	let counter = 0

	for (const element of s) {
		if (element === 'E') {
			counter++
		} else {
			counter--
		}

		if (counter > max) {
			max = counter
		}
	}

	return max
}

console.log(minimumChairs('EEEEEEE'))
console.log(minimumChairs('ELELEEL'))
console.log(minimumChairs('ELEELEELLL'))
