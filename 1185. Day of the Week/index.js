const dayOfTheWeek = function (day, month, year) {
	const date = new Date(year, month - 1, day)
	return new Date(year, month - 1, day).toLocaleString('en-EN', {
		weekday: 'long'
	})
}

console.log(dayOfTheWeek(31, 8, 2019))
