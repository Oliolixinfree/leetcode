async function sleep(millis) {
	return new Promise(resolve => {
		setTimeout(resolve, millis)
	})
}
console.log(await sleep(2000))
