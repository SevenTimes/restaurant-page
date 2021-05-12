import loadPage from './modules/initialLoad';
import fillHome from './modules/fillHome';
import fillContacts from './modules/fillContacts';
import fillMenu from './modules/fillMenu';

function clearContent() {
  const main = document.getElementById('main');
  main.innerHTML = '';
}

function addEvents() {
  const btnMenu = document.querySelectorAll('button');
  btnMenu.forEach((btn) => {
    btn.addEventListener('click', () => {
      switch (btn.id) {
        case 'home':
          clearContent();
          fillHome();
          break;
        case 'menu':
          clearContent();
          fillMenu();
          break;
        case 'contact':
          clearContent();
          fillContacts();
          break;
        default:
          break;
      }
    });
  });
}

function init() {
  loadPage();
  addEvents();
  fillHome();
}

init();
