export function onInput(elem, event) {
    const value = elem.value.trim();
    const is = value.toLocaleUpperCase() == 'F' || value.toLocaleUpperCase() == 'T';
    if (!is)
        return (elem.value = '');
}
