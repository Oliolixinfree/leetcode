const divisorSubstrings = function (num, k) {
	const string = String(num)

	let kBeauty = 0

	for (let i = 0; i <= string.length - k; i++) {
		if (num % parseInt(string.substring(i, i + k)) === 0) {
			kBeauty++
		}
	}

	return kBeauty
}
console.log(divisorSubstrings(240, 2))
console.log(divisorSubstrings(430043, 2))
