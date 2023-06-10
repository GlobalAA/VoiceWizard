var _a;
import { onInput } from './booleanInput.js';
import { defaultFill, getAllValue } from './settingsDefaultFill.js';
const outputPathButton = document.getElementById('open-button');
const dirInput = document.getElementById('dir-input');
const language = document.getElementById('language');
const timeout = document.getElementById('timeout');
// Preview list
const languagePreview = document.getElementById("languagePreview");
const outputPreview = document.getElementById("dir-input");
const listenPreview = document.getElementById("listenPreview");
const autoListenPreview = document.getElementById("autoListenPreview");
const timeoutPreview = document.getElementById("timeoutPreview");
const inputs = document.querySelectorAll('[boolean]');
window.onload = () => {
    defaultFill(language, dirInput, inputs[0], inputs[1], timeout, languagePreview, outputPreview, listenPreview, autoListenPreview, timeoutPreview);
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
    eel.save_config(getAllValue(language, dirInput, inputs[0], inputs[1], timeout))(() => {
        window.location.href = './index.html';
    });
});
