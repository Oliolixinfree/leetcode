const countBits = function (n) {
	return Array.from({ length: n + 1 }, (_, i) => i).map(i =>
		i
			.toString(2)
			.split('')
			.map(Number)
			.reduce((a, n) => a + n)
	)
}

// optimized
const countBits2 = function (n) {
	const ans = new Array(n + 1).fill(0)
	for (let i = 1; i <= n; i++) {
		ans[i] = ans[i >> 1] + (i & 1)
	}
	return ans
}

console.log(countBits(5))
