function intersection(nums1, nums2) {
	return [...new Set(nums1).intersection(new Set(nums2))]
};

console.log(intersection([1,2,2,1], [2,2]));
