const luckyNumbers = function (matrix) {
	const res = []

	for (let i = 0; i < matrix.length; i++) {
		let minValue = matrix[i][0]
		let minCol = 0

		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] < minValue) {
				minValue = matrix[i][j]
				minCol = j
			}
		}

		let isMaxInColumn = true

		for (let k = 0; k < matrix.length; k++) {
			const curr = matrix[k][minCol]

			if (curr > minValue) {
				isMaxInColumn = false
				break
			}
		}

		if (isMaxInColumn) {
			res.push(minValue)
		}
	}

	return res
}

console.log(
	luckyNumbers([
		[3, 7, 8],
		[9, 11, 13],
		[15, 16, 17]
	])
)
