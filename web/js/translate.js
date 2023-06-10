"use strict";
const translateButton = document.getElementById('translate_button');
const translateInput = document.getElementById('input_text');
translateButton.addEventListener('click', () => {
    // @ts-ignore
    eel.translate(translateInput.value)();
});
