const openModal = (modalId) => {
    const modalWindow = document.getElementById(`modal-${modalId}`);
    if (!modalWindow) return;

    modalWindow.classList.add('modal-open');
    modalWindow.addEventListener('close-modal', function() {
        this.classList.remove('modal-open');
        this.removeEventListener('close-modal')
    })

    const closeListener = () => {
        modalWindow.removeEventListener('click', closeListener);
    };
    modalWindow.addEventListener('click', closeListener);

}

const closeModal = (event) => {
    event.target.classList.remove('modal-open')
    event.stopPropagation();
}

const closeModalByButton = (event) => {
    const customEvent = new CustomEvent('close-modal', {
        bubbles: true,
        cancelable: true,
    });

    event.target.dispatchEvent(customEvent);
}

const randomColor = () => {
    return Math.floor(Math.random() * 256);
}

const confirmModal = (event) => {
    closeModalByButton(event);
    document.body.style.backgroundColor = `rgb(
        ${randomColor()},
        ${randomColor()},
        ${randomColor()}
    )`
}
