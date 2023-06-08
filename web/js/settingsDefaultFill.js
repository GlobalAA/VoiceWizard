export const defaultFill = (defaultLanguage, outputPath, listen, autoListen, listenTimeout) => {
    // @ts-ignore
    eel.read_config()((data) => {
        const main = 'Output path:';
        defaultLanguage.value = data.defaultLanguage;
        outputPath.value = `${main} ${data.outputPath.slice(0, 15)}`;
        outputPath.title = `${main} ${data.outputPath}`;
        listen.value = data.listen == true ? 'T' : 'F';
        autoListen.value = data.autoListen == true ? 'T' : 'F';
        listenTimeout.value = String(data.listenTimeout);
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
