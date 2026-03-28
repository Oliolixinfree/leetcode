const reverseVowels = function (s) {
	const vowels = s.match(/[aeiou]/gi)

	if (!vowels) return s

	const arr = s.split('')

	let idx = vowels.length - 1

	for (let i = 0; i < arr.length; i++) {
		if (/[aeiou]/i.test(arr[i])) {
			arr[i] = vowels[idx]
			idx--
		}
	}

	return arr.join('')
}

console.log(reverseVowels('IceCreAm'))
