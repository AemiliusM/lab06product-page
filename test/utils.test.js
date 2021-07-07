import { findById, getTotal, renderTableRow } from '../utils.js';
import lamps from '../data/lamps.js';

const test = QUnit.test;

test('returns lamps by id', expect => {
    const expected = {
        id: 'red',
        name: 'Red Lava Lamp',
        image: 'RedLavaLamp.jpeg',
        description: 'A black glowing lamp with red lava floating inside',
        price: 20,
        cost: 12

    };
    const actual = findById(lamps, 'red');
    expect.deepEqual(actual, expected);
});

test('renderTableRow returns a <tr> element', expect => {
    const GreenLamp = {
        id: 'green',
        name: 'GreenLavaLamp',
        image: 'GreenLavaLamp.jpeg',
        description: 'A green glowing lamp with green lava floating inside',
        price: 25,
        cost: 12
    };
    const lampCart = {
        id: 'green',
        qty: 4
    };  
    const expected = `<tr><td>GreenLavaLamp</td><td>$25.00</td><td>4</td><td>$100.00</td></tr>`;
    const dom = renderTableRow(GreenLamp, lampCart);
    const html = dom.outerHTML;
    expect.deepEqual(html, expected);
});

test('getTotal should return the total price of all the items in the cart', expect => {
    const cart = [
        { id: 'red', qty: 2 },
        { id: 'green', qty: 1 }
    ];
    const data = [{
        id: 'red',
        price: 20
    },
    {
        id: 'green',
        price: 25
    }];

    const expected = 65;
    const actual = getTotal(data, cart);
    expect.deepEqual(expected, actual);
});