const reduce = function (nums, fn, init) {
	for (const num of nums) {
		init = fn(init, num)
	}

	return init
}

console.log(
	reduce(
		[1, 2, 3, 4],
		function sum(accum, curr) {
			return accum + curr
		},
		0
	)
)
