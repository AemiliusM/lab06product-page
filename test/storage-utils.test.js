import { CART, PRODUCTS, getproducts, getCart, addItemtoCart, clearCart } from '../storage-utils.js';
import lamps from '../data/lamps.js';
const test = QUnit.test;

test('testing to see if getCart will return the cart from local storage as an object', (expect) => {
    const testCart = [
        { id: 'red', qty: 2 },
        { id: 'green', qty: 3 }
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);

    const cart = getCart();

    expect.deepEqual(cart, testCart);
});

test('getCart should return an empty array if the cart is empty', expect => {
    localStorage.removeItem(CART);

    const cart = getCart();
    const expected = [];

    expect.deepEqual(cart, expected);
});

test('addItemtoCart should update quantity if is already in cart', expect => {
    const testCart = [
        { id: 'red', qty: 2 },
        { id: 'green', qty: 3 }
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);
    
    addItemtoCart('red');
    const newCart = getCart();

    const expected = [
        { id: 'red', qty: 3 },
        { id: 'green', qty: 3 }
    ];
    expect.deepEqual(newCart, expected);
});

test ('addItem should add any new item that is not already in the cart', expect => {
    const testCart = [
        { id: 'red', qty: 2 },
        { id: 'green', qty: 3 }
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);
    
    addItemtoCart('purple');
    const newCart = getCart();

    const expected = [
        { id: 'red', qty: 2 },
        { id: 'green', qty: 3 },
        { id: 'purple', qty: 1 }
    ];
    expect.deepEqual(newCart, expected);
});

test('clearCart should delete cart and info from local storage', (expect)=>{
    const testCart = [
        { id: 'red', qty: 2 },
        { id: 'green', qty: 3 }
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);

    clearCart();

    const expected = [];
    const cart = getCart();
    expect.deepEqual(cart, expected);
});

test('getProducts return the list of products from localStorage', expect => {
    const testCart = [
        { id: 'red', qty: 2 },
        { id: 'green', qty: 3 }
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(PRODUCTS, testCartString);
    const actual = getproducts();

    expect.deepEqual(testCart, actual);

});

test('getproducts return default data if nothing stored in local storage', expect => {
    localStorage.removeItem('RESULTS');
    const expected = lamps;
    const actual = getproducts();
    expect.deepEqual(expected, actual);
});