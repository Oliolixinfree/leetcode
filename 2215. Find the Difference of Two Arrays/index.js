const findDifference = function (nums1, nums2) {
	const set1 = new Set(nums1)
	const set2 = new Set(nums2)

	const result1 = []
	const result2 = []

	for (const element of set1) {
		if (!set2.has(element)) {
			result1.push(element)
		}
	}

	for (const element of set2) {
		if (!set1.has(element)) {
			result2.push(element)
		}
	}

	return [result1, result2]
}

console.log(findDifference([1, 2, 3], [2, 4, 6]))
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))

// non optimize

// const findDifference = function (nums1, nums2) {
// 	const uniq1 = new Set()
// 	const uniq2 = new Set()

// 	for (const element of nums1) {
// 		if (!nums2.includes(element)) {
// 			uniq1.add(element)
// 		}
// 	}

// 	for (const element of nums2) {
// 		if (!nums1.includes(element)) {
// 			uniq2.add(element)
// 		}
// 	}

// 	return [[...uniq1], [...uniq2]]
// }
