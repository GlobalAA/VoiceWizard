var _a;
import { onInput } from './booleanInput.js';
import { defaultFill, getAllValue } from './settingsDefaultFill.js';
const outputPathButton = document.getElementById('open-button');
const dirInput = document.getElementById('dir-input');
const language = document.getElementById('language');
const timeout = document.getElementById('timeout');
const listenPreview = document.getElementById('listen_preview');
const autoListenPreview = document.getElementById('auto_listen_preview');
const defaultLanguagePreview = document.getElementById('default_language_preview');
const timeoutPreview = document.getElementById('timeout_preview');
const inputs = document.querySelectorAll('[boolean]');
window.onload = () => {
    defaultFill(language, dirInput, inputs[0], inputs[1], timeout, listenPreview, autoListenPreview, defaultLanguagePreview, timeoutPreview);
    window.resizeTo(420, 570);
};
// Output Path
outputPathButton.addEventListener('click', changeOutputPath);
function changeOutputPath() {
    // @ts-ignore
    eel.get_path()((r) => {
        const main = 'Output path:';
        dirInput.value = `${main} ${r.slice(0, 15)}`;
        dirInput.title = `${main} ${r}`;
    });
}
// Boolean Input
for (const input of inputs) {
    input.addEventListener('input', e => {
        onInput(e.target, e);
    });
}
// Timeout
timeout.addEventListener('input', () => {
    if (timeout.value.length > 1)
        return (timeout.value = timeout.value.substring(0, timeout.value.length - 1));
});
// Save button
(_a = document.getElementById('save')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    // @ts-ignore
    eel.save_config(getAllValue(language, dirInput, inputs[0], inputs[1], timeout))();
});
