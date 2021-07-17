import { findById } from './utils.js';
import lamps from './data/lamps.js';

export const CART = 'CARTY-B';
export const PRODUCTS = 'LAMPS';

export function getproducts(){
    let lamp = localStorage.getItem(PRODUCTS);
    if (!lamp) {
        lamp = JSON.stringify(lamps);
        localStorage.setItem(PRODUCTS, lamp);
    }
    const parsedLamp = JSON.parse(lamp);
    return parsedLamp;
}

export function getCart(){
    let stringCart = localStorage.getItem(CART) || '[]';
    const cart = JSON.parse(stringCart); 
    
    return cart;
}

export function addItemtoCart(itemId) {
    const cart = getCart();
    const item = findById(cart, itemId);

    if (item) {
        item.qty ++;
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem);
    }

    localStorage.setItem(CART, JSON.stringify(cart));
}
export function clearCart() {
    localStorage.removeItem(CART);
}