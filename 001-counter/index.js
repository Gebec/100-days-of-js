const add = document.getElementById('button-add');
const reset = document.getElementById('button-reset');
const subtract = document.getElementById('button-subtract');
const countElement = document.getElementById('count');

let stateValue = 0

const updateCount = () => {
    countElement.innerText = stateValue;
    if (stateValue === 0) {
        countElement.style.color = "white";
        return;
    }

    if (stateValue > 0) {
        countElement.style.color = "LightGreen";
        return;
    }

    countElement.style.color = "tomato";
}

add.addEventListener('click', () => {
    stateValue += 1;
    updateCount();
});

reset.addEventListener('click', () => {
    stateValue = 0;
    updateCount();
})

subtract.addEventListener('click', () => {
    stateValue -= 1;
    updateCount();
})

updateCount();
