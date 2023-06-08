import { IConfig } from './IConfig'

const generateButton: HTMLButtonElement = document.getElementById(
	'generate'
) as HTMLButtonElement

const listenButton: HTMLButtonElement = document.getElementById(
	'listen'
) as HTMLButtonElement

const getCurrentLanguage = (): Promise<IConfig> => {
	// @ts-ignore
	return eel.read_config()()
}

generateButton?.addEventListener('click', generateAudio)
listenButton?.addEventListener('click', () => {
	//@ts-ignore
	eel.listen()()
})

async function generateAudio(e: Event) {
	const text = (document.getElementById('entered_text') as HTMLInputElement)
		.value
	const language = (document.getElementById('language') as HTMLInputElement)
		.value

	// @ts-ignore
	await eel.convert(
		text,
		language
	)(() => {
		getCurrentLanguage().then(d => {
			if (d.listen) listenButton.removeAttribute('disabled')
		})
	})
}
