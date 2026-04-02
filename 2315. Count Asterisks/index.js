const countAsterisks = function (s) {
	let starCounter = 0
	let lineCounter = 0

	for (const element of s) {
		if (element === '|') {
			lineCounter += 1
		}
		if (element === '*' && lineCounter % 2 === 0) {
			starCounter += 1
		}
	}

	return starCounter
}

console.log(countAsterisks('  l  |*e*et|  c**o  |*de|'))
