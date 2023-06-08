const getCurrentLanguage = () => {
    // @ts-ignore
    return eel.read_config()();
};
const menu = document.getElementById('language');
const dropDown = document.querySelector('.option');
const russianOption = document.getElementById('russian');
const englishOption = document.getElementById('english');
getCurrentLanguage().then((d) => {
    const defaultLanguage = d.defaultLanguage;
    menu.value = defaultLanguage;
});
menu === null || menu === void 0 ? void 0 : menu.addEventListener('click', changeLanguage);
russianOption.addEventListener('click', show);
englishOption.addEventListener('click', show);
function show(e) {
    const target = e.target;
    if (menu != null) {
        menu.value = String(target.textContent);
        dropDown.classList.toggle('active');
    }
}
function changeLanguage(e) {
    dropDown.classList.toggle('active');
}
export {};
