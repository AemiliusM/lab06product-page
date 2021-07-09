import lamps from './data/lamps.js';
import { renderLamp } from './renderlamp.js';
import { addItemtoCart } from './storage-utils.js';

const lampUl = document.getElementById('lavalamps');
for (let lamp of lamps) {
    const lampLi = renderLamp(lamp);
    lampUl.appendChild(lampLi);
}

const addButtons = document.querySelectorAll('.add');
for (let btn of addButtons) {
    btn.addEventListener('click', (e)=>{
        addItemtoCart(e.target.value);
        console.log(btn.value);
        console.log(btn);
    });
}