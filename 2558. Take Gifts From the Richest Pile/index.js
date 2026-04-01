const pickGifts = function (gifts, k) {
	for (let i = 0; i < k; i++) {
		const max = gifts.reduce((a, b) => Math.max(a, b), -Infinity)

		if (max === 1) break

		gifts[gifts.indexOf(max)] = Math.floor(Math.sqrt(max))
	}

	return gifts.reduce((a, n) => a + n, 0)
}

console.log(pickGifts([25, 64, 9, 4, 100], 4))
