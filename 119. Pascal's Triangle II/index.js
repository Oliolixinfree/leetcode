const getRow = function (rowIndex) {
	const res = []

	for (let i = 0; i < rowIndex + 1; i++) {
		const row = new Array(i + 1).fill(0)
		row[0] = 1
		row[row.length - 1] = 1
		res.push(row)
	}

	for (let i = 2; i < res.length; i++) {
		for (let j = 1; j < res[i].length - 1; j++) {
			res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
		}
	}

	return res[rowIndex]
}

console.log(generate(3))
console.log(generate(0))
