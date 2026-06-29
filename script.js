
const menuButton = document.querySelector('.mobile-toggle');
const menuPanel = document.querySelector('.mobile-panel');
if (menuButton && menuPanel) {
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    menuPanel.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  menuPanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuButton.classList.remove('active');
      menuPanel.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}
