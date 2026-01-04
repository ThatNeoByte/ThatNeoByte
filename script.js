const root = document.documentElement;
const button = document.querySelector('.theme-toggle');
const icon = button.querySelector('use');

const setIcon = (theme) => {
  icon.setAttribute(
    'href',
    `assets/feather-sprite.svg#${theme === 'dark' ? 'moon' : 'sun'}`
  );
};

const storedTheme = localStorage.getItem('theme');

if (storedTheme) {
  root.setAttribute('data-theme', storedTheme);
  setIcon(storedTheme);
} else {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setIcon(systemDark ? 'dark' : 'light');
}

button.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  setIcon(next);
});


document.documentElement.classList.add('theme-ready');
