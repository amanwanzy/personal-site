const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('site-theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.textContent = '☀️';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
  });
}
