var expect = function (val) {
	return {
		toBe: secValue => {
			if (val === secValue) return true
			throw new Error('Not Equal')
		},
		notToBe: secValue => {
			if (val !== secValue) return true
			throw new Error('Equal')
		}
	}
}
