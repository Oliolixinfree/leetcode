const isCircularSentence = function (sentence) {
	const array = sentence.split(' ')

	if (array.length === 1) return sentence.at(0) === sentence.at(-1)

	for (let i = 0; i < array.length; i++) {
		if (array[i + 1] === undefined) {
			if (array[i].at(-1) !== array[0][0]) return false
		} else {
			if (array[i].at(-1) !== array[i + 1][0]) return false
		}
	}

	return true
}

console.log(isCircularSentence('leetcode exercises sound delightful'))
console.log(isCircularSentence('Leetcode is cool'))
