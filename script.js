// Animate On Scroll Init
AOS.init();

// Preloader
window.onload = function() {
  document.getElementById('preloader').style.display = 'none';
};

// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
