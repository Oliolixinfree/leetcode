const frequencySort = function (nums) {
	const freq = new Map()

	for (const element of nums) {
		if (freq.has(element)) {
			freq.set(element, freq.get(element) + 1)
		} else {
			freq.set(element, 1)
		}
	}

	nums.sort((a, b) => {
		const freqA = freq.get(a)
		const freqB = freq.get(b)

		if (freqA !== freqB) {
			return freqA - freqB
		} else {
			return b - a
		}
	})

	return nums
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]))
