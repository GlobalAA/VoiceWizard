export type language = 'EN' | 'RU'

export interface IConfig {
	defaultLanguage: language
	outputPath: string
	listen: boolean
	autoListen: boolean
	listenTimeout: number
}
