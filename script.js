var typed = new Typed('#element', {
    strings: ['A front-end web developer.', 'A web designer.','Video Editor'],
    typeSpeed: 50,
  });
  const menu = document.querySelector('.menu');
  const navUl = document.querySelector('nav ul');
  
  menu.addEventListener('click', () => {
      navUl.classList.toggle('active');
  });
  
