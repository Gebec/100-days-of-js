const init = (() => {
    const input = document.getElementById('palindrome-input');
    const iconYes = document.getElementById('icon-yes');
    const iconNo = document.getElementById('icon-no');

    if (!input || !iconNo || !iconYes) {
        console.error('WTF?');
        return;
    }

    const checkPalindrome = (event) => {
        const val = event.target.value;
        const valReversed = val.split("").reverse().join("");

        iconYes.style.display = val === valReversed ? 'inline-block' : 'none';
        iconNo.style.display = val !== valReversed ? 'inline-block' : 'none'
    }

    input.addEventListener("input", checkPalindrome);
})()

