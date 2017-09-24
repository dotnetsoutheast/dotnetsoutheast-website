function toggleMenu(e) {
  e.preventDefault();

  const bodyEl = document.querySelector('body');
  if (bodyEl.classList.contains('smallscreen-menu--active')) {
    bodyEl.classList.remove('smallscreen-menu--active');
  } else {
    bodyEl.classList.add('smallscreen-menu--active');
  }
}

function primaryNav() {
  const t = document.querySelector('template');
  const smallScreenNav = document.importNode(t.content, true).querySelector('div');
  smallScreenNav.className = 'smallscreen-menu';
  document.body.appendChild(smallScreenNav);

  const menuButton = document.querySelectorAll('.js-smallscreen-menu--toggle');
  menuButton.forEach((el) => {
    el.addEventListener('click', toggleMenu);
  });
}

module.exports = primaryNav;
