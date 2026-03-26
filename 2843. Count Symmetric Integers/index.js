const countSymmetricIntegers = function (low, high) {
	let counter = 0

	for (let i = low; i <= high; i++) {
		const str = String(i)
		const len = str.length

		if (len % 2 === 0) {
			const half = len / 2
			const left = str.slice(0, half)
			const right = str.slice(half)

			const sumLeft = left.split('').reduce((acc, num) => acc + Number(num), 0)
			const sumRight = right
				.split('')
				.reduce((acc, num) => acc + Number(num), 0)

			if (sumLeft === sumRight) {
				counter++
			}
		}
	}

	return counter
}

console.log(countSymmetricIntegers(1200, 1230))
console.log(countSymmetricIntegers(1, 100))
