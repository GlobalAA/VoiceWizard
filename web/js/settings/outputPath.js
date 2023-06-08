"use strict";
const outputPathButton = document.getElementById('open-button');
const dirInput = document.getElementById('dir-input');
outputPathButton.addEventListener('click', changeOutputPath);
function changeOutputPath() {
    // @ts-ignore
    eel.get_path()((r) => {
        const main = 'Output path:';
        dirInput.value = `${main} ${r.slice(0, 15)}`;
        dirInput.title = `${main} ${r}`;
    });
}
