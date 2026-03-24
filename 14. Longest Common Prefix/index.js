function longestCommonPrefix(strs) {
	if (!strs || strs.length === 0) return ''

	const shortestWord = strs.reduce((a, b) => (a.length <= b.length ? a : b))
	let prefix = ''

	for (let i = 0; i < shortestWord.length; i++) {
		const currentChar = shortestWord[i]

		for (let j = 0; j < strs.length; j++) {
			if (strs[j][i] !== currentChar) {
				return prefix
			}
		}

		prefix += currentChar
	}

	return prefix
}

console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
