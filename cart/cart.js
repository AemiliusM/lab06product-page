import { findById, getTotal, renderTableRow, toUDS } from '../utils.js';
import lamps from '../data/lamps.js';
import { getCart, clearCart } from '../storage-utils.js';

const tableBody = document.getElementById('table-body');
const cart = getCart();

function renderCart(){
    for (let item of cart) {
        const lamp = findById(lamps, item.id);
        const tblrw = renderTableRow(lamp, item);
        tableBody.appendChild(tblrw);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
        
    }
    const totalDom = document.getElementById('order-total');
    totalDom.textContent = toUDS(total);
}
const total = getTotal(lamps, cart);
renderCart();

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=>{
    clearCart();
    location.href = '../index.html';


});
const orderBtn = document.getElementById('checkout');
orderBtn.addEventListener('click', () => {
    const order = JSON.stringify(cart, true, 2);
    
    if (cart.length) {
        alert('Your Order Is:' + order + 'Your Total Is:' + toUDS(total));
        location.href = '../index.html';
        clearCart();
    } else {
        orderBtn.disabled = true;
        alert('Please Add Items To Place An Order!');
        location.href = '../index.html';
    }
});
