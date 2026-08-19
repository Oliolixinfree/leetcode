const fibGenerator = function* () {
	let a = 0
	let b = 1

	yield a
	yield b

	while (true) {
		const next = a + b
		yield next
		a = b
		b = next
	}
}

const gen = fibGenerator()

for (let i = 0; i < 10; i++) {
	console.log(gen.next().value)
}
