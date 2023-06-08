document.addEventListener('contextmenu', (e: MouseEvent) => {
	e.preventDefault()
})

document.addEventListener(
	'keydown',
	(e: KeyboardEvent) => {
		if (e.which == 123) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.shiftKey && e.which == 73) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.shiftKey && e.which == 75) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.shiftKey && e.which == 67) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.shiftKey && e.which == 74) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.which == 83) {
			e.preventDefault()
		}
	},
	false
)
