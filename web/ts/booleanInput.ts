export function onInput(elem: HTMLInputElement, event: Event) {
	const value = elem.value.trim()
	const is =
		value.toLocaleUpperCase() == 'F' || value.toLocaleUpperCase() == 'T'
	if (!is) return (elem.value = '')
}
