function createBtn(id, name) {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  btn.classList.add('tab');
  btn.textContent = name;
  return btn;
}

function createNav(id) {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);

  const homeBtn = createBtn('home', 'Home');
  const menuBtn = createBtn('menu', 'Menu');
  const contactBtn = createBtn('contact', 'Contact');

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}

function createMain(id) {
  const main = document.createElement('main');
  main.setAttribute('id', id);
  return main;
}

function loadPage() {
  const content = document.getElementById('content');

  const nav = createNav('nav');
  content.appendChild(nav);

  const main = createMain('main');
  content.appendChild(main);
}

export default loadPage;
