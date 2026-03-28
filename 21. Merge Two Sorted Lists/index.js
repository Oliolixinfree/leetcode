// for arrays
const mergeTwoLists = (list1, list2) => {
	if (list1.length === 0 && list2.length === 0) {
		return []
	} else if (list1.length === 0) {
		return list2
	} else if (list2.length === 0) {
		return list1
	}

	let list1Idx = 0
	let list2Idx = 0
	const result = []

	while (list1Idx < list1.length && list2Idx < list2.length) {
		if (list1[list1Idx] <= list2[list2Idx]) {
			result.push(list1[list1Idx])
			list1Idx++
		} else {
			result.push(list2[list2Idx])
			list2Idx++
		}
	}

	while (list1Idx < list1.length) {
		result.push(list1[list1Idx])
		list1Idx++
	}

	while (list2Idx < list2.length) {
		result.push(list2[list2Idx])
		list2Idx++
	}

	return result
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
