function maximizeExpressionOfThree(nums) {
	const sortedList =  nums.sort((a, b) => b - a);

	return sortedList[0] + sortedList[1] - sortedList.at(-1)
};

console.log(maximizeExpressionOfThree([1, 4, 2, 5]));
