const menuBtn = document.getElementById('menu-button');
const globalNav = document.getElementById('global-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  globalNav.classList.toggle('is-active');

  const isOpen = menuBtn.classList.contains('is-active');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

const navLinks = document.querySelectorAll('#global-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('is-active');
    globalNav.classList.remove('is-active');
    menuBtn.setAttribute('aria-expanded', false);
  });
});