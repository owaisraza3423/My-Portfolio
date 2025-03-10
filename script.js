var typed = new Typed('#element', {
    strings: ['A front-end web developer.', 'A web designer.','Video Editor'],
    typeSpeed: 50,
  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.bx-menu-alt-right');
    const navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});
