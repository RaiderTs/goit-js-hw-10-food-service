import './styles.css';
import itemsTemplate from './tamplates/menu-items.hbs';
import menu from './menu.json';


const refs = {
  menuEl: document.querySelector('.js-menu'),
  bodyEl: document.querySelector('body'),
  switchEl: document.querySelector('#theme-switch-toggle'),
};
// генерация по шаблону
const markup = itemsTemplate(menu);
refs.menuEl.insertAdjacentHTML('beforeend', markup);

// добавляем переключение темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';


refs.switchEl.addEventListener('change', switchTheme);

function switchTheme(evt) {
  if (refs.switchEl.checked) {
    onDarkTheme();
    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  } else {
    onLightTheme();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem('STORAGE_KEY', Theme.LIGHT);
  }
}

function onLightTheme(evt) {
  refs.bodyEl.classList.add(Theme.LIGHT);
  refs.bodyEl.classList.remove(Theme.DARK);
}

function onDarkTheme(evt) {
  refs.bodyEl.classList.add(Theme.DARK);
  refs.bodyEl.classList.remove(Theme.LIGHT);
}

function themeFromLocalStorage() {
  const keyLocal = localStorage.getItem(STORAGE_KEY); 
  if (keyLocal === Theme.DARK) {
    refs.bodyEl.classList.add(Theme.DARK);
    refs.switchEl.checked = true;
  }
}
themeFromLocalStorage();





