import json
from tkinter.filedialog import askdirectory

import eel


@eel.expose
def get_path():
	global outputDir
	dir = askdirectory(title="Select dir", initialdir="./")
	return dir

@eel.expose
def save_config(config):
	with open('settings.json', 'w') as file:
		json.dump(config, file, indent=2)
		file.flush()