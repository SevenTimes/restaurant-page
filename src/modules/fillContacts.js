import { createTitle } from './fillHome';

function createContacts() {
  const phones = ['555-3535', '555-0000', '555-1234'];
  const title = document.createElement('h3');
  title.innerText = 'Our Phones';

  const phoneList = document.createElement('ul');
  phones.forEach((phone) => {
    const phoneNumber = document.createElement('li');
    phoneNumber.innerText = phone;
    phoneList.appendChild(phoneNumber);
  });

  title.appendChild(phoneList);
  return title;
}

function createAddress() {
  const title = document.createElement('h3');
  title.innerText = 'Our Address';

  const address = document.createElement('p');
  address.innerText = 'Somewhere, Planet Earth, Solar System, Milky Way';
  title.appendChild(address);
  return title;
}

function fillContacts() {
  const main = document.getElementById('main');

  const title = createTitle('Contact Us');
  main.appendChild(title);

  const contacts = createContacts();
  main.appendChild(contacts);

  const address = createAddress();
  main.appendChild(address);
}

export default fillContacts;
