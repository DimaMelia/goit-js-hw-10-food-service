import menu  from './menu.json';
import menuCardTPL from './templates/menu-card.hbs';

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const menuListRef = document.querySelector('ul.js-menu');

let theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  themeSwitcher.checked = true;
} else { 
  theme = Theme.LIGHT;
}

document.body.setAttribute('class', theme);

function onThemeSwitch() {
  if (theme === Theme.LIGHT) {
    theme = Theme.DARK;
  } else {
    theme = Theme.LIGHT;
  }
    localStorage.setItem('theme', theme);
    document.body.setAttribute('class', theme);
} 
  
themeSwitcher.addEventListener('change', onThemeSwitch);

menuListRef.insertAdjacentHTML("beforeend", menu.map(menuCardTPL).join(''));


