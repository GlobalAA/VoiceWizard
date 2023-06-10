import json
from tkinter.filedialog import askdirectory

import eel

from utils.notify import show


@eel.expose
def get_path():
	global outputDir
	dir = askdirectory(title="Select dir", initialdir="./")
	return dir

@eel.expose
def save_config(config):
	with open('settings.json', 'r+') as file:
		allowed_languages = ['RU', 'EN']
		if not config["defaultLanguage"] in allowed_languages:
			show("VoiceWizard (settings)", "Выбранный язык не поддерживается")
			config['defaultLanguage'] = 'RU'
		config["listenTimeout"] = int(config["listenTimeout"])
		json.dump(config, file, indent=2)
		file.flush()
		show("VoiceWizard (settings)", "Настройки были успешно изменены.")