(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  });

  closeMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('is-open');
    mobileMenu.classList.remove('is-open');
    closeMenuBtn.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });

  document.querySelectorAll('.menu__navigation').forEach(n =>
    n.addEventListener('click', () => {
      openMenuBtn.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    })
  );
})();
