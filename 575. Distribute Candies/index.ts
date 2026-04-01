export const distributeCandies = function (candyType: number[]): number {
	const uniq = new Set(candyType)

	return candyType.length / 2 >= uniq.size ? uniq.size : candyType.length / 2
}

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
console.log(distributeCandies([1, 1, 2, 3]))
console.log(distributeCandies([6, 6, 6, 6]))
