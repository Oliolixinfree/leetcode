const lengthOfLastWord = function (s) {
	const arr = s
		.trim()
		.split(' ')
		.filter(i => i !== '')

	return arr[arr.length - 1].length
}

console.log(lengthOfLastWord('   fly me   to   the moon  '))
