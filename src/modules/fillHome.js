function createTitle(name) {
  const title = document.createElement('h1');
  title.innerText = name;
  return title;
}

function createTextContent(content) {
  const textContent = document.createElement('p');
  textContent.innerText = content;
  return textContent;
}

function fillHome() {
  const main = document.getElementById('main');

  const title = createTitle('Welcome to our restaurant');
  main.appendChild(title);

  const para = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Voluptates, numquam. Pariatur asperiores illum, atque facere in quis 
  similique nihil? Mollitia obcaecati, rem dicta omnis quaerat ad sequi
  commodi illo, ea reiciendis ut quas aspernatur esse accusantium qui quis
  officiis. Temporibus illo enim in fugit modi quis consectetur exercitationem
  a aut suscipit optio ad, impedit eius nostrum vel aperiam vero placeat.`;
  const textContent = createTextContent(para);
  main.appendChild(textContent);
}

export default fillHome;
export { createTitle };
