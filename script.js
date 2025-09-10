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

// Animasi responsif untuk fade-in dan slide-up
function animateOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const slideEls = document.querySelectorAll('.slide-up');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
  slideEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);
