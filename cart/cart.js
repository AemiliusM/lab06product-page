import { findById, getTotal, renderTableRow, toUDS } from '../utils.js';
import lamps from '../data/lamps.js';
import { getCart, clearCart } from '../storage-utils.js';


const tableBody = document.getElementById('table-body');

function renderCart(){
    const cart = getCart();
    for (let item of cart) {
        const lamp = findById(lamps, item.id);
        const tblrw = renderTableRow(lamp, item);
        tableBody.appendChild(tblrw);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = getTotal(lamps, cart);
    totalDom.textContent = toUDS(total);
}
renderCart();

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=>{
    clearCart();
    location.reload();
});
