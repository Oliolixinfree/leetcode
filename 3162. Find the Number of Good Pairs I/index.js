const numberOfPairs = function (nums1, nums2, k) {
	let res = 0

	for (const n1 of nums1) {
		for (const n2 of nums2) {
			if (n1 % (n2 * k) === 0) {
				res++
			}
		}
	}

	return res
}

console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1))
