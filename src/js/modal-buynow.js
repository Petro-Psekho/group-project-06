(() => {
  const buy = {
    openModalBtn: document.querySelector('[data-modal-open-buy-now]'),
    openMenuModalBtn: document.querySelector('[data-menu-modal-open-buy-now]'),
    closeModalBtn: document.querySelector('[data-modal-close-buy-now]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  buy.openModalBtn.addEventListener('click', toggleModal);
  buy.closeModalBtn.addEventListener('click', toggleModal);
  buy.openMenuModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    buy.modal.classList.toggle('is-hidden');
    buy.body.classList.toggle('no-scroll');
  }
})();
