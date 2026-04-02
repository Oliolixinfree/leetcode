const slowestKey = function (releaseTimes, keysPressed) {
	const chars = keysPressed.split('')

	let bestKey = chars[0]
	let bestDuration = releaseTimes[0]

	for (let i = 1; i < keysPressed.length; i++) {
		if (releaseTimes[i] - releaseTimes[i - 1] > bestDuration) {
			bestKey = chars[i]
			bestDuration = releaseTimes[i] - releaseTimes[i - 1]
		}
		if (
			releaseTimes[i] - releaseTimes[i - 1] === bestDuration &&
			chars[i] > bestKey
		) {
			bestKey = chars[i]
		}
	}

	return bestKey
}

console.log(slowestKey([9, 29, 49, 50], 'cbcd'))
