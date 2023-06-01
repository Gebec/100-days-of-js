const init = (() => {
    const button = document.getElementById('copy-button');
    const text = document.getElementById('copy-text');

    if (!button || !text) {
        console.error('WTF?');
        return;
    }

    const copy = () => {
        navigator.clipboard.writeText(text.innerText);
        button.classList.add('text-slate-200');
        button.classList.remove('hover:text-slate-500');

        setTimeout(() => {
            button.classList.add('hover:text-slate-500')
            button.classList.remove('text-slate-200');

        }, 1000);
    }

    button.addEventListener('click', copy);
})()

