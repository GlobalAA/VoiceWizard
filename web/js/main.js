var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const generateButton = document.getElementById('generate');
const listenButton = document.getElementById('listen');
const getCurrentLanguage = () => {
    // @ts-ignore
    return eel.read_config()();
};
generateButton === null || generateButton === void 0 ? void 0 : generateButton.addEventListener('click', generateAudio);
listenButton === null || listenButton === void 0 ? void 0 : listenButton.addEventListener('click', () => {
    //@ts-ignore
    eel.listen()();
});
function generateAudio(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = document.getElementById('entered_text')
            .value;
        const language = document.getElementById('language')
            .value;
        // @ts-ignore
        yield eel.convert(text, language)(() => {
            getCurrentLanguage().then(d => {
                if (d.listen)
                    listenButton.removeAttribute('disabled');
            });
        });
    });
}
export {};
