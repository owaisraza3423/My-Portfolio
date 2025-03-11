var typed = new Typed('#element', {
    strings: ['A front-end web developer.', 'A web designer.','Video Editor'],
    typeSpeed: 50,
  });
   // Hamburger Menu Toggle
   const menu = document.querySelector('.menu');
   const navLinks = document.querySelector('.right ul');

   menu.addEventListener('click', () => {
     navLinks.classList.toggle('show-menu');
   });

