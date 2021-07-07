import { findbyId, getTotal, renderTableRow, toUDS } from '../utils.js';
import lavalamps from '../lamps.js';
import cart from '../data/cart.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    const lamp = findbyId(lamps, item.id);
    const tr = renderTableRow(lamp, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = getTotal(lamps, cart);
totalDom.textContent = toUDS(total);