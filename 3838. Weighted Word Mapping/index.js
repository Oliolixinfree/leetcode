const mapWordWeights = function (words, weights) {
	const alphabet = new Map()
	let charCode = 97
	let result = []

	for (let i = 0; i < weights.length; i++) {
		alphabet.set(String.fromCharCode(charCode), weights[i])
		charCode++
	}

	for (let i = 0; i < words.length; i++) {
		let sum = 0
		const charArr = words[i].split('')

		for (let j = 0; j < charArr.length; j++) {
			sum += alphabet.get(charArr[j])
		}

		result.push(String.fromCharCode(122 - Math.abs(sum % 26)))
	}

	return result.join('')
}

console.log(
	mapWordWeights(
		['abcd', 'def', 'xyz'],
		[
			5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3,
			7, 7, 2
		]
	)
)
