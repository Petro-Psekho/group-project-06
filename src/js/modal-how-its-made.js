(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-how-its-made-open]'),
    closeModalBtn: document.querySelector('[data-modal-how-its-made-close]'),
    modal: document.querySelector('[data-modal-how-its-made]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();