import { onInput } from './booleanInput.js'
import { defaultFill, getAllValue } from './settingsDefaultFill.js'

const outputPathButton = document.getElementById(
	'open-button'
) as HTMLButtonElement

const dirInput = document.getElementById('dir-input') as HTMLInputElement

const language = document.getElementById('language') as HTMLInputElement

const timeout = document.getElementById('timeout') as HTMLInputElement

// Preview list
const languagePreview = document.getElementById("languagePreview") as HTMLInputElement
const outputPreview = document.getElementById("dir-input") as HTMLInputElement
const listenPreview = document.getElementById("listenPreview") as HTMLInputElement
const autoListenPreview = document.getElementById("autoListenPreview") as HTMLInputElement
const timeoutPreview = document.getElementById("timeoutPreview") as HTMLInputElement


const inputs: NodeListOf<HTMLInputElement> =
	document.querySelectorAll('[boolean]')
window.onload = () => {
	defaultFill(
		language, 
		dirInput, 
		inputs[0], 
		inputs[1], 
		timeout, 
		languagePreview,
		outputPreview,
		listenPreview,
		autoListenPreview,
		timeoutPreview
	)
	window.resizeTo(420, 570)
}

// Output Path

outputPathButton.addEventListener('click', changeOutputPath)

function changeOutputPath() {
	// @ts-ignore
	eel.get_path()((r: string) => {
		const main = 'Output path:'
		dirInput.value = `${main} ${r.slice(0, 15)}`
		dirInput.title = `${main} ${r}`
	})
}

// Boolean Input
for (const input of inputs) {
	input.addEventListener('input', e => {
		onInput(e.target as HTMLInputElement, e)
	})
}

// Timeout
timeout.addEventListener('input', () => {
	if (timeout.value.length > 1)
		return (timeout.value = timeout.value.substring(
			0,
			timeout.value.length - 1
		))
})

// Save button
document.getElementById('save')?.addEventListener('click', () => {
	// @ts-ignore
	eel.save_config(
		getAllValue(language, dirInput, inputs[0], inputs[1], timeout)
	)(() => {
		window.location.href = './index.html'
	})
})
