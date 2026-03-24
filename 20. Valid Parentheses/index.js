const isValid = s => {
	const stack = []
	const items = {
		')': '(',
		'}': '{',
		']': '['
	}

	for (const el of [...s]) {
		if (el === '(' || el === '{' || el === '[') {
			stack.push(el)
		} else {
			if (stack.length === 0) return false
			const last = stack.pop()
			if (last !== items[el]) return false
		}
	}

	return stack.length === 0
}

console.log(isValid('()[]{}'))
console.log(isValid('([)]'))
