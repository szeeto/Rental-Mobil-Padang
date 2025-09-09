
const toggle = document.getElementById('navbarToggle');
const menu = document.querySelector('.menu ul');
toggle.addEventListener('click', function () {
  menu.classList.toggle('active');
});

// Tutup menu saat klik link
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('active');
  }
});
