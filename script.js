const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });
  
  sr.reveal('.reveal-top', { origin: 'top' });
  sr.reveal('.reveal-bottom', { origin: 'bottom' });
  sr.reveal('.reveal-left', { origin: 'left' });
  sr.reveal('.reveal-right', { origin: 'right' });
  
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
// Get the toggle button
const toggleThemeButton = document.getElementById('toggle-theme');

// Ensure the body class is updated correctly when toggling themes
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

// Add event listener to toggle theme
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
