import { IConfig } from './IConfig'

const getCurrentLanguage = (): Promise<IConfig> => {
	// @ts-ignore
	return eel.read_config()()
}

const menu: HTMLInputElement | null = document.getElementById(
	'language'
) as HTMLInputElement

const dropDown: HTMLDivElement = document.querySelector(
	'.option'
) as HTMLDivElement

const russianOption: HTMLDivElement | null = document.getElementById(
	'russian'
) as HTMLDivElement

const englishOption: HTMLDivElement | null = document.getElementById(
	'english'
) as HTMLDivElement

getCurrentLanguage().then((d: IConfig) => {
	const defaultLanguage = d.defaultLanguage

	menu!.value = defaultLanguage
})

menu?.addEventListener('click', changeLanguage)

russianOption!.addEventListener('click', show)
englishOption!.addEventListener('click', show)

function show(e: Event) {
	const target = e.target as HTMLDivElement
	if (menu != null) {
		menu.value = String(target.textContent)
		dropDown.classList.toggle('active')
	}
}

function changeLanguage(e: Event) {
	dropDown.classList.toggle('active')
}
