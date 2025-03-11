var typed = new Typed('#element', {
    strings: ['A front-end web developer.', 'A web designer.','Video Editor'],
    typeSpeed: 50,
  });
  const menuIcon = document.querySelector('.bx-menu-alt-right');
  const navList = document.querySelector('nav ul');

  menuIcon.addEventListener('click', () => {
      navList.classList.toggle('active');
  });


