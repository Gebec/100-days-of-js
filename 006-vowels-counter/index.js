const init = (() => {
    const inputEl = document.getElementById('text-input');
    const resultEl = document.getElementById('vowels-count');

    if (!inputEl || !resultEl) {
        console.error('WTF?');
        return;
    }

    const countVowels = (event) => {
        const val = event.target.value;
        let count = 0;

        if (val)  {
            count = val.toLowerCase().match(/[aeiou]/g).length;
        }

        resultEl.innerText = count;
    }

    inputEl.addEventListener("input", countVowels);
})()

