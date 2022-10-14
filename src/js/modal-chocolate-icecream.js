(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-chocolate-open]'),
    openModalBtn2: document.querySelector('[data-modal-ice-coffe-open]'),
    openModalBtn3: document.querySelector('[data-modal-milk-open]'),
    closeModalBtn: document.querySelector('[data-modal-chocolate-close]'),
    modal: document.querySelector('[data-modal-chocolate]'),
  };
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
