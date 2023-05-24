const convertRgbToHex = (rgbColor) => {
    const parsedRgb = rgbColor.match(/^rgb\((\d+),\s(\d+),\s(\d+)\)$/);
    if (!parsedRgb) return null;

    const rgbVals = parsedRgb.slice(1, 4);

    let hex = '#';
    for (const val of rgbVals) {
        hex += parseInt(val).toString(16);
    }
    return hex;
}

const init = (() => {
    const bodyEl = document.body;
    const hexEl = document.getElementById('hex');

    if (!bodyEl || !hexEl) return;

    const onLoadColor = bodyEl.style.backgroundColor;
    hexEl.textContent = convertRgbToHex(onLoadColor);
})();


const generate = () => {
    let resultColor = '#';
    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 256).toString(16);
        if (randomColor.length === 1) {
            resultColor += `0${randomColor}`;
        } else {
            resultColor += randomColor;
        }
    }

    const bodyEl = document.body;
    const hexEl = document.getElementById('hex');

    if (!bodyEl || !hexEl) return;

    bodyEl.style.backgroundColor = resultColor;
    hexEl.textContent = resultColor;
}
