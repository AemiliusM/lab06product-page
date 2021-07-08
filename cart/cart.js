import { findById, getTotal, renderTableRow, toUDS } from '../utils.js';
import lamps from '../data/lamps.js';
import { getCart, clearCart } from '../storage-utils.js';


const tableBody = document.getElementById('table-body');

function renderCart(){
    const cart = getCart();
    for (let item of cart) {
        const fruit = find
    }
}

// for (let item of cart) {
//     const lamp = findById(lamps, item.id);
//     const tr = renderTableRow(lamp, item);
//     tableBody.appendChild(tr);
// }

// const totalDom = document.getElementById('order-total');
// const total = getTotal(lamps, cart);
// totalDom.textContent = toUDS(total);