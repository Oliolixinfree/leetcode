const majorityFrequencyGroup = function (s) {
	const note = new Map()
	const freq = new Map()

	let maxFreq = 0
	let maxSize = 0

	for (let char of s) {
		note.set(char, (note.get(char) || 0) + 1)
	}

	for (let [key, value] of note) {
		if (!freq.has(value)) {
			freq.set(value, [key])
		} else {
			freq.get(value).push(key)
		}
	}

	for (let [key, value] of freq.entries()) {
		if (value.length > maxSize) {
			maxSize = value.length
			maxFreq = key
		} else if (value.length === maxSize && key > maxFreq) {
			maxFreq = key
		}
	}

	return freq.get(maxFreq).join('')
}

console.log(majorityFrequencyGroup('aaabbbccdddde'))
