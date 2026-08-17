function findClosest(x, y, z) {

	const personOneSteps = Math.abs(z - x)
	const personTwoSteps = Math.abs(z - y)

	return personOneSteps === personTwoSteps ? 0: personOneSteps < personTwoSteps ? 1 : 2
};

console.log(findClosest( 2, 7, 4));
console.log(findClosest( 2, 5, 6));
console.log(findClosest( 1, 5, 3));
