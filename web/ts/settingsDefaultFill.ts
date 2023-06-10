import { IConfig } from './IConfig'

export const defaultFill = (
	defaultLanguage: HTMLInputElement,
	outputPath: HTMLInputElement,
	listen: HTMLInputElement,
	autoListen: HTMLInputElement,
	listenTimeout: HTMLInputElement,
	languagePreview: HTMLInputElement,
	outputPreview: HTMLInputElement,
	listenPreview: HTMLInputElement,
	autoListenPreview: HTMLInputElement,
	timeoutPreview: HTMLInputElement,
) => {
	// @ts-ignore
	eel.read_config()((data: IConfig) => {
		const languagePreviewText = "Default language:"
		const outputPathPreviewText = "Output path:"
		const listenPreviewText = "Listen:"
		const autoListenPreviewText = "Auto listen:"
		const listenTimeoutPreviewText = "Listen timeout:"

		defaultLanguage.value = data.defaultLanguage
		outputPath.value = `${outputPathPreviewText} ${data.outputPath.slice(0, 15)}`
		outputPath.title = `${outputPathPreviewText} ${data.outputPath}`
		listen.value = data.listen == true ? 'T' : 'F'
		autoListen.value = data.autoListen == true ? 'T' : 'F'
		listenTimeout.value = String(data.listenTimeout)

		languagePreview.value = `${languagePreviewText} ${data.defaultLanguage}`
		outputPreview.value = `${outputPathPreviewText} ${data.outputPath}`
		listenPreview.value = `${listenPreviewText} ${data.listen == true ? 'True' : 'False'}`
		autoListenPreview.value = `${autoListenPreviewText} ${data.autoListen == true ? 'True' : 'False'}`		
		timeoutPreview.value = `${listenTimeoutPreviewText} ${String(data.listenTimeout)}`
	})
}

export const getAllValue = (
	defaultLanguage: HTMLInputElement,
	outputPath: HTMLInputElement,
	listen: HTMLInputElement,
	autoListen: HTMLInputElement,
	listenTimeout: HTMLInputElement
) => {
	return {
		defaultLanguage: defaultLanguage.value,
		outputPath: outputPath.title.substring('Output path: '.length),
		listen: listen.value == 'T' ? true : false,
		autoListen: autoListen.value == 'T' ? true : false,
		listenTimeout: listenTimeout.value,
	}
}
