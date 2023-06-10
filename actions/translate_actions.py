import clipboard
import eel
from googletrans import Translator

from utils.notify import show

from .main_actions import read_config

translator = Translator()

@eel.expose
def translate(data: str):
	to_lang = read_config()["defaultLanguage"]
	text = translator.translate(data, dest=to_lang).text
	clipboard.copy(text)
	show("VoiceWizard (translate)", "Перевод успешно скопирован!")