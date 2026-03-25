const isHappy = n => {
	const note = []
	// const note = new Set()
	let current = n

	// while (current !== 1 && !note.has(current)) {
	while (current !== 1 && !note.includes(current)) {
		note.push(current)

		let sum = 0
		const digits = String(current).split('')

		for (let i = 0; i < digits.length; i++) {
			sum += Number(digits[i]) ** 2
		}
		current = sum
	}

	return current === 1
}

console.log(isHappy(19))
