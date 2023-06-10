const translateButton = document.getElementById(
	'translate_button'
) as HTMLButtonElement
const translateInput = document.getElementById('input_text') as HTMLInputElement

translateButton.addEventListener('click', () => {
	// @ts-ignore
	eel.translate(translateInput.value)()
})
