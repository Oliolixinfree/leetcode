/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
	return String(x) === [...String(x)].reverse().join('')
}

console.log(isPalindrome(123))
console.log(isPalindrome(111))
