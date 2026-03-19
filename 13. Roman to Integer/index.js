const romanToInt = function (s) {
	const converter = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}

	// const arr = [...s].map(i => converter[i])
	// let sum = 0

	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i + 1] && arr[i] < arr[i + 1]) {
	// 		sum -= arr[i]
	// 	} else {
	// 		sum += arr[i]
	// 	}
	// }

	// return sum

	return [...s]
		.map(i => converter[i])
		.reduce(
			(acc, value, idx, arr) =>
				arr[idx + 1] && value < arr[idx + 1] ? acc - value : acc + value,
			0
		)
}

console.log(romanToInt('IV'))
console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
