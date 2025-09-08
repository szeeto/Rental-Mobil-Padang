  const toggle = document.getElementById('navbarToggle');
  const menu = document.querySelector('.menu ul');
  toggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
