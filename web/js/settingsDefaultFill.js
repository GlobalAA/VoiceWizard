export const defaultFill = (defaultLanguage, outputPath, listen, autoListen, listenTimeout, listenPreview, autoListenPreview, defaultLanguagePreview, timeoutPreview) => {
    // @ts-ignore
    eel.read_config()((data) => {
        const main = 'Output path:';
        const listenDefault = 'Listen:';
        const autoListenDefault = 'Auto listen:';
        const languageDefault = 'Default language:';
        const timeoutDefault = 'Listen timeout:';
        defaultLanguage.value = data.defaultLanguage;
        outputPath.value = `${main} ${data.outputPath.slice(0, 15)}`;
        outputPath.title = `${main} ${data.outputPath}`;
        listen.value = data.listen == true ? 'T' : 'F';
        autoListen.value = data.autoListen == true ? 'T' : 'F';
        listenTimeout.value = String(data.listenTimeout);
        listenPreview.value = `${listenDefault} ${data.listen == true ? 'True' : 'False'}`;
        autoListenPreview.value = `${autoListenDefault} ${data.autoListen == true ? 'True' : 'False'}`;
        defaultLanguagePreview.value = `${languageDefault} ${data.defaultLanguage}`;
        timeoutPreview.value = `${timeoutDefault} ${data.listenTimeout}`;
    });
};
export const getAllValue = (defaultLanguage, outputPath, listen, autoListen, listenTimeout) => {
    return {
        defaultLanguage: defaultLanguage.value,
        outputPath: outputPath.title.substring('Output path: '.length),
        listen: listen.value == 'T' ? true : false,
        autoListen: autoListen.value == 'T' ? true : false,
        listenTimeout: listenTimeout.value,
    };
};
