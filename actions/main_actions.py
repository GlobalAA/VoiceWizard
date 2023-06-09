import json
import os
import time
import webbrowser
from tkinter.messagebox import showwarning
from uuid import uuid4

import eel
import vlc
from gtts import gTTS

from utils.notify import show

path = None

@eel.expose
def read_config():
	with open("settings.json", "r") as file:
		data = json.load(file)
		file.close()
		data["outputPath"] = data["outputPath"] if not str(data["outputPath"]).endswith("/") else data["outputPath"][:len(data["outputPath"])-1]
		return data

@eel.expose
def open_url(url: str):
	webbrowser.open_new_tab(url)

@eel.expose
def convert(text: str, language: str):
	global path
	allowed_languages = ['en', 'ru']
	if len(text.strip()) <= 0:
		showwarning("Ошибка", "Длинна должна быть больше нуля!")
	elif not language.lower() in allowed_languages:
		showwarning("Ошибка", "Вибраний вами язык не поддерживается!")
	else:
		config = read_config()

		if not os.path.exists(f'{config["outputPath"]}/audio'):
			os.mkdir(f'{config["outputPath"]}/audio')

		path = f'{config["outputPath"]}/audio/{uuid4()}.mp3'

		sp = gTTS(text=text, lang=language.lower(), slow=False)
		sp.save(path)

		show('Успешно', f'Файл был сохранен в директории: {config["outputPath"]}/audio')

		if config["autoListen"]:
			time.sleep(config["listenTimeout"])
			listen()

@eel.expose
def listen():
	global ptah	
	vlc_instance = vlc.Instance()
	player = vlc_instance.media_player_new()
	media = vlc_instance.media_new(path)
	player.set_media(media)
	player.play()
