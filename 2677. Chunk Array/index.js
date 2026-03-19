const chunk = function (arr, size) {
	const result = []

	for (let i = 0; i < arr.length; i += size) {
		const chunk = arr.slice(i, i + size)
		result.push(chunk)
	}

	return result
}

console.log(chunk([1, 9, 6, 3, 2], 3))
console.log(chunk([1, 2, 3, 4, 5], 1))
