import { createTitle } from './fillHome';

const menu = {
  'Yummy Dish': 1,
  'Posh Dish': 10,
  'Elite Dish': 100,
  'Family Dish': 20,
};

function createTableRow(item, price) {
  const tableRow = document.createElement('tr');
  const tableDish = document.createElement('th');
  const tablePrice = document.createElement('th');

  tableDish.innerText = item;
  tableRow.appendChild(tableDish);

  tablePrice.innerText = `${price}$`;
  tableRow.appendChild(tablePrice);

  return tableRow;
}

function createMenu() {
  const menuTable = document.createElement('table');

  const top = createTableRow('Dish', 'Price, ');
  menuTable.appendChild(top);

  for (const item in menu) {
    const dish = createTableRow(item, menu[item]);
    menuTable.appendChild(dish);
  }

  return menuTable;
}

function fillMenu() {
  const main = document.getElementById('main');

  const title = createTitle('Menu');
  main.appendChild(title);

  const menu = createMenu();
  main.appendChild(menu);
}

export default fillMenu;
