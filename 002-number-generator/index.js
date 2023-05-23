let minValue = 0;
let maxValue = 1000;

const init = (() => {
    const rangeSelected = document.getElementById('range-selected');
    const inputMin = document.getElementById('input-min');
    const inputMax = document.getElementById('input-max');
    const pickerMin = document.getElementById('picker-min');
    const pickerMax = document.getElementById('picker-max');

    const setValues = (min, max) => {
        minValue = min;
        maxValue = max;
    }

    const updateRange = (min, max) => {
        rangeSelected.style.left = `${min / 10}%`;
        rangeSelected.style.right = `${(1000 - max) / 10}%`;
    }

    const updatePickerValues = (min, max) => {
        pickerMin.value = min;
        pickerMax.value = max;

        setValues(min, max);
        updateRange(min, max);
    }

    const updateInputValues = (min, max) => {
        inputMin.value = min;
        inputMax.value = max;

        setValues(min, max);
        updateRange(min, max);
    }

    const handleInputValueChange = () => {
        const inputMinValue = Number(inputMin.value);
        const inputMaxValue = Number(inputMax.value);

        if (isNaN(inputMinValue) || isNaN(inputMaxValue)) return;

        inputMinValue < inputMaxValue
            ? updatePickerValues(inputMinValue, inputMaxValue)
            : updatePickerValues(inputMaxValue, inputMinValue);

    }

    const handlePickerValueChange = () => {
        const minPickerValue = Number(pickerMin.value);
        const maxPickerValue = Number(pickerMax.value);

        if (isNaN(minPickerValue) || isNaN(maxPickerValue)) return;

        minPickerValue < maxPickerValue
            ? updateInputValues(minPickerValue, maxPickerValue)
            : updateInputValues(maxPickerValue, minPickerValue);
    }

    inputMin.addEventListener('input', handleInputValueChange);
    inputMax.addEventListener('input', handleInputValueChange);
    pickerMin.addEventListener('input', handlePickerValueChange);
    pickerMax.addEventListener('input', handlePickerValueChange);
})();

const generate = () => {
    const result = minValue + Math.round((maxValue - minValue) * Math.random());

    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerText = result;
    }
}
