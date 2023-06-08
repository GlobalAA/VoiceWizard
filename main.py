
import json
import os

import eel

eel.init("web")

import actions


def init_settings():
	if not os.path.exists("settings.json"):
		default_settings = {
			"defaultLanguage": "EN",
			"outputPath": "./",
			"listen": False
		}

		with open("settings.json", "a") as file:
			json.dump(default_settings, file)
			file.close()


init_settings()
eel.start("index.html", size=(320, 470), disable_cache=True)